/************************************* CONEXION REDIS *****************************/
var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('Connected to Redis');
});

/************************************* CONEXION MYSQL *****************************/

var mysql = require('mysql');

var connection = crearConexion(mysql);

function crearConexion(sqlVar){

	return	sqlVar.createConnection({
				multipleStatements: true,
				host: 'localhost',
				user: 'root',
				password: 'admin',
				database: 'rio2015',
				port: 8085
			});
}


function handleDisconnect(sqlConnection) {

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('Error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      connection.destroy();						 // lost due to either server restart, or a
	  connection = crearConexion(sqlConnection);  // connnection idle timeout (the wait_timeout
    } else {                                      // server variable configures this)
      throw err;                                  
    }
  });
}

handleDisconnect(mysql);

/********************************** CARGA INICIAL REDIS *****************************/
var util = require('util');

var sql= 'select * from rio2015.contratos_di';
connection.query(sql, function(error, row){
	client.hgetall('contratos_di', function(err, data) {
		if (data==null&&err==null){
			for (var i in row){
				client.hset('contratos_di',i,row[i]);			
			}
		}
	});		
});

sql= 'select * from rio2015.contratos_periodo';
connection.query(sql, function(error, row){
	client.hgetall('contratos_periodo', function(err, data) {
		if (data==null&&err==null){
			for (var i in row){
				client.hset('contratos_periodo',i,row[i]);			
			}
		}
	});		
});

sql= 'select * from rio2015.clientes_periodo';
connection.query(sql, function(error, row){
	client.hgetall('clientes_periodo', function(err, data) {
		if (data==null&&err==null){
			for (var i in row){
				client.hset('clientes_periodo',i,row[i]);			
			}
		}
	});		
});

sql= 'select * from rio2015.clientes_di';
connection.query(sql, function(error, row){
	client.hgetall('clientes_di', function(err, data) {
		if (data==null&&err==null){
			for (var i in row){
				client.hset('clientes_di',i,row[i]);			
			}
		}
	});		
});

sql= 'select * from rio2015.componentes';
connection.query(sql, function(error, row){
	client.hgetall('componentes', function(err, data) {
		if (data==null&&err==null){
			for (var i in row){
				var registro={
					id: row[i].id,
					nombre: row[i].nombre,
					componente: row[i].componente					
				};
				client.hset('componentes',i,JSON.stringify(registro));			
			}
		}
	});		
});

sql= 'select * from rio2015.users';
connection.query(sql, function(error, row){
	client.hgetall('users', function(err, data) {
		if (data==null&&err==null){
			for (var i in row){
				var registro={
					id: row[i].user_id,
					nombre: row[i].nombre,
					apellido: row[i].apellido,
					username: row[i].username,
					esquemas: row[i].esquemas,					
					componentes: row[i].componentes,					
					metricas: row[i].metricas,					
					aprovisionadores: row[i].cubos					
				};
				client.hset('users',i,JSON.stringify(registro));			
			}
		}
	});		
});

sql= 'select * from rio2015.esquemas';
connection.query(sql, function(error, row){
	client.hgetall('esquemas', function(err, data) {
		if (data==null&&err==null){
			for (var i in row){
				var registro={
					id: row[i].id,
					nombre: row[i].nombre,
					esquema: row[i].esquema
				};				
				client.hset('esquemas',i,JSON.stringify(registro));
			}
		}
	});		
});

sql= 'select * from rio2015.aprovisionadores';
connection.query(sql, function(error, row){
	client.hgetall('aprovisionadores', function(err, data) {
		if (data==null&&err==null){
			for (var i in row){
				var registro={
					id: row[i].id,
					nombre: row[i].nombre,
					aprovisionador: row[i].cubos					
				};	
				client.hset('aprovisionadores',i,JSON.stringify(registro));			
			}
		}
	});	
});

sql= 'select * from rio2015.metricas';
connection.query(sql, function(error, row){
	client.hgetall('metricas', function(err, data) {
		if (data==null&&err==null){
			for (var i in row){
				var registro={
					id: row[i].id,
					nombre: row[i].nombre,
					metrica: row[i].metrica,
					valor: row[i].valor,
					operacion: row[i].operacion
				};	
				client.hset('metricas',i,JSON.stringify(registro));			
			}
		}
	});			
});

var consultasRedis = {};


consultasRedis.obtenerEsquema = function(unEsquema,callback){
	if (client){
		var found = false;
		client.hvals('esquemas', function(err, data){
			if (err){
				callback(err,null);
			}
			else{
				for(var i in data){
					var object = JSON.parse(data[i]);
					if(object.nombre == unEsquema){
						found = true;				
						callback(null,object.esquema);
					}
				}				
			}
			if (!found){
				callback(null,'');
			}	
		});	
	}
}

