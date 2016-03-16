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

var userModel = {};

userModel.getCamposTablas = function (callback){

	var sql = 'SELECT TABLE_NAME,COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = \'RIO2015\' AND TABLE_NAME LIKE \'CLIENTES%\' OR TABLE_NAME LIKE \'CONTRATOS%\' ';
	connection.query(sql, function(error, result){
	if(error){
		throw error;
	}else{
		if(result.length > 0){
			callback(null,result);
		}else{
			console.log('Registro no encontrado');
		}
	}
	});
}

//obtenemos una consulta por campo
userModel.getRow = function(campo,tabla,callback){
	if (connection) 
	{
		var sql = 'SELECT ' + campo+' FROM '+tabla ;
		connection.query(sql, function(error, row){
			if(error)
			{
				row= '';
				callback(sql, row);
			}
			else
			{
				callback(null, row);
			}
		});
	}
}

userModel.ingresarEsquema= function(fila,callback){
	
	if (connection){
		var sql = 'CREATE TABLE IF NOT EXISTS esquemas (id int(10) unsigned NOT NULL AUTO_INCREMENT,nombre varchar(50) COLLATE utf8_unicode_ci NOT NULL UNIQUE, esquema varchar(1500) COLLATE utf8_unicode_ci NOT NULL,created_at timestamp NOT NULL DEFAULT \'0000-00-00 00:00:00\',updated_at timestamp NOT NULL DEFAULT \'0000-00-00 00:00:00\',PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1';
		connection.query(sql, function(error){
			if(error){
				throw error;
			}
		});
		
		sql = 'INSERT INTO esquemas SET ?';
		connection.query(sql, fila, function(error, result){
			if(error){
				
				result= '';
				callback(error, result);
				
			}
			else{
				//devolvemos la última id insertada
				callback(null,{"insertId" : result.insertId});

			}
		});
	}
}


module.exports = userModel;
