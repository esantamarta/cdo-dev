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

var queryModel = {};


queryModel.ejecutarEsquema = function(datos,callback){
	if (connection){
		var vConsultas = [];
		var vRetorno = [];
		var resultado;
		var consulta='';
		
		for (var i in datos){

				var sql = armarConsulta(datos[i].tabla,datos);
				vConsultas.push(sql);				
		}	
		vConsultas=eliminateDuplicates(vConsultas);
		
		for (var j in vConsultas){
			if (consulta==''){
				consulta = vConsultas[j];
			}
			else{
				consulta = consulta+';'+vConsultas[j];
			}
		}

		connection.query(consulta,function(error,result){
			if(error){
				result = '';
			}
			callback(consulta,result);			
		});
	}	
}

queryModel.ejecutarCubo = function(datos,callback){
	if (connection){
		var vConsultas = [];
		var vRetorno = [];
		var resultado;
		var consulta='';
		
		for (var i in datos){

			var sql = armarEjecucion(datos[i].tabla,datos);
			vConsultas.push(sql);				
		}	
		vConsultas=eliminateDuplicates(vConsultas);
		
		for (var j in vConsultas){
			if (consulta==''){
				consulta = vConsultas[j];
			}
			else{
				consulta = consulta+';'+vConsultas[j];
			}
		}
		
		connection.query(consulta,function(error,result){
			if(error){
				result = '';
			}
			callback(consulta,result);			
		});
	}	
}

queryModel.ejecutarUnEsquema = function(datos,callback){
	if (connection){
	
		var sql;		
		if (datos.valor==''){
			sql = 'select '+datos.campo+' from rio2015.'+datos.tabla;
		}
		else{
			sql = 'select '+datos.campo+' from rio2015.'+datos.tabla+' where '+datos.campo+' = \''+datos.valor+'\'';
		}
		if (datos.tabla=='contratos_periodo'||datos.tabla=='clientes_periodo'){
			if(sql.indexOf('where')!=-1){
				sql= sql+' and periodo='+datos.periodo;
			}
			else{
				sql= sql+' where periodo='+datos.periodo;
			}
		}

		connection.query(sql,function(error,result){
			if(error){
				result = '';
				callback(error+' '+sql,result);
			}
			else{
				callback(sql,result);
			}						
		});
	}	
}

queryModel.obtenerImpRiesgo = function(campos,callback){
	if (connection){
		var sql = armarSQLImpRiesgo(campos);
		connection.query(sql,function(error,result){
			if (error){
				result= '';
				callback(error,result);
			}
			else{
				callback(sql,result);
			}
			
		});
	}
}

queryModel.insertarComponente = function(componente,callback){
	if (connection){
		var sql = 'CREATE TABLE IF NOT EXISTS componentes (id int(10) unsigned NOT NULL AUTO_INCREMENT,nombre varchar(50) COLLATE utf8_unicode_ci NOT NULL UNIQUE, componente varchar(500) COLLATE utf8_unicode_ci NOT NULL,created_at timestamp NOT NULL DEFAULT \'0000-00-00 00:00:00\',updated_at timestamp NOT NULL DEFAULT \'0000-00-00 00:00:00\',PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1';
		connection.query(sql, function(error){
			if(error){
				throw error;
			}
		});		
		sql = 'INSERT INTO componentes SET ?';
		connection.query(sql, componente, function(error, result){
			if(error){				
				result= '';
				error= error+sql;
				callback(error, result);				
			}
			else{
				//devolvemos la última id insertada
				callback(null,{"insertId" : result.insertId});
			}
		});
	}	
}

queryModel.insertarMetrica = function(metrica,callback){
	if (connection){
		var sql = 'CREATE TABLE IF NOT EXISTS metricas (id int(10) unsigned NOT NULL AUTO_INCREMENT,valor float,operacion varchar(20) COLLATE utf8_unicode_ci NOT NULL,nombre varchar(50) COLLATE utf8_unicode_ci NOT NULL UNIQUE, metrica varchar(1500) COLLATE utf8_unicode_ci NOT NULL,created_at timestamp NOT NULL DEFAULT \'0000-00-00 00:00:00\',updated_at timestamp NOT NULL DEFAULT \'0000-00-00 00:00:00\',PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1';
		connection.query(sql, function(error){
			if(error){
				throw error;
			}
		});
	
		sql = 'INSERT INTO metricas SET ?';
		connection.query(sql,metrica, function(error, result){
			if(error){				
				result= '';
				error= error+sql;
				callback(error, result);				
			}
			else{
				//devolvemos la última id insertada
				callback(null,{"insertId" : result.insertId});
			}
		});
	}	
}