consultasRedis.obtenerComponente = function(unComponente,callback){
	if (client){
		var found = false;
		client.hvals('componentes', function(err, data){
			if (err){
				callback(err,null);
			}
			else{
				for(var i in data){
					var object = JSON.parse(data[i]);				
					if(object.nombre == unComponente){
						found = true;				
						callback(null,object.componente);
					}
				}				
			}
			if (!found){
				callback(null,'');
			}	
		});
	}
}

consultasRedis.obtenerMetrica = function(unaMetrica,callback){
	if (client){
		var found = false;
		client.hvals('metricas', function(err, data){
			if (err){
				callback(err,null);
			}
			else{
				for(var i in data){
					var object = JSON.parse(data[i]);	
					if(object.nombre == unaMetrica){
						found = true;
						var unJSON = '['+data[i]+']';
						unJSON = JSON.stringify(unJSON);					
						callback(null,unJSON);
					}
				}				
			}
			if (!found){
				callback(null,'');
			}	
		});		
	}
}

consultasRedis.listarExtractores = function (username,callback){
	if (client){
		var found = false;
		client.hvals('users', function(err, data){
			if (err){
				callback(err,null);
			}
			else{
				for(var i in data){
					var object = JSON.parse(data[i]);	
					if(object.username == username){
						found = true;												
						callback(null,object.esquemas);
					}
				}								
			}
			if (!found){
				callback(null,'');
			}	
		});
	}
}

consultasRedis.listarComponentes = function(username,callback){
	if (client){
		var found = false;
		client.hvals('users', function(err, data){
			if (err){
				callback(err,null);
			}
			else{
				for(var i in data){
					var object = JSON.parse(data[i]);	
					if(object.username == username){
						found = true;										
						callback(null,object.componentes);
					}
				}								
			}
			if (!found){
				callback(null,'');
			}	
		});
	}
}

consultasRedis.listarMetricas = function(username,callback){
	if (client){
		var found = false;
		client.hvals('users', function(err, data){
			if (err){
				callback(err,null);
			}
			else{
				for(var i in data){
					var object = JSON.parse(data[i]);	
					if(object.username == username){
						found = true;										
						callback(null,object.metricas);
					}
				}								
			}
			if (!found){
				callback(null,'');
			}	
		});		
	}
}

consultasRedis.buscarUsuario = function(usuario,callback){
	if (client){
		var found = false;
		client.hvals('users', function(err, data){
			if (err){
				callback(null);
			}
			else{
				for(var i in data){
					var object = JSON.parse(data[i]);	
					if(object.username == usuario){
						found = true;	
						callback(object.username);
					}
				}								
			}
			if (!found){
				callback('');
			}	
		});				
	}
}

consultasRedis.obtenerUsuario = function(usuario,callback){
	if (client){
		var found = false;
		client.hvals('users', function(err, data){
			if (err){
				callback(err,null);
			}
			else{
				for(var i in data){
					var object = JSON.parse(data[i]);	
					if(object.username == usuario){
						found = true;	
						callback(null,object.username);
					}
				}								
			}
			if (!found){
				callback(null,'');
			}	
		});				
	}
}

consultasRedis.listarUsuarios = function(callback){
	if(client){
		client.hvals('users', function(err, data){
			if (err){
				callback(err,null);
			}
			else{
				var vUsuarios = [];
				for(var i in data){
					var object = JSON.parse(data[i]);
					vUsuarios.push(object.username);
				}
				callback(null,vUsuarios);	
			}
		});					
	}
}

consultasRedis.listarAprovisionadores = function (callback){
	if(client){
		client.hvals('aprovisionadores', function(err, data){
			if (err){
				callback(err,null);
			}
			else{
				var vAprov = [];
				for(var i in data){
					var object = JSON.parse(data[i]);
					vAprov.push(object.nombre);
				}
				callback(null,vAprov);	
			}
		});					
	}
}

consultasRedis.buscarAprovisionador = function (nombre,callback){
	if (client){
		var found = false;
		client.hvals('aprovisionadores', function(err, data){
			if (err){
				callback(err,null);
			}
			else{
				for(var i in data){
					var object = JSON.parse(data[i]);	
					if(object.nombre == nombre){
						found = true;	
						callback(null,object.cubos);
					}
				}								
			}
			if (!found){
				callback(null,'');
			}	
		});				
	}
}


module.exports = consultasRedis;