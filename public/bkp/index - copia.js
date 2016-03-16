var UserModel = require ('../public/users');
var Query = require ('../public/metodos');

module.exports = function(app){
	
	app.get("/users", function(req,res){
		UserModel.getCamposTablas(function(error,data){
			res.json(data);
		});
		
	});

	app.get("/users/:campo/:tabla", function(req,res){
		//campo a mostrar
		var campo = req.params.campo;
		var tabla = req.params.tabla;
			
		UserModel.getRow(campo,tabla,function(error, data){
			//si el campo existe lo mostramos en formato json
			if (typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
			//en otro caso enviamos un json vacio
			else{
				console.log('ERROR_GET_ROW: '+error);
				res.json({});
			}
		});
		
	});
	
	
	app.put("/insert/:nombre/:unEsq", function(req,res){

		//creamos un objeto con los datos a insertar del esquema
		var newEsquema = {
			id : null,
			nombre : req.params.nombre,
			esquema : req.params.unEsq,
			created_at : null,
			updated_at : null
		};

		UserModel.ingresarEsquema(newEsquema,function(error, data){
			//si el esquema se ha insertado correctamente mostramos su info
			if(data && data.insertId){
				retorno={"msg":"Extractor "+req.params.nombre+" ingresado con exito."};
				console.log('Esquemas-Fila id: '+data.insertId+' insertada con exito');
				res.json(retorno);
			}
			else{
				res.json({"msg":"Error "+error});
			}		
		});
		
	});

	app.get("/esquema/query/:esq",function(req,res){
		
		var esquema = req.params.esq;
			
		Query.getEsquema(esquema,function(error, data){
			//si el esquema existe lo mostramos en formato json
			if (typeof data !== 'undefined' && data.length > 0){
				res.json(data);

			}
			//en otro caso enviamos un json vacio
			else{
				console.log('ERROR_GET_ESQUEMA: '+error);
				res.json({});
			}
		});
		
	});	
	
	app.get("/componentes/buscar/:componente",function(req,res){
		
		var unComponente = req.params.componente;
			
		Query.getComponente(unComponente,function(error, data){
			//si el componente existe lo mostramos en formato json
			if (typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
			//en otro caso enviamos un json vacio
			else{
				console.log('ERROR_GET_COMPONENTE: '+error);
				res.json({});
			}
		});
		
	});	
	
	app.get("/metricas/buscar/:metrica",function(req,res){
		
		var unaMetrica = req.params.metrica;
			
		Query.getMetrica(unaMetrica,function(error, data){
			//si la metrica existe lo mostramos en formato json
			if (typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
			//en otro caso enviamos un json vacio
			else{
				console.log('ERROR_GET_METRICA: '+error);
				res.json({});
			}
		});	
	});
	
	app.get("/esquema/consulta/:unReg",function(req,res){
		
		var registro = JSON.parse(req.params.unReg);
					
		Query.ejecutarEsquema(registro,function(error,data){
			//si el esquema existe lo mostramos en formato json
			if (typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
			//en otro caso enviamos un json vacio
			else{
				console.log('ERROR_EJEC_ESQUEMA: '+error);
				res.json({});
			}		
		});	
	});
	
	app.get("/esquemas/listar/:user",function(req,res){
		var username= req.params.user;
		Query.listarEsquemas(username,function(error,data){
			res.json(data);
		});		
	});	
	
	app.get("/componentes/listar/:user",function(req,res){
		var username= req.params.user;
		Query.listarComponentes(username,function(error,data){
			if (typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
			//en otro caso enviamos un json vacio
			else{
				res.json({});
			}	
		});		
	});	
	
	app.get("/metricas/listar/:user",function(req,res){
		var username= req.params.user;
		Query.listarMetricas(username,function(error,data){
			if (typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
			//en otro caso enviamos un json vacio
			else{
				res.json({});
			}			
		});		
	});
	
	app.get("/registros/total/:datos",function(req,res){
		var valores=JSON.parse(req.params.datos);
		var unRegistro = {
			periodo : valores.PERIODO,
			tabla : valores.TABLE_NAME,
			campo : valores.COLUMN_NAME,
			valor: valores.VALOR
		};	
		
		Query.ejecutarUnEsquema(unRegistro,function(error,data){
			//si el esquema existe lo mostramos en formato json
			if (typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
			//en otro caso enviamos un json vacio
			else{
				console.log('ERROR_EJEC_UN_ESQUEMA: '+error);
				res.json({});
			}
		});
	});
	
	app.get("/importes/:regs",function(req,res){
		var registros=JSON.parse(req.params.regs);
		Query.obtenerImpRiesgo(registros,function(error,data){
		//si el esquema existe lo mostramos en formato json
			if (typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
		//en otro caso enviamos un json vacio
			else{
				console.log('ERROR_OBT_IMP_RIESGO: '+error);
				res.json({});
			}			
		});
	});
	
	app.put("/componente/insert/:unComp/:nombre",function(req,res){

		var newComponente = {
			id : null,
			nombre : req.params.nombre,
			componente : req.params.unComp,
			created_at : null,
			updated_at : null
		};
		
		Query.insertarComponente(newComponente,function(error,data){
//si el componente se ha insertado correctamente mostramos su info
			if(data && data.insertId){
				retorno={"msg":"Componente "+req.params.nombre+" ingresado con exito."};
				console.log('Componentes-Fila id: '+data.insertId+' insertada con exito');
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_INS_COMPONENTE: "+error});
			}			
		});
	});
	
	app.get("/divisor/:registros/:campo",function(req,res){
		var campo = req.params.campo;
		if (campo=='CLIENTE'){
			campo='NUP';
		}
		var valores=JSON.parse(req.params.registros);
		Query.obtenerDivisor(campo,valores,function(error,data){
		//si el esquema existe lo mostramos en formato json
			if (typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
		//en otro caso enviamos un json vacio
			else{
				console.log('ERROR_OBT_DIVISOR: '+error);
				res.json({});
			}			
		});		
	});
	
	app.put("/metricas/insert/:nombre/:metrica/:valor/:operacion",function(req,res){
		var newMetrica = {
			id : null,
			nombre : req.params.nombre,
			metrica : req.params.metrica,
			valor : req.params.valor,
			operacion: req.params.operacion,
			created_at : null,
			updated_at : null
		};
		
		Query.insertarMetrica(newMetrica,function(error,data){
	//si el componente se ha insertado correctamente mostramos su info
			if(data && data.insertId){
				retorno={"msg":"Metrica "+req.params.nombre+" ingresado con exito."};
				console.log('Metricas-Fila id: '+data.insertId+' insertada con exito');
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_INS_METRICA:"+error});
			}			
		});
		
	});
	
	app.put("/metricas/edit/:nombre/:metrica/:valor/:operacion/:id",function(req,res){
		var newMetrica = {
			id : req.params.id,
			nombre : req.params.nombre,
			metrica : req.params.metrica,
			valor : req.params.valor,
			operacion: req.params.operacion,
			created_at : null,
			updated_at : null
		};
		
		Query.editarMetrica(newMetrica,function(error,data){
		//si la metrica se ha editado correctamente mostramos su info
			if(data && data.insertId){
				retorno={"msg":"Metrica "+req.params.nombre+" editada con exito."};
				console.log('Metricas-Fila id: '+data.insertId+' editada con exito');
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_EDIT_METRICA: "+error});
			}			
		});
		
	});
	
	app.delete("/metrica/eliminar/:id/:user",function(req,res){
		var username= req.params.user;
		
		Query.eliminarMetrica(username,req.params.id,function(error,data){
		//si la metrica se ha eliminado correctamente mostramos su info
			if(data && data.insertId){
				retorno={"msg":"Metrica eliminada con exito."};
				console.log('Metricas-Fila id: '+data.insertId+' eliminada con exito');
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_DEL_METRICA: "+error});
			}			
		});
		
	});
	
	app.put("/esquema/edit/:nombre/:esquema/:id",function(req,res){
	//creamos un objeto con los datos a insertar del esquema
		var newEsquema = {
			id : req.params.id,
			nombre : req.params.nombre,
			esquema : req.params.esquema,
			created_at : null,
			updated_at : null
		};
		Query.editarEsquema(newEsquema,function(error, data){
			//si el esquema se ha editado correctamente mostramos su info
			if(data && data.insertId){
				retorno={"msg":"Extractor "+req.params.nombre+" editado con exito."};
				console.log('Esquemas-Fila id: '+data.insertId+' editada con exito');
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_EDIT_ESQUEMA: "+error});
			}		
		});
	});
	
	app.delete("/esquema/eliminar/:id/:user",function(req,res){
		var username= req.params.user;
		
		Query.eliminarEsquema(username,req.params.id,function(error, data){
			//si el esquema se ha eliminado correctamente mostramos su info
			if(data && data.insertId){
				retorno={"msg":"Extractor elimiando con exito."};
				console.log('Esquemas-Fila id: '+data.insertId+' eliminada con exito');
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_DEL_ESQUEMA: "+error});
			}		
		});
	});
	
	app.put("/componente/edit/:unComp/:nombre/:id",function(req,res){

		var newComponente = {
			id : req.params.id,
			nombre : req.params.nombre,
			componente : req.params.unComp,
			created_at : null,
			updated_at : null
		};
		
		Query.editarComponente(newComponente,function(error,data){
//si el componente se ha insertado correctamente mostramos su info
			if(data && data.insertId){
				retorno={"msg":"Componente "+req.params.nombre+" editado con exito."};
				console.log('Componentes-Fila id: '+data.insertId+' editada con exito');
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_EDIT_COMPONENTE:"+error});
			}			
		});
	});
	
	app.delete("/componente/eliminar/:id/:user",function(req,res){
		var username= req.params.user;
		
		Query.eliminarComponente(username,req.params.id,function(error,data){
//si el componente se ha eliminado correctamente mostramos su info
			if(data && data.insertId){
				retorno={"msg":"Componente eliminado con exito."};
				console.log('Componentes-Fila id: '+data.insertId+' eliminada con exito');
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_DEL_COMPONENTE:"+error});
			}			
		});
	});
	
	app.put("/esquemas/user/set/:username/:esquema",function(req,res){
		Query.setEsquemaUsuario(req.params.username,req.params.esquema,function(error){
			if(error){
				res.json({"msg":"ERROR_INS_ESQUEMA_US:"+error});
			}
			else{
				res.json({});
			}
		});
	});
	
	app.put("/componentes/user/set/:username/:componente",function(req,res){
		Query.setComponenteUsuario(req.params.username,req.params.componente,function(error){
			if(error){
				res.json({"msg":"ERROR_INS_COMPONENTE_US:"+error});
			}
			else{
				res.json({});
			}
		});
	});
	
	app.put("/metricas/user/set/:username/:metrica",function(req,res){
		Query.setMetricaUsuario(req.params.username,req.params.metrica,function(error){
			if(error){
				res.json({"msg":"ERROR_INS_METRICA_US:"+error});
			}
			else{
				res.json({});
			}
		});
	});
	
	app.get("/login/:user",function (req,res){
		var username= req.params.user;
		
		Query.buscarUsuario(username,function(data){
			if(typeof data !== 'undefined' && data.length > 0){
				res.json({"msg":data.username});	
			}
			else{
				res.json({"msg":"ERROR_LOGIN"});				
			}
		});
		
	});
	
	app.get("/inicio/:user",function(req,res){
		res.sendFile(__dirname +'/inicio.html');
	});
	
	app.get("/usuarios/obtener/:user",function(req,res){
		Query.obtenerUsuario(req.params.user,function(error,data){
		//si el usuario existe lo mostramos en formato json
			if (typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
		//en otro caso enviamos un json vacio
			else{
				console.log('ERROR_USUARIO: '+error);
				res.json({});
			}	
		});
	});
	
	app.put("metricas/usuarios/insert/:metrica/:user",function(req,res){
		var usuario = req.params.user;
		var metrica = req.params.metrica;
		Query.asignarMetrica(usuario,metrica,function(error,data){
			if(data && data.insertId){
				var retorno={"msg":"Metrica "+metrica+" asignada al usuario "+usuario+" con exito."};
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_ASIGNAR_METRICA:"+error});
			}			
		});
	});
	
	app.put("/componentes/usuarios/insert/:componente/:user",function(req,res){
		var usuario = req.params.user;
		var componente = req.params.componente;
		Query.asignarComponente(usuario,componente,function(error,data){
			if(data && data.insertId){
				var retorno={"msg":"Componente "+componente+" asignado al usuario "+usuario+" con exito."};
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_ASIGNAR_COMPONENTE:"+error});
			}			
		});
	});

	app.put("/esquemas/usuarios/insert/:extractor/:user",function(req,res){
		var usuario = req.params.user;
		var extractor = req.params.extractor;
		Query.asignarExtractor(usuario,extractor,function(error,data){
			if(data && data.insertId){
				var retorno={"msg":"Extractor "+extractor+" asignado al usuario "+usuario+" con exito."};
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_ASIGNAR_EXT:"+error});
			}			
		});
	});		
	
	app.get("/usuarios/listar",function(req,res){
		
		Query.listarUsuarios(function(error,data){
			if(typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
			else{
				console.log('ERROR_LISTAR_USUARIOS: '+error);
				res.json({});
			}			
		});
	});
	
	app.get("/indicadores/listar",function (req,res){
		
		Query.listarIndicadores(function(error,data){
			if(typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
			else{
				console.log('ERROR_LISTAR_IND: '+error);
				res.json({});
			}	
		});
	});
	
	app.put("/componentes/user/edit/:componente",function (req,res){
		
		var unComponente = req.params.componente;
		Query.editarComponenteAsignado(unComponente,function(error,data){
			if(data && data.insertId){
				var retorno={"msg":"OK"};
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_EDITAR_COMPONENTE_USUARIO:"+error});
			}	
		});
	});
	
	app.put("/metricas/user/edit/:metrica",function (req,res){
		
		var unaMetrica = req.params.metrica;
		Query.editarMetricaAsignada(unaMetrica,function(error,data){
			if(data && data.insertId){
				var retorno={"msg":"OK"};
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_EDITAR_METRICA_USUARIO:"+error});
			}	
		});
	});
	
	app.put("/esquemas/user/edit/:ext",function (req,res){
		
		var extractor = req.params.ext;
		Query.editarEsquemaAsignado(extractor,function(error,data){
			if(data && data.insertId){
				var retorno={"msg":"OK"};
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_EDITAR_EXTRACTOR_USUARIO:"+error});
			}	
		});
	});
	
	app.get("/cubos/listar",function (req,res){
		
		Query.listarCubos(function(error,data){
			if(typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
			else{
				console.log('ERROR_LISTAR_CUBOS: '+error);
				res.json({});
			}	
		});
	});
	
	app.put("/cubos/insert/:nombre/:cubo",function (req,res){
		
		//creamos un objeto con los datos a insertar del Aprovisionador
		var newCubo = {
			id : null,
			nombre : req.params.nombre,
			cubos : req.params.cubo
		};
		
		Query.ingresarCubo(newCubo,function(error, data){
			//si el esquema se ha insertado correctamente mostramos su info
			if(data && data.insertId){
				retorno={"msg":"Aprovisionador "+req.params.nombre+" ingresado con exito."};
				console.log('Aprov-Fila id: '+data.insertId+' insertada con exito');
				res.json(retorno);
			}
			else{
				res.json({"msg":"Error "+error});
			}		
		});	
	});
	
	app.get("/cubos/buscar/:nombre",function (req,res){
		
		Query.buscarCubo(req.params.nombre,function(error, data){
			//si el Aprovisionador existe lo mostramos en formato json
			if (typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
			//en otro caso enviamos un json vacio
			else{
				console.log('ERROR_GET_APROVISIONADOR: '+error);
				res.json({});
			}		
		});
	});
	
	app.get("/cubos/ejecutar/:regs",function (req,res){
		
		var registros = JSON.parse(req.params.regs);
					
		Query.ejecutarCubo(registros,function(error,data){
			//si el Aprovisionador existe lo mostramos en formato json
			if (typeof data !== 'undefined' && data.length > 0){
				res.json(data);
			}
			//en otro caso enviamos un json vacio
			else{
				console.log('ERROR_EJEC_CUBO: '+error);
				res.json({});
			}		
		});	
	});
	
	app.put("/cubos/usuarios/insert/:cubo/:username",function(req,res){
		
		Query.asignarCubo(req.params.username,req.params.cubo,function(error,data){
			if(data && data.insertId){
				var retorno={"msg":"Aprovisionador "+req.params.cubo+" asignado al usuario "+req.params.username+" con exito."};
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_ASIGNAR_CUBO:"+error});
			}		
		});
	});
	
	app.put("/cubos/edit/:nombre/:cubo/:id",function(req,res){
	//creamos un objeto con los datos a insertar del Aprovisionador
		var newCubo = {
			id : req.params.id,
			nombre : req.params.nombre,
			cubos : req.params.cubo
		};
					
		Query.editarCubo(newCubo,function(error,data){
			if(data && data.insertId){
				var retorno={"msg":"Aprovisionador "+req.params.nombre+" editado con exito."};
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_EDITAR_CUBO:"+error});
			}		
		});
	});	
	
	app.delete("/cubos/eliminar/:id",function(req,res){
		
		Query.eliminarCubo(req.params.id,function(error,data){
		//si el aprovisionador se ha eliminado correctamente mostramos su info
			if(data && data.insertId){
				retorno={"msg":"Aprovisionador eliminado con exito."};
				console.log('Aprovisionador-Fila id: '+data.insertId+' eliminado con exito');
				res.json(retorno);
			}
			else{
				res.json({"msg":"ERROR_DEL_APROVISIONADOR: "+error});
			}			
		});
		
	});	
	
}