queryModel.obtenerDivisor = function(campo,datos,callback){
	if (connection){
		sql = armarSQLDivisor(campo,datos);
		connection.query(sql,function(error,result){
			if (error){
				result= '';
				error=error+sql;
				callback(error,result);
			}
			else{
				callback(sql,result);
			}
			
		});		
	}
}

queryModel.editarCubo = function(cubo,callback){
	if (connection){		
		sql = 'UPDATE rio2015.aprovisionadores SET ? where nombre=\''+cubo.nombre+'\'';
		connection.query(sql, cubo, function(error, result){
			if(error){				
				result= '';
				callback(error, result);				
			}
			else{
				//devolvemos la última id editada
				callback(null,{"insertId" : cubo.id});

			}
		});
	}
}

queryModel.editarEsquema = function(registro,callback){
	if (connection){		
		sql = 'UPDATE rio2015.esquemas SET ? where nombre=\''+registro.nombre+'\'';
		connection.query(sql, registro, function(error, result){
			if(error){				
				result= '';
				callback(error, result);				
			}
			else{
				//devolvemos la última id insertada
				callback(null,{"insertId" : registro.id});

			}
		});
	}
}

queryModel.editarComponente = function(registro,callback){
	if (connection){		
		sql = 'UPDATE rio2015.componentes SET ? where nombre=\''+registro.nombre+'\'';
		connection.query(sql, registro, function(error, result){
			if(error){				
				result= '';
				callback(error, result);				
			}
			else{
				//devolvemos la última id insertada
				callback(sql,{"insertId" : registro.id});

			}
		});
	}
}

queryModel.editarMetrica = function(registro,callback){
	if (connection){		
		sql = 'UPDATE rio2015.metricas SET ? where nombre=\''+registro.nombre+'\'';
		connection.query(sql, registro, function(error, result){
			if(error){				
				result= '';
				callback(error, result);				
			}
			else{
				//devolvemos la última id insertada
				callback(sql,{"insertId" : registro.id});

			}
		});
	}
}

queryModel.eliminarEsquema = function(username,id,callback){
	if (connection){
		sql = 'select nombre FROM rio2015.esquemas where id=\''+id+'\'';
		connection.query(sql,function(error, result){
			if(!error){
				var extractor = result[0].nombre;
				sql = 'SELECT user_id,esquemas FROM rio2015.users where esquemas like \'%'+extractor+'%\'';
				
				connection.query(sql,function(error, vResultado){
					for (var i in vResultado){
						var cadena = vResultado[i].esquemas;
						cadena=cadena.replace(extractor+',','');
						cadena=cadena.replace(','+extractor,'');
						cadena=cadena.replace(extractor,'');		
						if (cadena == ''){
							cadena= null;
							var consulta = 'UPDATE rio2015.users SET esquemas = '+cadena+' WHERE user_id =\''+vResultado[i].user_id+'\'';
						}
						else{
							var consulta = 'UPDATE rio2015.users SET esquemas = \''+cadena+'\' WHERE user_id =\''+vResultado[i].user_id+'\'';
						}					
						
						connection.query(consulta);
					}
				
				});
			}				
		});
	
		sql = 'DELETE FROM rio2015.esquemas where id=\''+id+'\'';
		connection.query(sql,function(error, result){
			if(error){				
				result= '';
				callback(error, result);				
			}
			else{
				//devolvemos la última id insertada
				callback(null,{"insertId" : id});

			}
		});
		
		sql = 'ALTER TABLE rio2015.esquemas AUTO_INCREMENT = 1';
		connection.query(sql);
	}
}

queryModel.eliminarComponente = function(username,id,callback){
	if (connection){
		sql = 'select nombre FROM rio2015.componentes where id=\''+id+'\'';
		connection.query(sql,function(error, result){
			if(!error){
				
				var componente = result[0].nombre;
				sql = 'SELECT user_id,componentes FROM rio2015.users where componentes like \'%'+componente+'%\'';
				
				connection.query(sql,function(error, vResultado){
					for (var i in vResultado){
						var cadena = vResultado[i].componentes;
						cadena=cadena.replace(componente+',','');
						cadena=cadena.replace(','+componente,'');
						cadena=cadena.replace(componente,'');		
						if (cadena == ''){
							cadena= null;
							var consulta = 'UPDATE rio2015.users SET componentes = '+cadena+' WHERE user_id =\''+vResultado[i].user_id+'\'';
						}
						else{
							var consulta = 'UPDATE rio2015.users SET componentes = \''+cadena+'\' WHERE user_id =\''+vResultado[i].user_id+'\'';
						}					
						
						connection.query(consulta);
					}
				});							
			}
		});
		
		sql = 'DELETE FROM rio2015.componentes where id=\''+id+'\'';
		connection.query(sql,function(error, result){
			if(error){				
				result= '';
				callback(error, result);				
			}
			else{
				//devolvemos la última id insertada
				callback(null,{"insertId" : id});

			}
		});
		sql = 'ALTER TABLE rio2015.componentes AUTO_INCREMENT = 1';
		connection.query(sql);
	}
}

queryModel.eliminarCubo = function(id,callback){
	if (connection){
		sql = 'select nombre FROM rio2015.aprovisionadores where id=\''+id+'\'';
		connection.query(sql,function(error, result){
			if(!error){
				
				var cubo = result[0].nombre;
				sql = 'SELECT user_id,cubos FROM rio2015.users where cubos like \'%'+cubo+'%\'';
				
				connection.query(sql,function(error, vResultado){
					for (var i in vResultado){
						var cadena = vResultado[i].cubos;
						cadena=cadena.replace(cubo+',','');
						cadena=cadena.replace(','+cubo,'');
						cadena=cadena.replace(cubo,'');		
						if (cadena == ''){
							cadena= null;
							var consulta = 'UPDATE rio2015.users SET cubos = '+cadena+' WHERE user_id =\''+vResultado[i].user_id+'\'';
						}
						else{
							var consulta = 'UPDATE rio2015.users SET cubos = \''+cadena+'\' WHERE user_id =\''+vResultado[i].user_id+'\'';
						}					
						
						connection.query(consulta);
					}
				});							
			}
		});
		
		sql = 'DELETE FROM rio2015.aprovisionadores where id=\''+id+'\'';
		connection.query(sql,function(error, result){
			if(error){				
				result= '';
				callback(error, result);				
			}
			else{
				//devolvemos la última id insertada
				callback(null,{"insertId" : id});

			}
		});
		sql = 'ALTER TABLE rio2015.aprovisionadores AUTO_INCREMENT = 1';
		connection.query(sql);
	}
}

queryModel.eliminarMetrica = function(username,id,callback){
	if (connection){

		sql = 'select nombre FROM rio2015.metricas where id=\''+id+'\'';
		connection.query(sql,function(error, result){
			if(!error){
				var metrica = result[0].nombre;
				sql = 'SELECT user_id,metricas FROM rio2015.users where metricas like \'%'+metrica+'%\'';
				
				connection.query(sql,function(error, vResultado){
					for (var i in vResultado){
						var cadena = vResultado[i].metricas;
						cadena=cadena.replace(metrica+',','');
						cadena=cadena.replace(','+metrica,'');
						cadena=cadena.replace(metrica,'');		
						if (cadena == ''){
							cadena= null;
							var consulta = 'UPDATE rio2015.users SET metricas = '+cadena+' WHERE user_id =\''+vResultado[i].user_id+'\'';
						}
						else{
							var consulta = 'UPDATE rio2015.users SET metricas = \''+cadena+'\' WHERE user_id =\''+vResultado[i].user_id+'\'';
						}					
						
						connection.query(consulta);
					}
				});
							
			}
		});
		
		sql = 'DELETE FROM rio2015.metricas where id=\''+id+'\'';
		connection.query(sql,function(error, result){
			if(error){				
				result= '';
				callback(error, result);				
			}
			else{
				//devolvemos el id eliminado
				callback(null,{"insertId" : id});

			}
		});
		sql = 'ALTER TABLE rio2015.metricas AUTO_INCREMENT = 1';
		connection.query(sql);
	}
}

queryModel.setEsquemaUsuario = function(username,esquema,callback){
	if (connection){
		var sql = 'select esquemas from rio2015.users where username = \''+username+'\'';

		connection.query(sql,function(error, result){
			if (result[0].esquemas==null||result[0].esquemas==''){				
				var consulta = 'UPDATE rio2015.users SET esquemas = \''+esquema+'\' WHERE username =\''+username+'\'';
			}
			else{
				var consulta = 'UPDATE rio2015.users SET esquemas = CONCAT(esquemas,\','+esquema+'\') WHERE username =\''+username+'\'';
			}			
			connection.query(consulta,function(error){
				if(error){				
					callback(error+' '+sql);				
				}
				else{
					callback('');
				}
			});
		});				
	}
}

queryModel.setComponenteUsuario = function(username,componente,callback){
	if (connection){
		var sql = 'select componentes from rio2015.users where username = \''+username+'\'';

		connection.query(sql,function(error, result){
			if (result[0].componentes==null){				
				var consulta = 'UPDATE rio2015.users SET componentes = \''+componente+'\' WHERE username =\''+username+'\'';
			}
			else{
				var consulta = 'UPDATE rio2015.users SET componentes = CONCAT(componentes,\','+componente+'\') WHERE username =\''+username+'\'';
			}			
			connection.query(consulta,function(error){
				if(error){				
					callback(error+' '+sql);				
				}
				else{
					callback('');
				}
			});
		});				
	}
}

queryModel.setMetricaUsuario = function(username,metrica,callback){
	if (connection){
		var sql = 'select metricas from rio2015.users where username = \''+username+'\'';

		connection.query(sql,function(error, result){
			if (result[0].metricas==null){				
				var consulta = 'UPDATE rio2015.users SET metricas = \''+metrica+'\' WHERE username =\''+username+'\'';
			}
			else{
				var consulta = 'UPDATE rio2015.users SET metricas = CONCAT(metricas,\','+metrica+'\') WHERE username =\''+username+'\'';
			}			
			connection.query(consulta,function(error){
				if(error){				
					callback(error+' '+sql);				
				}
				else{
					callback('');
				}
			});
		});				
	}
}

queryModel.asignarMetrica = function (usuario,metrica,callback){
	if (connection){
		var sql = 'select metricas from rio2015.users where username = \''+usuario+'\'';

		connection.query(sql,function(error, result){
			if (result[0].metricas==null){				
				var consulta = 'UPDATE rio2015.users SET metricas = \''+metrica+'\' WHERE username =\''+usuario+'\'';
			}
			else{
				var consulta = 'UPDATE rio2015.users SET metricas = CONCAT(metricas,\','+metrica+'\') WHERE username =\''+usuario+'\'';
			}			
			connection.query(consulta,function(error,result){
				if(error){				
					callback(error+' '+sql);				
				}
				else{
					callback(null,{"insertId" : "OK"});
				}
			});
		});				
	}
}

queryModel.asignarCubo = function(username,cubo,callback){
	if (connection){
		var sql = 'select cubos from rio2015.users where username = \''+username+'\'';

		connection.query(sql,function(error, result){
			if (result[0].cubos==null||result[0].cubos==''){				
				var consulta = 'UPDATE rio2015.users SET cubos = \''+cubo+'\' WHERE username =\''+username+'\'';
			}
			else{
				var consulta = 'UPDATE rio2015.users SET cubos = CONCAT(cubos,\','+cubo+'\') WHERE username =\''+username+'\'';
			}	
			
			connection.query(consulta,function(error,result){
				if(error){				
					callback(error+' '+sql);				
				}
				else{
					callback(null,{"insertId" : "OK"});
				}
			});
		});				
	}
}

queryModel.asignarComponente = function (usuario,componente,callback){
	if (connection){
		var sql = 'select componentes from rio2015.users where username = \''+usuario+'\'';

		connection.query(sql,function(error, result){
			if (result[0].componentes==null){				
				var consulta = 'UPDATE rio2015.users SET componentes = \''+componente+'\' WHERE username =\''+usuario+'\'';
			}
			else{
				var consulta = 'UPDATE rio2015.users SET componentes = CONCAT(componentes,\','+componente+'\') WHERE username =\''+usuario+'\'';
			}			
			connection.query(consulta,function(error,result){
				if(error){				
					callback(error+' '+sql);				
				}
				else{
					callback(null,{"insertId" : "OK"});
				}
			});
		});				
	}
}

queryModel.asignarExtractor = function (usuario,extractor,callback){
	if (connection){
		var sql = 'select esquemas from rio2015.users where username = \''+usuario+'\'';

		connection.query(sql,function(error, result){
			if (result[0].esquemas==null){				
				var consulta = 'UPDATE rio2015.users SET esquemas = \''+extractor+'\' WHERE username =\''+usuario+'\'';
			}
			else{
				var consulta = 'UPDATE rio2015.users SET esquemas = CONCAT(esquemas,\','+extractor+'\') WHERE username =\''+usuario+'\'';
			}			
			connection.query(consulta,function(error,result){
				if(error){				
					callback(error+' '+sql);				
				}
				else{
					callback(null,{"insertId" : "OK"});
				}
			});
		});				
	}
}

queryModel.listarIndicadores = function(callback){
	if (connection){
		var sql = 'select * from rio2015.indicadores';
		connection.query(sql,function(error,result){
		//Asumo que no hay errores en la consulta
			callback(null,result);			
		});
	}
}

queryModel.ingresarCubo = function (obj,callback){
	if (connection){
		sql = 'INSERT INTO aprovisionadores SET ?';
		connection.query(sql, obj, function(error, result){
			if(error){				
				result= '';
				error= error+'-'+sql;
				callback(error, result);				
			}
			else{
				//devolvemos la última id insertada
				callback(null,{"insertId" : result.insertId});
			}
		});
	}
}

queryModel.buscarCubo = function (nombre,callback){
	if (connection){
		var sql = 'SELECT * from rio2015.aprovisionadores where nombre = \''+nombre+'\'';
		
		connection.query(sql, function(error, row){
			if(error){
				row= '';
				callback(error, row);
			}
			else{
				callback(null, row);
			}
		});		
	}
}

queryModel.buscarCuboUsuario = function (username,callback){
	if (connection){
		var sql = 'SELECT cubos from rio2015.users where username = \''+username+'\'';
		
		connection.query(sql, function(error, row){
			if(error){
				row= '';
				callback(error, row);
			}
			else{
				if (row[0].cubos==null||row[0].cubos==''){
					row= '';
					callback(error, row);
				}
				else{
					var vCubos = row[0].cubos.split(',');
					var consulta = 'SELECT cubos from rio2015.aprovisionadores where nombre in (';
					for (var i in vCubos){
						if(i < vCubos.length-1){
							consulta = consulta +'\''+vCubos[i]+'\',';
						}
						else{
							consulta = consulta +'\''+vCubos[i]+'\'';
						}
					}
					consulta = consulta+')';
					connection.query(consulta, function(error, result){
						if(error){
							result= '';
							error = error+'-'+consulta;
							callback(error,result);
						}
						else{
							callback(null,result);
						}
					});					
				}
			}
		});		
	}
}

queryModel.consultarAsignacionCubos = function(callback){
	if (connection){
		var sql = 'SELECT username,cubos from rio2015.users where cubos is not null';
		connection.query(sql, function(error, result){
			if(error){
				result= '';
				callback(error+'-'+sql, result);
			}
			else{
				callback(null,result);
			}
		});
	}
}

queryModel.consultarAsignacionExt = function(callback){
	if (connection){
		var sql = 'SELECT username,esquemas from rio2015.users where esquemas is not null';
		connection.query(sql, function(error, result){
			if(error){
				result= '';
				callback(error+'-'+sql, result);
			}
			else{
				callback(null,result);
			}
		});
	}
}

queryModel.consultarAsignacionCompo = function(callback){
	if (connection){
		var sql = 'SELECT username,componentes from rio2015.users where componentes is not null';
		connection.query(sql, function(error, result){
			if(error){
				result= '';
				callback(error+'-'+sql, result);
			}
			else{
				callback(null,result);
			}
		});
	}
}

queryModel.consultarAsignacionMetri = function(callback){
	if (connection){
		var sql = 'SELECT username,metricas from rio2015.users where metricas is not null';
		connection.query(sql, function(error, result){
			if(error){
				result= '';
				callback(error+'-'+sql, result);
			}
			else{
				callback(null,result);
			}
		});
	}
}

queryModel.desasignarAprovisionador = function(aprovisionador,user,callback){
	if (connection){

		sql = 'SELECT user_id,cubos FROM rio2015.users where username = \''+user+'\'';
			
		connection.query(sql,function(error, vResultado){
			for (var i in vResultado){
				var cadena = vResultado[i].cubos;
				cadena=cadena.replace(aprovisionador+',','');
				cadena=cadena.replace(','+aprovisionador,'');
				cadena=cadena.replace(aprovisionador,'');		
				if (cadena == ''){
					cadena= null;
					var consulta = 'UPDATE rio2015.users SET cubos = '+cadena+' WHERE user_id =\''+vResultado[i].user_id+'\'';
				}
				else{
					var consulta = 'UPDATE rio2015.users SET cubos = \''+cadena+'\' WHERE user_id =\''+vResultado[i].user_id+'\'';
				}					
							
				connection.query(consulta,function(error, result){
					if(error){				
						result= '';
						callback(error, result);				
					}
					else{
						//devolvemos el id modificado
						callback(null,{"insertId" : aprovisionador});
					}
				});
			}		
		});
	}
}

queryModel.desasignarExtractor = function(extractor,user,callback){
	if (connection){

		sql = 'SELECT user_id,esquemas FROM rio2015.users where username = \''+user+'\'';
			
		connection.query(sql,function(error, vResultado){
			for (var i in vResultado){
				var cadena = vResultado[i].esquemas;
				cadena=cadena.replace(extractor+',','');
				cadena=cadena.replace(','+extractor,'');
				cadena=cadena.replace(extractor,'');		
				if (cadena == ''){
					cadena= null;
					var consulta = 'UPDATE rio2015.users SET esquemas = '+cadena+' WHERE user_id =\''+vResultado[i].user_id+'\'';
				}
				else{
					var consulta = 'UPDATE rio2015.users SET esquemas = \''+cadena+'\' WHERE user_id =\''+vResultado[i].user_id+'\'';
				}					
							
				connection.query(consulta,function(error, result){
					if(error){				
						result= '';
						callback(error+'-'+consulta, result);				
					}
					else{
						//devolvemos el id modificado
						callback(null,{"insertId" : extractor});
					}
				});
			}		
		});
	}
}

queryModel.desasignarComponente = function(componente,user,callback){
	if (connection){

		sql = 'SELECT user_id,componentes FROM rio2015.users where username = \''+user+'\'';
			
		connection.query(sql,function(error, vResultado){
			for (var i in vResultado){
				var cadena = vResultado[i].componentes;
				cadena=cadena.replace(componente+',','');
				cadena=cadena.replace(','+componente,'');
				cadena=cadena.replace(componente,'');		
				if (cadena == ''){
					cadena= null;
					var consulta = 'UPDATE rio2015.users SET componentes = '+cadena+' WHERE user_id =\''+vResultado[i].user_id+'\'';
				}
				else{
					var consulta = 'UPDATE rio2015.users SET componentes = \''+cadena+'\' WHERE user_id =\''+vResultado[i].user_id+'\'';
				}					
							
				connection.query(consulta,function(error, result){
					if(error){				
						result= '';
						callback(error+'-'+consulta, result);				
					}
					else{
						//devolvemos el id modificado
						callback(null,{"insertId" : componente});
					}
				});
			}		
		});
	}
}

queryModel.desasignarMetrica = function(metrica,user,callback){
	if (connection){

		sql = 'SELECT user_id,metricas FROM rio2015.users where username = \''+user+'\'';
			
		connection.query(sql,function(error, vResultado){
			for (var i in vResultado){
				var cadena = vResultado[i].metricas;
				cadena=cadena.replace(metrica+',','');
				cadena=cadena.replace(','+metrica,'');
				cadena=cadena.replace(metrica,'');		
				if (cadena == ''){
					cadena= null;
					var consulta = 'UPDATE rio2015.users SET metricas = '+cadena+' WHERE user_id =\''+vResultado[i].user_id+'\'';
				}
				else{
					var consulta = 'UPDATE rio2015.users SET metricas = \''+cadena+'\' WHERE user_id =\''+vResultado[i].user_id+'\'';
				}					
							
				connection.query(consulta,function(error, result){
					if(error){				
						result= '';
						callback(error+'-'+consulta, result);				
					}
					else{
						//devolvemos el id modificado
						callback(null,{"insertId" : metrica});
					}
				});
			}		
		});
	}
}

// ************************ FUNCIONES AUXILIARES ************************ //

function armarSQLImpRiesgo(registros){
	var query = "select imp_riesgo from rio2015."+registros[0].tabla;

	for (var j in registros){
		if (registros[j].valor_desde != ''){
			if(registros[j].campo == 'SEGMENTO'|| registros[j].campo=='SUBSEGMENTO'||registros[j].campo == 'MARCA'|| registros[j].campo=='SUBMARCA'){
				if (query.indexOf('where')==-1){
					query = query+" where "+registros[j].campo+" = "+registros[j].valor_desde;
				}
				else{				
					query = query+" and "+registros[j].campo+" = "+registros[j].valor_desde;
				} 				
			}
			else{
				if (query.indexOf('where')==-1){
					query = query+" where "+registros[j].campo+" >= "+registros[j].valor_desde;
				}
				else{				
					query = query+" and "+registros[j].campo+" >= "+registros[j].valor_desde;
				}
				if (registros[j].valor_hasta != ''){
					query = query+" and "+registros[j].campo+" <= "+registros[j].valor_hasta;
				}
			}			
		}
		else{
			if(registros[j].valor_hasta != ''){
				if (query.indexOf('where')==-1){
					query = query+" where "+registros[j].campo+" <= "+registros[j].valor_hasta;
				}
				else{				
					query = query+" and "+registros[j].campo+" <= "+registros[j].valor_hasta;
				}				
			}
			else{
				if (query.indexOf('where')==-1){
					if (registros.length!=1){
						if (registros[j].campo=='PERIODO'){
							if (registros[j].valor_desde != ''){
								query = query+" where "+registros[j].campo+" >= "+registros[j].valor_desde;
							}
							else{
								if(registros[j].valor_hasta != ''){
									query = query+" where "+registros[j].campo+" <= "+registros[j].valor_hasta;
								}
								else{
									query = query+" where "+registros[j].campo+" = "+registros[j].periodo;
								}								
							}	
						}												
					}
				}	
				else{
					if (registros[j].campo=='PERIODO'){
						if (registros[j].valor_desde != ''){
							query = query+" or "+registros[j].campo+" >= "+registros[j].valor_desde;
						}
						else{
							if(registros[j].valor_hasta != ''){
								query = query+" or "+registros[j].campo+" <= "+registros[j].valor_hasta;
							}
							else{
								query = query+" or "+registros[j].campo+" = "+registros[j].periodo;
							}
						}						
					}					
				} 				
			}
		}

	}
	
	if(registros[j].tabla.indexOf('periodo')!=-1){
		if(query.indexOf('PERIODO')==-1 && query.indexOf('periodo')==-1){
			if (query.indexOf('where')==-1){
				query = query+" where periodo = "+registros[j].periodo;
			}
			else{
				query = query+" and periodo = "+registros[j].periodo;
			}					
		}
	}
	
	return query;
}

function armarSQLDivisor(campo,registros){
	var query = "select distinct "+campo+" from rio2015."+registros[0].tabla;
	for (var j in registros){
		if (registros[j].valor_desde != ''){
			if(registros[j].campo == 'SEGMENTO'|| registros[j].campo=='SUBSEGMENTO'||registros[j].campo == 'MARCA'|| registros[j].campo=='SUBMARCA'){
				if (query.indexOf('where')==-1){
					query = query+" where "+registros[j].campo+" = "+registros[j].valor_desde;
				}
				else{				
					query = query+" and "+registros[j].campo+" = "+registros[j].valor_desde;
				} 				
			}
			else{
				if (query.indexOf('where')==-1){
					query = query+" where "+registros[j].campo+" >= "+registros[j].valor_desde;
				}
				else{				
					query = query+" and "+registros[j].campo+" >= "+registros[j].valor_desde;
				}
				if (registros[j].valor_hasta != ''){
					query = query+" and "+registros[j].campo+" <= "+registros[j].valor_hasta;
				}
			}			
		}
		else{
			if(registros[j].valor_hasta != ''){
				if (query.indexOf('where')==-1){
					query = query+" where "+registros[j].campo+" <= "+registros[j].valor_hasta;
				}
				else{				
					query = query+" and "+registros[j].campo+" <= "+registros[j].valor_hasta;
				}				
			}
			else{
				if (query.indexOf('where')==-1){
					if (registros.length!=1){
						if (registros[j].campo=='PERIODO'){
							if (registros[j].valor_desde != ''){
								query = query+" where "+registros[j].campo+" >= "+registros[j].valor_desde;
							}
							else{
								if(registros[j].valor_hasta != ''){
									query = query+" where "+registros[j].campo+" <= "+registros[j].valor_hasta;
								}
								else{
									query = query+" where "+registros[j].campo+" = "+registros[j].periodo;
								}								
							}	
						}												
					}
				}	
				else{
					if (registros[j].campo=='PERIODO'){
						if (registros[j].valor_desde != ''){
							query = query+" or "+registros[j].campo+" >= "+registros[j].valor_desde;
						}
						else{
							if(registros[j].valor_hasta != ''){
								query = query+" or "+registros[j].campo+" <= "+registros[j].valor_hasta;
							}
							else{
								query = query+" or "+registros[j].campo+" = "+registros[j].periodo;
							}
						}						
					}					
				} 				
			}
		}

	}
	
	if(registros[j].tabla.indexOf('periodo')!=-1){
		if(query.indexOf('PERIODO')==-1 && query.indexOf('periodo')==-1){
			if (query.indexOf('where')==-1){
				query = query+" where periodo = "+registros[j].periodo;
			}
			else{
				query = query+" and periodo = "+registros[j].periodo;
			}					
		}
	}
	
	return query;
}

function armarEjecucion(tabla,registros){
	var unSQL='select ';
	var aux = obtenerValores(tabla,registros);
	for (var i in aux.fil){
		if (unSQL=='select '){
			unSQL = unSQL+aux.fil[i].campo;
		}
		else{
			unSQL = unSQL+','+aux.fil[i].campo;
		}
	}
	unSQL = unSQL+' from '+tabla;

	return unSQL;
}

function armarConsulta(tabla,registros){
	var unSQL='select ';
	var aux = getValores(tabla,registros);
	for (var i in aux.fil){
		if (unSQL=='select '){
			unSQL = unSQL+aux.fil[i].campo;
		}
		else{
			unSQL = unSQL+','+aux.fil[i].campo;
		}
	}
	unSQL = unSQL+' from '+tabla;
	for (var j in aux.fil){

		if (aux.fil[j].valor_desde != ''){
			if(aux.fil[j].campo == 'SEGMENTO'|| aux.fil[j].campo=='SUBSEGMENTO'||aux.fil[j].campo == 'MARCA'|| aux.fil[j].campo=='SUBMARCA'){
				if (unSQL.indexOf('where')==-1){
					unSQL = unSQL+" where "+aux.fil[j].campo+" = "+aux.fil[j].valor_desde;
				}
				else{				
					unSQL = unSQL+" and "+aux.fil[j].campo+" = "+aux.fil[j].valor_desde;
				} 				
			}
			else{
				if (unSQL.indexOf('where')==-1){
					unSQL = unSQL+" where "+aux.fil[j].campo+" >= "+aux.fil[j].valor_desde;
				}
				else{				
					unSQL = unSQL+" and "+aux.fil[j].campo+" >= "+aux.fil[j].valor_desde;
				}
				if (aux.fil[j].valor_hasta != ''){
					unSQL = unSQL+" and "+aux.fil[j].campo+" <= "+aux.fil[j].valor_hasta;
				}
			}			
		}
		else{
			if(aux.fil[j].valor_hasta != ''){
				if (unSQL.indexOf('where')==-1){
					unSQL = unSQL+" where "+aux.fil[j].campo+" <= "+aux.fil[j].valor_hasta;
				}
				else{				
					unSQL = unSQL+" and "+aux.fil[j].campo+" <= "+aux.fil[j].valor_hasta;
				}				
			}
			else{
				if (unSQL.indexOf('where')==-1){
					if (aux.fil.length!=1){
						if (aux.fil[j].campo=='PERIODO'){
							if (aux.fil[j].valor_desde != ''){
								unSQL = unSQL+" where "+aux.fil[j].campo+" >= "+aux.fil[j].valor_desde;
							}
							else{
								if(aux.fil[j].valor_hasta != ''){
									unSQL = unSQL+" where "+aux.fil[j].campo+" <= "+aux.fil[j].valor_hasta;
								}
								else{
									unSQL = unSQL+" where "+aux.fil[j].campo+" = "+aux.fil[j].periodo;
								}								
							}	
						}												
					}
				}	
				else{
					if (aux.fil[j].campo=='PERIODO'){
						if (aux.fil[j].valor_desde != ''){
							unSQL = unSQL+" or "+aux.fil[j].campo+" >= "+aux.fil[j].valor_desde;
						}
						else{
							if(aux.fil[j].valor_hasta != ''){
								unSQL = unSQL+" or "+aux.fil[j].campo+" <= "+aux.fil[j].valor_hasta;
							}
							else{
								unSQL = unSQL+" or "+aux.fil[j].campo+" = "+aux.fil[j].periodo;
							}
						}						
					}					
				} 				
			}
		}		
	}
	
	if(tabla.indexOf('periodo')!=-1){
		if(unSQL.indexOf('PERIODO')==-1 && unSQL.indexOf('periodo')==-1){
			if (unSQL.indexOf('where')==-1){
				unSQL = unSQL+" where periodo = "+aux.fil[j].periodo;
			}
			else{
				unSQL = unSQL+" and periodo = "+aux.fil[j].periodo;
			}					
		}
	}

	return unSQL;
}

function getValores(unaTabla,unEsquema){
	vRetorno={
		fil:[]	
	};

	for (i in unEsquema){
		if(i!=='unique'){
			if (unEsquema[i].tabla==unaTabla){
				var registro={
					tabla: null,
					campo: null,
					valor_desde: null,
					valor_hasta: null,
					periodo: null
				};
				registro.tabla = unEsquema[i].tabla;
				registro.campo = unEsquema[i].campo;
				registro.valor_desde = unEsquema[i].valor_desde;
				registro.valor_hasta = unEsquema[i].valor_hasta;
				registro.periodo = unEsquema[i].periodo;
				vRetorno.fil.push(registro);
				
			}
		}
	}
	return vRetorno;
}

function obtenerValores(unaTabla,unEsquema){
	vRetorno={
		fil:[]	
	};

	for (i in unEsquema){
		if(i!=='unique'){
			if (unEsquema[i].tabla==unaTabla){
				var registro={
					tabla: null,
					campo: null					
				};
				registro.tabla = unEsquema[i].tabla;
				registro.campo = unEsquema[i].campo;	
				vRetorno.fil.push(registro);				
			}
		}
	}
	return vRetorno;
}

//Funcion para quitar valores duplicados de un array.
function eliminateDuplicates(arr) {
 var i,
     len=arr.length,
     out=[],
     obj={};
 for (i=0;i<len;i++) {
    obj[arr[i]]=0;
 }
 for (i in obj) {
    out.push(i);
 }
 return out;
}
		
module.exports = queryModel;
