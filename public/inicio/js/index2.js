
/*---------------------------------------------------------*/
// Function that executes on click of first next button.



function next_step0() {
	document.getElementById("Cero").style.display = "block";
	document.getElementById("first").style.display = "none";
	document.getElementById("second").style.display = "none";
	document.getElementById("third").style.display = "none";
	document.getElementById("pimg1").style.display = "none";
	document.getElementById("next_btn3").style.color = "white";
	document.getElementById("next_btn2").style.color = "white";
	document.getElementById("next_btn1").style.color = "white";
	document.getElementById("next_btn0").style.color = "black";
}



function next_step1() {
	document.getElementById("Cero").style.display = "none";
	document.getElementById("first").style.display = "block";
	document.getElementById("second").style.display = "none";
	document.getElementById("third").style.display = "none";
	document.getElementById("pimg1").style.display = "none";
	document.getElementById("next_btn3").style.color = "white";
	document.getElementById("next_btn2").style.color = "white";
	document.getElementById("next_btn1").style.color = "black";
	document.getElementById("next_btn0").style.color = "white";
}

function next_step2() {
	document.getElementById("Cero").style.display = "none";
	document.getElementById("first").style.display = "none";
	document.getElementById("second").style.display = "block";
	document.getElementById("third").style.display = "none";
	document.getElementById("pimg21").style.display = "none";
	document.getElementById("next_btn1").style.color = "white";
	document.getElementById("next_btn3").style.color = "white";
	document.getElementById("next_btn2").style.color = "black";
	document.getElementById("next_btn0").style.color = "white";
}

function next_step3() {
	document.getElementById("Cero").style.display = "none";
	document.getElementById("first").style.display = "none";
	document.getElementById("second").style.display = "none";
	document.getElementById("third").style.display = "block";
	document.getElementById("pimg31").style.display = "none";
	document.getElementById("next_btn1").style.color = "white";
	document.getElementById("next_btn2").style.color = "white";
	document.getElementById("next_btn3").style.color = "black";
	document.getElementById("next_btn0").style.color = "white";

}


/*---------------------------------------------------------*/
// STEPS PAGINA 0

	
  

  // Crear Aprovisionador.
function crear_aprovisionador() {
       document.getElementById("pimg01").style.display = "block";
       document.getElementById("pimg02").style.display = "none";
       document.getElementById("timg01").style.color = "red";
       document.getElementById("timg02").style.color = "gray";
       document.getElementById("timg03").style.color = "gray";
       document.getElementById("timg04").style.color = "gray";
       document.getElementById("pimg03").style.display = "none";
       document.getElementById("pimg04").style.display = "none";
       
}

// Revisar Aprovisionador
function revisar_aprovisionador() {
       document.getElementById("pimg01").style.display = "none";
       document.getElementById("timg01").style.color = "white";
       document.getElementById("pimg02").style.display = "block";
       document.getElementById("timg02").style.color = "red";
       document.getElementById("timg03").style.color = "gray";
       document.getElementById("timg04").style.color = "gray";
       document.getElementById("pimg03").style.display = "none";
       document.getElementById("pimg04").style.display = "none";
}

  // Simular Aprovisionador.
function simular_aprovisionador() {
       document.getElementById("pimg01").style.display = "none";
       document.getElementById("pimg02").style.display = "none";
       document.getElementById("pimg03").style.display = "block";
       document.getElementById("pimg04").style.display = "none";
       document.getElementById("timg01").style.color = "white";
       document.getElementById("timg02").style.color = "white";
       document.getElementById("timg03").style.color = "red";
       document.getElementById("timg04").style.color = "gray";
}

  // Asignar Aprovisionador.
function asignar_aprovisionador() {
       document.getElementById("pimg01").style.display = "none";
       document.getElementById("pimg02").style.display = "none";
       document.getElementById("pimg03").style.display = "none";
       document.getElementById("pimg04").style.display = "block";
       document.getElementById("timg01").style.color = "white";
       document.getElementById("timg02").style.color = "white";
       document.getElementById("timg03").style.color = "white";
       document.getElementById("timg04").style.color = "red";
}  




/*---------------------------------------------------------*/
// STEPS PAGINA 1

// Crear Extractor.
function crear_extractor() {
       document.getElementById("pimg1").style.display = "block";
       document.getElementById("pimg2").style.display = "none";
       document.getElementById("timg1").style.color = "red";
       document.getElementById("timg2").style.color = "gray";
       document.getElementById("timg3").style.color = "gray";
       document.getElementById("timg4").style.color = "gray";
       document.getElementById("pimg3").style.display = "none";
       document.getElementById("pimg4").style.display = "none";
       
}

// Revisar Extractor
function revisar_extractor() {
       document.getElementById("pimg1").style.display = "none";
       document.getElementById("timg1").style.color = "white";
       document.getElementById("pimg2").style.display = "block";
       document.getElementById("timg2").style.color = "red";
       document.getElementById("timg3").style.color = "gray";
       document.getElementById("timg4").style.color = "gray";
       document.getElementById("pimg3").style.display = "none";
       document.getElementById("pimg4").style.display = "none";
}

  // Simular Extractor.
function simular_extractor() {
       document.getElementById("pimg1").style.display = "none";
       document.getElementById("pimg2").style.display = "none";
       document.getElementById("pimg3").style.display = "block";
       document.getElementById("pimg4").style.display = "none";
       document.getElementById("timg1").style.color = "white";
       document.getElementById("timg2").style.color = "white";
       document.getElementById("timg3").style.color = "red";
       document.getElementById("timg4").style.color = "grey";
}

  // Asignar Extractor.
function asignar_extractor() {
       document.getElementById("pimg1").style.display = "none";
       document.getElementById("pimg2").style.display = "none";
       document.getElementById("pimg3").style.display = "none";
       document.getElementById("pimg4").style.display = "block";
       document.getElementById("timg1").style.color = "white";
       document.getElementById("timg2").style.color = "white";
       document.getElementById("timg3").style.color = "white";
       document.getElementById("timg4").style.color = "red";
}  
       

/*---------------------------------------------------------*/
// STEPS PAGINA 2

// Crear Componente.
function crear_Componente() {
       document.getElementById("pimg21").style.display = "block";
       document.getElementById("pimg22").style.display = "none";
       document.getElementById("timg21").style.color = "red";
       document.getElementById("timg22").style.color = "gray";
       //document.getElementById("timg23").style.color = "gray";
       document.getElementById("pimg23").style.display = "none";
       
}
	
// Revisar Componente.
function revisar_Componente() {
       document.getElementById("pimg21").style.display = "none";
       document.getElementById("timg21").style.color = "white";
       document.getElementById("pimg22").style.display = "block";
       document.getElementById("timg22").style.color = "red";
       document.getElementById("timg23").style.color = "gray";
       document.getElementById("pimg23").style.display = "none";
}

// Asignar Componente.
function asignar_Componente() {
       document.getElementById("pimg21").style.display = "none";
       document.getElementById("pimg22").style.display = "none";
       document.getElementById("pimg23").style.display = "block";
       document.getElementById("timg21").style.color = "white";
       document.getElementById("timg22").style.color = "white";
       document.getElementById("timg23").style.color = "red";
}


/*---------------------------------------------------------*/
// STEPS PAGINA 3


// Crear Metrica
function crear_metrica() {
       document.getElementById("pimg31").style.display = "block";
       document.getElementById("pimg32").style.display = "none";
       document.getElementById("timg31").style.color = "red";
       document.getElementById("timg32").style.color = "gray";
       document.getElementById("timg33").style.color = "gray";
       document.getElementById("pimg33").style.display = "none";
}

// Revisar Metrica.
function revisar_metrica() {
       document.getElementById("pimg31").style.display = "none";
       document.getElementById("timg31").style.color = "white";
       document.getElementById("pimg32").style.display = "block";
       document.getElementById("timg32").style.color = "red";
       document.getElementById("timg33").style.color = "gray";
       document.getElementById("pimg33").style.display = "none"; 
}

// Asignar Metrica.
function asignar_metrica() {
       document.getElementById("pimg31").style.display = "none";
       document.getElementById("pimg32").style.display = "none";
       document.getElementById("pimg33").style.display = "block";
       document.getElementById("timg31").style.color = "white";
       document.getElementById("timg32").style.color = "white";
       document.getElementById("timg33").style.color = "red";
}
 

/*-------------------------------------------------------------------------*/
// Function index2 de Ezequiel.


var x=$(document);
x.ready(inicio);

//Funcion inicial que lee los eventos ejecutados por el usuario por pantalla.					
function inicio(){
	//obtengo el usuario logueado en el sistema
	var url=getUrlVars();
	var user = obtenerUsuarioUrl(url[0]);
	var campoUsername = document.getElementById('username');
	//Hago la llamada a la funcion que hace el cierre de sesion
	campoUsername.setAttribute("onchange","cerrarSesion();");
	
	var unaOpc = document.createElement('option');
	unaOpc.setAttribute('style','display:none;');
	unaOpc.appendChild(document.createTextNode(user));
	campoUsername.appendChild(unaOpc);
	
	unaOpc = document.createElement('option');
	unaOpc.setAttribute('style','background-color:red');
	unaOpc.appendChild(document.createTextNode('Cerrar Sesion'));
	campoUsername.appendChild(unaOpc);
	//Si el usuario es admin muestro la opcion de asignar metricas
	var metricaFieldSet = document.getElementById('timg33');
	if (user == 'admin'){
		metricaFieldSet.style.display='inline';
	}
	//Si el usuario es admin muestro la opcion de asignar componentes
	var componenteFieldSet = document.getElementById('timg23');
	if (user == 'admin'){
		componenteFieldSet.style.display='inline';
	}
	//Si el usuario es admin muestro la opcion de asignar extractor
	var extFieldSet = document.getElementById('timg4');
	if (user == 'admin'){
		extFieldSet.style.display='inline';
	}
	//Si el usuario es admin muestro la opcion de Aprovisionador
	var inputField = document.getElementById('next_btn0');
	if (user == 'admin'){
		inputField.style.display='inline';
	}		
	
	//Funciones para los botones de RESET de los distintas pantallas
	var x=$("#vaciarCampos");
	x.click({p:"formulario",p2:"formulario1",p3:"formulario2",p4:"formulario3"},resetFormularios);
	x=$("#vaciarEsq");
	x.click({p:"textarea2"},resetTextArea);
	x.click({p:"formulario4"},resetForm);
	x=$("#vaciarQuery");
	x.click({p:"untextarea"},resetTextArea);
	x=$("#vaciarCompo");
	x.click({p:"formulario8"},resetForm);
	x.click({p:"textarea8"},resetTextArea);
	x=$("#vaciarComponente");
	x.click({p:"formulario5"},resetForm);
	x.click({p:"formComp"},resetForm);
	x=$("#vaciarMetrica");
	x.click({p:"formulario31"},resetForm);	
	x=$("#vaciarMetrica2");
	x.click({p:"formulario32"},resetForm);	
	x.click({p:"formMetri"},resetForm);
	x=$("#vaciarUsuarios");
	x.click({p:"formulario33"},resetForm);	
	x.click({p:"formulario34"},resetForm);
	x=$("#vaciarUsuariosComponente");
	x.click({p:"formulario23"},resetForm);	
	x.click({p:"formulario24"},resetForm);	
	x=$("#vaciarUsuariosExtractores");
	x.click({p:"formulario14"},resetForm);	
	x.click({p:"formulario15"},resetForm);
	x=$("#vaciarCamposCubos");
	x.click({p:"cubosForm11"},resetForm);
	x=$("#vaciarCubos");
	x.click({p:"cubosForm21"},resetForm);	
	x.click({p:"cubosForm22"},resetForm);
	x=$("#vaciarAprov");
	x.click({p:"textAreaCubo"},resetTextArea);	
	x=$("#vaciarUsuariosAprovisionadores");
	x.click({p:"cubosForm41"},resetForm);
	x.click({p:"cubosForm42"},resetForm);
	
	//Relacion entre los botones del sistemas y las distintas funciones que activan	
	x=$("#lista");
	x.click(mostrarCampos);	
    x=$("#query");
	x.click(buscarEsquema);
    x=$("#query2");
	x.click(buscarEsquemaEnForm8);
	x=$("#ejecEsq");
	x.click(ejecutarEsquema);	
    x=$("#mostrarEsquemas");
	x.click(listarEsquemas);
    x=$("#mostrarEsquemas2");
	x.click(listarEsquemasEnText8);
	x=$("#listarUsers");
	x.click(listarUsuarios);
	x=$("#prueba");
	x.click(enviarEsquema);
	x=$("#saveComp");
	x.click(enviarComponente);
	x=$("#mostrarCompo");
	x.click(listarComponentes);
	x=$("#mostrarCompo2");
	x.click(listarComponentesyMetricas);
	x=$("#listarMetricas");
	x.click(listarMetricasAsignar);
	x=$("#listarMetri");
	x.click(listarMetricasRevision);
	x=$("#mostrarMetri");
	x.click(listarMetricas);
	x=$("#buscarCompo");
	x.click(buscarComponente);
	x=$("#crearMetrica");
	x.click(crearMetrica);
	x=$("#buscarMetri");
	x.click(buscarMetrica);
	x=$("#editarEsq");
	x.click(editarEsquema);
	x=$("#editarComp");
	x.click(editarComponente);
	x=$("#editarMetrica");
	x.click(editarMetrica);
	x=$("#eliminarEsq");
	x.click(eliminarEsquema);
	x=$("#eliminarComp");
	x.click(eliminarComponente);
	x=$("#eliminarMetrica");
	x.click(eliminarMetrica);
	x=$("#asignarMetrica");
	x.click(asignarMetrica);
	x=$("#asignarComponente");
	x.click(asignarComponente);
	x=$("#asignarExtractor");
	x.click(asignarExtractor);
	x=$("#listarInd");
	x.click(listarIndicadores);
	x=$("#mostrarParam");
	x.click(listarParametros);
	x=$("#listarUsersComponente");
	x.click(listarUsuariosComponentes);
	x=$("#listarComponentes");
	x.click(listarComponentesAsignacion);
	x=$("#listarUsersExtractor");
	x.click(listarUsuariosExtractores);
	x=$("#listarExtractores");
	x.click(listarExtractoresAsignacion);	
	x=$("#listarAprovisionadores");
	x.click(listarCubos);	
	x=$("#listarUsersAprovisionador");
	x.click(listarUsuariosCubos);
	x=$("#listarCampos");
	x.click(listarCamposDisponibles);
	x=$("#guardarAprov");
	x.click(crearCubo);
	x=$("#mostrarAprovisionadores");
	x.click(listarCubosParaRevisar);	
	x=$("#revisarAprov");
	x.click(mostrarCubo);
	x=$("#ejecAprov");
	x.click(ejecutarCubo);
	x=$("#asignarAprovisionador");
	x.click(asignarCubo);	
	x=$("#editarAprov");
	x.click(editarCubo);	
	x=$("#eliminarAprov");
	x.click(eliminarCubo);
	x=$("#listarAsignacionesAp");
	x.click(listarAsignacionesCubos);
	x=$("#listarAsignacionesExt");
	x.click(listarAsignacionesExtractor);	
	x=$("#listarAsignacionesComp");
	x.click(listarAsignacionesComponentes);		
	x=$("#listarAsignacionesMet");
	x.click(listarAsignacionesMetricas);
	x=$("#desasignarAprov");
	x.click(desasignarAprovisionadores);
	x=$("#desasignarExt");
	x.click(desasignarExtractores);	
	x=$("#desasignarComp");
	x.click(desasignarComponentes);
	x=$("#desasignarMet");
	x.click(desasignarMetricas);		
	
}


//Funcion que lista los parametros generados por el usuario para utilizar en los componentes.
function listarIndicadores(){
	$.getJSON('/indicadores/listar/',function(data){
		if (data.length > 0){
			var unForm = document.getElementById('formulario8');
			var label= document.createElement("LABEL");
			label.innerHTML = '<br><h3><u>Parametros</u></h3><br>';
			unForm.appendChild(label);
			var i = 0;
			$.each(data,function(key,value){
				var createField= document.createElement("INPUT");
				createField.id="checkInd"+i;
				createField.type="checkbox";
				createField.name="checkboxInd";
				var label= document.createElement("LABEL");
				label.id = 'parametro'+i;
				label.innerHTML = '<strong><u>Parametro:</u> </strong>'+value.nombre+' <strong><u>Porcentaje:</u> </strong>'+value.porcentaje+'%<br>';
				unForm.appendChild(createField);
				unForm.appendChild(label);
				i++;
			});
		}		
	});
	
}

//Funcion que lista los parametros generados por el usuario para utilizar en las metricas.
function listarParametros(){
	$.getJSON('/indicadores/listar/',function(data){
		if (data.length > 0){
			var unForm = document.getElementById('formulario31');
			var label= document.createElement("LABEL");
			label.innerHTML = '<br><h3><u>Parametros</u></h3><br>';
			unForm.appendChild(label);
			var i = 0;
			$.each(data,function(key,value){
				var createField= document.createElement("INPUT");
				createField.id="checkParametro"+i;
				createField.type="checkbox";
				createField.name="checkboxParam";
				var label= document.createElement("LABEL");
				label.id = 'parametroMetrica'+i;
				label.innerHTML = '<strong><u>Parametro:</u> </strong>'+value.nombre+' <strong><u>Porcentaje:</u> </strong>'+value.porcentaje+'%<br>';
				unForm.appendChild(createField);
				unForm.appendChild(label);
				i++;
			});
		}		
	});
	
}

//Funcion que cierra la sesion actual del usuario y deja en pantalla la pagina de inicio
function cerrarSesion(){
	window.location.replace('http://hidalgo.chat/');
}

//Funcion que lista por pantalla las metricas almacenadas en la BD.
function listarMetricas(){
	
	var username = $("#username").val();
	var i = 0;
	var unForm = document.getElementById("formulario31");
	data= httpGet('/metricas/listar/'+username);
	var resMetricas = data;
	
	if (resMetricas!=null&&resMetricas!=''){
		var vMetricas = data.split(',');
		for (j in vMetricas){
			if (j!='unique'){
				var createField= document.createElement("INPUT");
				createField.id="unCheck"+i;
				createField.type="checkbox";
				createField.name="checkboxComponente";			
				var label= document.createElement("LABEL");
				label.id="ListarCLabel"+i;				
				label.innerHTML = "<u>Nombre de la Metrica:</u> "+vMetricas[j]+"<br>";						
				unForm.appendChild(createField);
				unForm.appendChild(label);
				i++;
			}
		}
		
		var label = document.createElement("LABEL");
		label.innerHTML = "<br><b>OPERACION:</b>";
		unForm.appendChild(label);		
		var selectOperacion = crearCampoSelectOp();
		var selectOrden = crearCampoDeOrden(unForm);
		unForm.appendChild(selectOperacion);
		unForm.appendChild(selectOrden);
		label = document.createElement("LABEL");
		label.innerHTML = "<br><b>Cantidad de decimales a guardar:</b>";
		unForm.appendChild(label);
		var seleccion= document.createElement("SELECT");
		seleccion.id="cantidadDecimal";	
		seleccion.type="text";
		for (var i=0;i<6 ;i++){
			var unaOpc = document.createElement('option');
			unaOpc.appendChild(document.createTextNode(i));
			seleccion.appendChild(unaOpc);
		}
		unForm.appendChild(seleccion);		
	}
	else{
		alert('Su usuario no tiene Metricas asignadas o no existen Metricas dadas de alta.');
	}
}

//Funcion que lista por pantalla las metricas almacenadas en la BD para revision.
function listarMetricasRevision(){
	
	var username = $("#username").val();
	var i = 0;
	var unForm = document.getElementById("formMetri");
	data= httpGet('/metricas/listar/'+username);
	var resMetricas = data;
	
	if (resMetricas!=null&&resMetricas!=''){
		var vMetricas = data.split(',');
		for (j in vMetricas){
			if (j!='unique'){			
				var label= document.createElement("LABEL");
				label.id="ListarCLabel"+i;				
				label.innerHTML = "<u>Nombre de la Metrica:</u> "+vMetricas[j]+"<br>";						
				unForm.appendChild(label);
				i++;
			}
		}
	}
	else{
		alert('Su usuario no tiene Metricas asignadas o no existen Metricas dadas de alta.');
	}
}

//Funcion que lista por pantalla las metricas almacenadas en la BD para asignarlas a un usuario.
function listarMetricasAsignar(){
	
	var username = $("#username").val();
	var i = 0;
	var unForm = document.getElementById("formulario34");
	data= httpGet('/metricas/listar/'+username);
	var resMetricas = data;
	
	if (resMetricas!=null&&resMetricas!=''){
		$.each(data,function(key,value){
			var vMetricas = data.split(',');
			for (j in vMetricas){
				if (j!='unique'){			
					var label= document.createElement("LABEL");
					label.id="ListarCLabel"+i;				
					label.innerHTML = "<u>Nombre de la Metrica</u>: <b>"+vMetricas[j]+"</b><br>";						
					unForm.appendChild(label);
					i++;
				}
			}
		});

	}
}

//Funcion que guarda en la BD la Metrica creada por el usuario segun los componentes
// y la operacion seleccionada para dicha metrica.
function crearMetrica(){
	var campoLabel;
	var idLabel;
	var camposCheck = document.getElementsByName("checkboxComponente");
	var checkboxes = $('input[name="checkboxComponente"]');
	// Obtengo la cantidad de checks tildados de Componentes y Metricas
    var checkSelected = checkboxes.filter(':checked').length;	
	var operacion = document.getElementById("selectOp").value;
	var nombreMetrica = $("#nombreMetri").val().toUpperCase();
	var textoLabel;
	var unComponente;
	var unaMetrica = "[";	
	var paramChecks = document.getElementsByName('checkboxParam');
	var checkParam = $('input[name="checkboxParam"]');
	// Obtengo la cantidad de checks tildados de parametros
    var checkParamSelected = checkParam.filter(':checked').length;
	//Si se selecciona mas de un parametro se muestra el mensaje por pantalla
	if (checkParamSelected >1){
		alert('Solo puede asociar un parametro a la Metrica.');
		return;
	}
	else{
		//Si se selecciona un parametro, tomo su valor y lo almaceno en valorParam
		if (checkParamSelected==1){
			for (var j=0; j<paramChecks.length; j++){
				if (paramChecks[j].checked == true){
					idLabel= "parametroMetrica"+j;
					campoLabel = document.getElementById(idLabel);
					textoLabel = $(campoLabel).text();
					var unParametro = obtenerParametro(textoLabel);
					var valorParam = parseFloat(obtenerValorParametro(textoLabel));
				}
			}						
		}
		// No se selecciono un parametro
		else{
			var valorParam = 0;
		}		
	}	
	
	for (var j=0; j<camposCheck.length; j++){
		if (camposCheck[j].checked == true){
			idLabel= "ListarCLabel"+j;
			campoLabel = document.getElementById(idLabel);
			textoLabel = $(campoLabel).text();
			// obtengo el nombre del componente o metrica
			unComponente = obtenerComponenteLabel(textoLabel);
			// obtengo el valor del componente o metrica
			var valor = obtenerValorComponente(unComponente);
			if (valorParam == 0){
				if (unaMetrica == "["){
					unaMetrica = unaMetrica+"{\"COMPONENTE\":\""+unComponente+"\",\"VALOR\":\""+valor+"\",\"PARAMETRO\":\"No Aplica\",\"VALOR_PARAMETRO\":\"No Aplica\"}";
				}
				else{
					unaMetrica = unaMetrica+",{\"COMPONENTE\":\""+unComponente+"\",\"VALOR\":\""+valor+"\",\"PARAMETRO\":\"No Aplica\",\"VALOR_PARAMETRO\":\"No Aplica\"}";
				}				
			}
			else{
				if (unaMetrica == "["){
					unaMetrica = unaMetrica+"{\"COMPONENTE\":\""+unComponente+"\",\"VALOR\":\""+valor+"\",\"PARAMETRO\":\""+unParametro+"\",\"VALOR_PARAMETRO\":\""+valorParam+"\"}";
				}
				else{
					unaMetrica = unaMetrica+",{\"COMPONENTE\":\""+unComponente+"\",\"VALOR\":\""+valor+"\",\"PARAMETRO\":\""+unParametro+"\",\"VALOR_PARAMETRO\":\""+valorParam+"\"}";
				}				
			}
	
		}
	}
	unaMetrica = unaMetrica + "]";
	var vJSON = JSON.parse(unaMetrica);
	var resultado = 0;
	// si se selecciona un solo componente o metrica
	if (checkSelected==1){
		resultado = valor;
		operacion = 'No Aplica';
	}
	else{
		if(operacion == 'MAYOR'){
			var mayor = calcularComponenteMayor(vJSON);
			var vRetorno = obtenerComponenteoMetrica(mayor.COMPONENTE);
			if (esComponente(mayor.COMPONENTE)){
				unComponente = JSON.parse(vRetorno[0].componente);
				if(valorParam !=0){
					unaMetrica = "[{\"COMPONENTE\":\""+mayor.COMPONENTE+"\",\"VALOR\":\""+unComponente[0].VALOR+"\",\"PARAMETRO\":\""+unParametro+"\",\"VALOR_PARAMETRO\":\""+valorParam+"\"}]";
				}
				else{
					unaMetrica = "[{\"COMPONENTE\":\""+mayor.COMPONENTE+"\",\"VALOR\":\""+unComponente[0].VALOR+"\",\"PARAMETRO\":\"No Aplica\",\"VALOR_PARAMETRO\":\"No Aplica\"}]";
				}
				resultado = parseFloat(unComponente[0].VALOR);
			}
			else{
				if(valorParam !=0){
					unaMetrica = "[{\"COMPONENTE\":\""+mayor.COMPONENTE+"\",\"VALOR\":\""+mayor.VALOR+"\",\"PARAMETRO\":\""+unParametro+"\",\"VALOR_PARAMETRO\":\""+valorParam+"\"}]";
				}
				else{
					unaMetrica = "[{\"COMPONENTE\":\""+mayor.COMPONENTE+"\",\"VALOR\":\""+mayor.VALOR+"\",\"PARAMETRO\":\"No Aplica\",\"VALOR_PARAMETRO\":\"No Aplica\"}]";
				}
				resultado = parseFloat(mayor.VALOR);
			}			
		}
		else{
			if (operacion == 'MENOR'){
				var menor = calcularComponenteMenor(vJSON);
				var vRetorno = obtenerComponenteoMetrica(menor.COMPONENTE);
				// si es componente
				if (esComponente(menor.COMPONENTE)){
					unComponente = JSON.parse(vRetorno[0].componente);
					// si se le aplica un parametro
					if (valorParam !=0){
						unaMetrica = "[{\"COMPONENTE\":\""+menor.COMPONENTE+"\",\"VALOR\":\""+unComponente[0].VALOR+"\",\"PARAMETRO\":\""+unParametro+"\",\"VALOR_PARAMETRO\":\""+valorParam+"\"}]";
					}
					else{
						unaMetrica = "[{\"COMPONENTE\":\""+menor.COMPONENTE+"\",\"VALOR\":\""+unComponente[0].VALOR+"\",\"PARAMETRO\":\"No Aplica\",\"VALOR_PARAMETRO\":\"No Aplica\"}]";
					}
					resultado = parseFloat(unComponente[0].VALOR);
				}
				// es metrica
				else{
					//si se le aplica un parametro
					if (valorParam !=0){
						unaMetrica = "[{\"COMPONENTE\":\""+menor.COMPONENTE+"\",\"VALOR\":\""+menor.VALOR+"\",\"PARAMETRO\":\""+unParametro+"\",\"VALOR_PARAMETRO\":\""+valorParam+"\"}]";
					}
					else{
						unaMetrica = "[{\"COMPONENTE\":\""+menor.COMPONENTE+"\",\"VALOR\":\""+menor.VALOR+"\",\"PARAMETRO\":\"No Aplica\",\"VALOR_PARAMETRO\":\"No Aplica\"}]";
					}
					
					resultado = parseFloat(menor.VALOR);
				}					
			}
			else{
				// se seleccionan dos componentes o metricas
				if(checkSelected<3){
					// obtengo el orden de la operacion de division o resta
					var ordenOperacion = document.getElementById('selectOrdenformulario31').value;
					for (var k in vJSON){
						if(k!='unique'){
							if(k!=0){
								resultado = calcularOperacionConOrden(ordenOperacion,operacion,vJSON);
							}
						}
					}
				}
				// se seleccionan tres o mas componentes o metricas
				else{
					// calculo el resultado de la operacion de suma o producto
					resultado = calcularOperacion(operacion,vJSON);
				}				
			}
		}		
	}
	//si se selecciona un parametro lo aplico al resultado de la operacion entre componentes
	if (valorParam!=0){
		resultado = (resultado * valorParam) / 100;
	}	
	// obtengo la cantidad de decimales seleccionada por el usuario
	var decimales = document.getElementById('cantidadDecimal').value;
	decimales = parseInt(decimales);
	//aplico el redondeo de decimales
	resultado = parseFloat(resultado);
	resultado = resultado.toFixedDown(decimales);
	
	// guardo en la base la metrica creada
	$.put('/metricas/insert/'+nombreMetrica+'/'+unaMetrica+'/'+resultado+'/'+operacion,function(data){
		// asigno la metrica segun el usuario creador
		guardarMetricaUsuario(nombreMetrica);
		alert (data.msg);
	});		
	
}


//Funcion que muestra por pantalla el componente buscado por el usuario.
function buscarComponente(){	
	
	var unComponente= $("#nombreCompo").val().toUpperCase();
	var username = $("#username").val();
	// verifico si el usuario tiene asignado el componente que busca
	var usuarioValido = validarPermisosComponente(unComponente,username);
	
	if (usuarioValido){
		$.getJSON('/componentes/buscar/'+unComponente,function(data){
			if (data.length > 0){
				
					var objeto=JSON.parse(data);				
					var label= document.createElement("LABEL");
					label.id="CompoLabel";
					var unForm = document.getElementById("formulario5");	
					label.innerHTML = '<h3><u>Componente</u>: '+unComponente+'</h3><br><u>Extractor:</u> '+objeto[0].ESQUEMA+'<br><u>Periodo:</u> '+objeto[0].PERIODO+'<br><u>Valor:</u> '+objeto[0].VALOR+'<br><u>Parametro:</u> '+objeto[0].PARAMETRO+'<br><u>Valor Parametro:</u> '+objeto[0].VALOR_PARAMETRO+'%';							
					unForm.appendChild(label);
						
			}
			// si el componente no se encuentra en la base muestro un mensaje por pantalla
			else{
				alert('El componente '+unComponente+' no se encuentra almacenado.');
			}
		});
	}
	// si el usuario no tiene asignado el componente buscado lo informo por pantalla
	else{
		alert('El componente '+unComponente+' no se encuentra almacenado o no tiene permisos para utilizarlo.');
	}	
}

//Funcion que muestra por pantalla la Metrica buscada por el usuario.
function buscarMetrica(){	

	var unaMetrica= $("#nombreMetrica").val().toUpperCase();
	var username = $("#username").val();
	// verifico si el usuario tiene asignado la metrica que busca
	var usuarioValido = validarPermisosMetrica(unaMetrica,username);
	
	if(usuarioValido){
		$.getJSON('/metricas/buscar/'+unaMetrica,function(data){
			
			if (data.length > 0){
					var value = JSON.parse(data);
					var registro = JSON.parse(value);					
					var vObjetos=JSON.parse(registro[0].metrica);										
					var label= document.createElement("LABEL");
					var unForm = document.getElementById("formulario32");
					label.innerHTML = '<h3><u>Metrica</u>: '+unaMetrica+'<br><u>Valor</u>: '+registro[0].valor+'<br><u>Parametro</u>:'+vObjetos[0].PARAMETRO+'<br><u>Valor Parametro</u>:'+vObjetos[0].VALOR_PARAMETRO+'%</h3>';							
					unForm.appendChild(label);
					var i =1;					
					for (var j in vObjetos){
						if(j!='unique'){
							var obtuveComponente = esComponente(vObjetos[j].COMPONENTE);
							var unComponente = obtenerComponenteoMetrica(vObjetos[j].COMPONENTE);													
							var label= document.createElement("LABEL");
							var unForm = document.getElementById("formulario32");
							label.id="CompoLabel"+j;
							// si es un componente muestro su nombre, valor, extractor y periodo
							if (obtuveComponente){														
								//var objetoComponente = JSON.parse(unComponente);								
								label.innerHTML = '<br><big><b><u>Componente '+i+'</u>: '+vObjetos[j].COMPONENTE+'</b></big><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<u>Extractor</u>: '+unComponente[0].ESQUEMA+'<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<u>Periodo</u>: '+unComponente[0].PERIODO+'<br><strong><u>Valor Componente '+i+'</u>: '+vObjetos[j].VALOR+'</strong>';							
							}
							// si es una metrica muestro los componentes que la conforman y los extractores
							else{
								var objetoMetrica = JSON.parse(unComponente);	
								objetoMetrica = JSON.parse(objetoMetrica);								
								var texto = '<br><big><b><u>Componente '+i+'</u>: '+vObjetos[j].COMPONENTE+'</b></big><br><u>Operacion</u>: '+objetoMetrica[0].operacion;
								var n=1;								
								for (var k in objetoMetrica){									
									if(k!='unique'){										
										var unJSON = JSON.parse(objetoMetrica[k].metrica);
										for (var ind in unJSON){
											if(ind!='unique'){
												var extractor = obtenerComponenteoMetrica(unJSON[ind].COMPONENTE);
												// si es componente											
												if(extractor[k].ESQUEMA){													
													texto = texto+'<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b><i><u>Componente '+n+'</u>: '+unJSON[ind].COMPONENTE+'</b></i><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<i><u>Extractor</u>: '+extractor[0].ESQUEMA+'</i><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<u>Periodo</u>: '+extractor[0].PERIODO+'<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<u>Valor Componente '+n+'</u>: '+unJSON[ind].VALOR;							
												}
												// si es metrica
												else{													
													var metrica = JSON.parse(obtenerComponenteoMetrica(unJSON[ind].COMPONENTE));
													var auxiliar = (JSON.parse(metrica))[0].metrica;
													var vComponente = JSON.parse(auxiliar);
													texto = texto+'<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b><i><u>Metrica '+n+'</u>: '+unJSON[ind].COMPONENTE+'</b></i><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<i><u>Componente</u>: '+vComponente[0].COMPONENTE+'</i><br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<u>Valor Componente '+n+'</u>: '+unJSON[ind].VALOR;							
												}												
											}												
										}										
									}
								}
								n++;								
								texto = texto+'<br><strong><u>Valor Componente '+i+'</u>: '+vObjetos[j].VALOR+'</strong>';
								label.innerHTML = texto;
							}
							unForm.appendChild(label);
							i++;							
						}					
					}
					var label= document.createElement("LABEL");
					var unForm = document.getElementById("formulario32");
					label.id="CompoLabelOp";
					label.innerHTML = '<br><br><strong><u>Operacion</u>: '+registro[0].operacion+'</strong>';							
					unForm.appendChild(label);			
			}
			// si la metrica no se encuentra en la base muestro un mensaje por pantalla
			else{
				alert('La metrica '+unaMetrica+' no se encuentra almacenada.');
			}
		});	
	}
	// si el usuario no tiene asignada la metrica buscada lo informo por pantalla
	else{
		alert('La metrica '+unaMetrica+' no se encuentra almacenada o no tiene permisos para utilizarla.');
	}
}

//Funcion que lista todos los componentes almacenados en la BD.
function listarComponentes(){
	
	var username = $("#username").val();	
	var data= httpGet('/componentes/listar/'+username);
	var resComponentes = data;
	var i = 0;
	var unForm = document.getElementById("formComp");
	if (resComponentes!=null&&resComponentes!=''){
		var vComponentes = data.split(',');
		for (j in vComponentes){
			if (j!='unique'){		
				var label= document.createElement("LABEL");
				label.id="ListarCLabel"+i;
				label.innerHTML = "<u>Nombre del Componente:</u> "+vComponentes[j]+"<br>";						
				unForm.appendChild(label);
				i++;					
			}
		}
	}
	else{
		alert('Su usuario no tiene Componentes asignados o no existen Componentes dados de alta.');
	}	
	
}

//Funcion que lista todos los componentes almacenados en la BD para asignarlos a un usuario.
function listarComponentesAsignacion(){
	
	var username = $("#username").val();	
	var data= httpGet('/componentes/listar/'+username);
	var resComponentes = data;
	var i = 0;
	var unForm = document.getElementById("formulario24");
	if (resComponentes!=null&&resComponentes!=''){
		var vComponentes = data.split(',');
		for (j in vComponentes){
			if (j!='unique'){		
				var label= document.createElement("LABEL");
				label.id="ListarCLabel"+i;
				label.innerHTML = "<u>Nombre del Componente:</u> "+vComponentes[j]+"<br>";						
				unForm.appendChild(label);
				i++;					
			}
		}		
	}	
	else{
		alert('Su usuario no tiene Componentes asignados o no existen Componentes dados de alta.');
	}		
}


//Funcion que inserta un componente en la BD segun las especificaciones del usuario.
function enviarComponente(){
//Tomo el valor del nombre del componente	
	var nombreComp = $("#nombreComponente").val().toUpperCase();
//Tomo el campo select	
	var camposSelect = document.getElementsByName("selectOperacion");
//Armo un vector para almacenar las opciones elegidas.
	var vOpciones = [];
	
	for (var x in camposSelect){
		var indice = camposSelect[x].selectedIndex;
		if (typeof indice == 'number'){
			var opcion = camposSelect[x].options[indice].text;
			vOpciones.push(opcion);	
		}
	}
	var hayImp=false;
	var nroRegs=0;
	var valor = 0;
//Tomo el valor del nombre del esquema buscado por el usuario	
	var nombreEsquema = $("#datoEsquema2").val().toUpperCase();
//Tomo el valor de los checkbox de parametros
	var paramChecks = document.getElementsByName('checkboxInd');
//Busco ese esquema en la BD	
	var unEsquema=getEsquema(nombreEsquema);
//Recorro los JSONs obtenidos	
	for (var i in unEsquema){
		if (i!=='unique'){
//Si el IMP_RIESGO forma parte del esquema			
			if (unEsquema[i].COLUMN_NAME=='IMP_RIESGO'){
				hayImp = true;
//Calculo la suma o la media del IMP_RIESGO segun la seleccion del usuario				
				valor = calcularImpRiesgo(unEsquema,vOpciones[0]);			
			}
			var periodo = unEsquema[i].PERIODO;
		}
	}
//Almaceno los numeros de registros de ejecutar esa consulta			
	nroRegs = getTotalRegistros(nombreEsquema);		
//Si el IMP_RIESGO no forma parte del esquema,el valor a guardar es el del nro de
//registros de la ejecucion del esquema.	
	if (!hayImp){
		valor = nroRegs;
	}
//Armo el componente para ingresar en la BD	
	unComponente = armarComponente(nombreEsquema,valor,periodo,paramChecks);
 	// si se selecciona mas de un parametro no continuo ejecutando la funcion
	if (unComponente==''){
		return;
	}

//Ingreso con un GET el componente en la BD con el nombre seleccionado por el usuario
	$.put('/componente/insert/'+unComponente+'/'+nombreComp,function(data){
			
//Guardar el componente segun el usuario que lo ingreso.	
		guardarComponenteUsuario(nombreComp);
		alert (data.msg);
	});
}

//Funcion que muestra por pantalla los Esquemas creados en la BD SOLAPA EXTRACTORES.
function listarEsquemas(){
	var username = $("#username").val();
	$.getJSON('/esquemas/listar/'+username,function(data){
		
		if (data!=null&&data!=''){				
			var vEsquemas = data.split(',');
			for (i in vEsquemas){
				if (i!='unique'){
					$('#textarea2').val($('#textarea2').val() + 
					"Nombre del esquema: "+vEsquemas[i]+"\n");					
				}
			}		
		}
		else{
			alert('Su usuario no tiene Extractores asignados o no existen extractores dados de alta.');
		}
	});
}

//Funcion que muestra por pantalla los Extractores creados en la BD SOLAPA COMPONENTE.
function listarEsquemasEnText8(){
	var username = $("#username").val();
	$.getJSON('/esquemas/listar/'+username,function(data){
		if (data!=null&&data!=''){			
			var vEsquemas = data.split(',');
			for (i in vEsquemas){
				if (i!='unique'){
					$('#textarea8').val($('#textarea8').val() + 
					"Nombre del esquema: "+vEsquemas[i]+"\n");					
				}
			}			
		}
		else{
			alert('Su usuario no tiene Extractores asignados o no existen extractores dados de alta.');
		}
	});
}

//Funcion que muestra por pantalla los Extractores para asignar a un usuario.
function listarExtractoresAsignacion(){
	var username = $("#username").val();
	var data= httpGet('/esquemas/listar/'+username);
	var resExtractor = data;
	var i = 0;
	var unForm = document.getElementById("formulario15");
	if (resExtractor!=null&&resExtractor!=''){		
		var vExtractores = data.split(',');
		for (j in vExtractores){
			if (j!='unique'){		
				var label= document.createElement("LABEL");
				label.id="ListarELabel"+i;
				label.innerHTML = "<u>Nombre del Extractor:</u> "+vExtractores[j]+"<br>";						
				unForm.appendChild(label);
				i++;					
			}
		}
	}
}	

//Funcion que ejecuta la consulta formada por el esquema seleccionado por el usuario.
function ejecutarEsquema(){
	// obtengo el nombre del extractor
	var valor = $("#unEsquema").val().toUpperCase();
	var username = $("#username").val();
	// verifico si el usuario tiene asignado el extractor para su ejecucion
	var usuarioValido = validarPermisosEsquema(valor,username);
	
	if (usuarioValido){
		
		//Busco en la base el esquema que solicita el usuario
		$.getJSON('/esquema/query/'+valor,function(data){
			if (data.length > 0){
				var vFilas = [];
				//Por cada valor que devuelve la base
				$.each(data,function(key,value){
					var i=0;
					var contador=0;
					var unJson = JSON.parse(value.esquema);
					var total= unJson.length;
					var vRegistros = "[";
					var vCampos = [];
					var vTablas = [];					
					//Mientras no llegue al final del ultimo JSON del array
					while (i<total){
						// genero un objeto con los datos obtenidos de la BD
						var unRegistro = {
							periodo : unJson[i].PERIODO,
							tabla : unJson[i].TABLE_NAME,
							campo : unJson[i].COLUMN_NAME,
							valor_desde: unJson[i].VALOR_DESDE,
							valor_hasta: unJson[i].VALOR_HASTA,
						};
						//Almaceno en un vector el valor de los campos y las tablas utilizados en el esquema
						vCampos.push(unJson[i].COLUMN_NAME);
						vTablas.push(unJson[i].TABLE_NAME);					
						//Convierto el registro creado en un JSON
						unRegistro = JSON.stringify(unRegistro);
						// si es el comienzo del registro
						if (vRegistros=="["){
							vRegistros= vRegistros+unRegistro;
						}
						else{
							vRegistros= vRegistros+","+unRegistro;
						}
						i++;
					}
					vRegistros = vRegistros + "]";
					vTablas=vTablas.unique();
					//Busco en la base los valores segun la tabla y campo del esquema que ingreso el usuario
					$.getJSON('/esquema/consulta/'+vRegistros,function(resultado){
						if(resultado.length > 0){
							var n=0;						
							//Por cada fila que retorna la base
							$.each(resultado,function(key,value){
								//Si hay mas de una tabla en el extractor
								if (Object.size(vTablas)!=1){
									$('#untextarea').val($('#untextarea').val()+
									"******** TABLA:"+vTablas[n]+" ********\n"+
									"--------------------------------------------------------------------------------------\n");
									n++;	
								}
								else{
									//En la primer fila muestro el nombre de la tabla
									if (n==0){
										$('#untextarea').val($('#untextarea').val()+
										"******** TABLA:"+vTablas[0]+" ********\n"+
										"--------------------------------------------------------------------------------------\n");
										n++;
									}
								}
								// si hay mas de una tabla en el extractor
								if (Object.size(vTablas)!=1){						
									for (var j in value){
										if (j!='unique'){									
											jsonSize=Object.keys(value[j]).length;
											for (k=0;k<jsonSize;k++){
												if (k!='unique'){
													$('#untextarea').val($('#untextarea').val() + 
													Object.keys(value[j])[k]+": "+value[j][Object.keys(value[j])[k]]+" | ");																																
												}																				
											}																				
										}
										$('#untextarea').val($('#untextarea').val() +
										"\n--------------------------------------------------------------------------------------\n");
									}	
								}
								// si hay una sola tabla en el extractor								
								else{
									jsonSize=Object.keys(value).length;
									for (k=0;k<jsonSize;k++){
										$('#untextarea').val($('#untextarea').val() + 
										Object.keys(value)[k]+": "+value[Object.keys(value)[k]]+" | ");									
									}
									$('#untextarea').val($('#untextarea').val() +
									"\n--------------------------------------------------------------------------------------\n");								
								}							
							});						
						}						
					});
					//Realizo un nuevamente un GET para armar el vector de filas retornadas					
					var valores=httpGet('/esquema/consulta/'+vRegistros);
					vFilas.push(contador);
					// si hay mas de una tabla en el extractor
					if (Object.size(vTablas)>1){
						$.each(valores,function(key,value){					
							if(Object.size(value) > 0){
								contador=contador+Object.size(value);
								vFilas.push(contador);
							}
							else{
								vFilas.push(contador);
							}	
						});
					}
					else{
						vFilas.push(Object.size(valores));
					}								
				});
				//Muestro el resultado de las filas por pantalla			
				if (vFilas.length!=0){
					var posFin = vFilas.length-1;
				}
				else{
					var posFin = 0;
				}

				$('#untextarea').val($('#untextarea').val()+
				'Extractor: '+valor+'\n\n'+
				'La consulta arrojo '+vFilas[posFin]+' filas:\n--------------------------------------------------------------------------------------\n');
			}
			else{
				alert('El extractor '+valor+' no se encuentra almacenado.');
			}	
		});
	}
	else{
		alert('El extractor '+valor+' no se encuentra almacenado o no tiene permisos para ejecutarlo.');
	}	
}


//Funcion que edita el Esquema seleccionado por el usuario.
function editarEsquema(){
	var nombre =$("#nombreEsquema").val().toUpperCase();
	var username = $("#username").val();	
	// valido si el usuario tiene asignado el extractor
	var usuarioValido = validarPermisosEsquema(nombre,username);
	
	if (usuarioValido){
		$.getJSON('/esquema/query/'+nombre,function(data){
			if (data.length > 0){
				$.each(data,function(key,value){
					// llamo a la funcion que arma y almacena en la BD el nuevo extractor
					almacenarNuevoEsquema(value.id);
				});
			}
			else{
				alert('El extractor '+nombre+' no se encuentra almacenado.');
			}
		});
	}
	else{
		alert('El extractor '+nombre+' no se encuentra almacenado o no tiene permisos para editarlo.');
	}	
}

//Funcion que edita el Componente seleccionado por el usuario.
function editarComponente(){
	var nombre=$("#nombreComponente").val().toUpperCase();
	var username = $("#username").val();
	// valido si el usuario tiene asignado el componente
	var usuarioValido = validarPermisosComponente(nombre,username);
	
	if (usuarioValido){
		$.getJSON('/componentes/buscar/'+nombre,function(data){
			if (data.length > 0){
				$.each(data,function(key,value){
					// llamo a la funcion que arma y almacena en la BD el nuevo componente
					almacenarNuevoComponente(value.id);
				});
			}
			else{
				alert('El componente '+nombre+' no se encuentra almacenado.');
			}
		});
	}
	else{
		alert('El componente '+nombre+' no se encuentra almacenado o no posee permisos para editarlo.');
	}
}

//Funcion que muestra por pantalla el detalle del esquema seleccionado por el usuario.
function buscarEsquema(){
	var valor = $("#datoEsquema").val().toUpperCase();
	var username = $("#username").val();
	// valido si el usuario tiene asignado el extractor	
	var usuarioValido = validarPermisosEsquema(valor,username);
	
	if (usuarioValido){
		
		$.getJSON('/esquema/query/'+valor,function(data){
			if (data.length > 0){
				var i=0;			
				var unJson = JSON.parse(data);
				// obtengo la cantidad total de registros
				var total= unJson.length;
				var unForm = document.getElementById("formulario4");
				var label= document.createElement("LABEL");
				label.id="tituloExtractor";							
				label.innerHTML = '<h3><u>Extractor</u>: '+valor+'</h3>';
				unForm.appendChild(label);
				// mientras no se llegue al total de filas					
				while (i<total){
					var label= document.createElement("LABEL");
					label.id="unLabel"+i;
					// si el campo valor_desde y el campo valor_hasta tiene datos
					if (unJson[i].VALOR_DESDE!='' && unJson[i].VALOR_HASTA!=''){
						if(unJson[i].PERIODO==''){
							label.innerHTML = "<br><b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME+" <b>DESDE</b> "+unJson[i].VALOR_DESDE+" <b>HASTA</b> "+unJson[i].VALOR_HASTA;
						}
						else{
							label.innerHTML = "<br><b>PERIODO:</b>"+unJson[i].PERIODO+" <b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME+" <b>DESDE</b> "+unJson[i].VALOR_DESDE+" <b>HASTA</b> "+unJson[i].VALOR_HASTA;
						}							
					}	
					else{
						// si el campo valor_desde tiene datos
						if (unJson[i].VALOR_DESDE!=''){
							if(unJson[i].PERIODO==''){
								label.innerHTML = "<br><b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME+" <b>DESDE</b> "+unJson[i].VALOR_DESDE;
							}
							else{
								label.innerHTML = "<br><b>PERIODO:</b>"+unJson[i].PERIODO+" <b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME+" <b>DESDE</b> "+unJson[i].VALOR_DESDE;
							}								
						}
						else{
							// si el campo valor_hasta tiene datos
							if(unJson[i].VALOR_HASTA!=''){
								if(unJson[i].PERIODO==''){
									label.innerHTML = "<br><b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME+" <b>HASTA</b> "+unJson[i].VALOR_HASTA;
								}
								else{
									label.innerHTML = "<br><b>PERIODO:</b>"+unJson[i].PERIODO+" <b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME+" <b>HASTA</b> "+unJson[i].VALOR_HASTA;
								}									
							}
							// el campo valor_desde y campo valor_hasta estan vacios
							else{
								if(unJson[i].PERIODO==''){
									label.innerHTML = "<br><b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME;
								}
								else{
									label.innerHTML = "<br><b>PERIODO:</b>"+unJson[i].PERIODO+" <b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME;
								}									
							}
						}
					}
					unForm.appendChild(label);						
					i++;	
				}			
			}
			else{
				alert('El extractor '+valor+' no se encuentra almacenado.');
			}
		});
	}
	else{
		alert('El extractor '+valor+' no se encuentra almacenado o no tiene permisos para ejecutarlo.');
	}
}

//Funcion que muestra por pantalla el detalle del extractor seleccionado por el usuario para crear un componente.
function buscarEsquemaEnForm8(){
	var valor=$("#datoEsquema2").val().toUpperCase();
	var username = $("#username").val();
	// valido si el usuario tiene asignado el extractor		
	var usuarioValido = validarPermisosEsquema(valor,username);
	
	if (usuarioValido){
		$.getJSON('/esquema/query/'+valor,function(data){
			if (data.length > 0){
				$.each(data,function(key,value){
					var i=0;
					var unJson = JSON.parse(value.esquema);
					// obtengo la cantidad total de registros
					var total= unJson.length;
					var unForm = document.getElementById("formulario8");
					var label= document.createElement("LABEL");
					label.id="tituloExtractor";							
					label.innerHTML = '<h3><u>Extractor</u>: '+valor+'</h3>';
					unForm.appendChild(label);
					// mientras no se llegue al total de filas
					while (i<total){
						var label= document.createElement("LABEL");
						label.id="unLabel"+i;
						// si el campo valor_desde y el campo valor_hasta tiene datos
						if (unJson[i].VALOR_DESDE!='' && unJson[i].VALOR_HASTA!=''){
							if(unJson[i].PERIODO==''){
								label.innerHTML = "<br><b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME+" <b>DESDE:</b> "+unJson[i].VALOR_DESDE+" <b>HASTA:</b> "+unJson[i].VALOR_HASTA;
							}
							else{
								label.innerHTML = "<br><b>PERIODO:</b>"+unJson[i].PERIODO+" <b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME+" <b>DESDE:</b> "+unJson[i].VALOR_DESDE+" <b>HASTA:</b> "+unJson[i].VALOR_HASTA;
							}							
						}	
						else{
							// si el campo valor_desde tiene datos
							if (unJson[i].VALOR_DESDE!=''){
								if(unJson[i].PERIODO==''){
									label.innerHTML = "<br><b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME+" <b>DESDE:</b> "+unJson[i].VALOR_DESDE;
								}
								else{
									label.innerHTML = "<br><b>PERIODO:</b>"+unJson[i].PERIODO+" <b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME+" <b>DESDE:</b> "+unJson[i].VALOR_DESDE;
								}								
							}
							else{
								// si el campo valor_hasta tiene datos
								if(unJson[i].VALOR_HASTA!=''){
									if(unJson[i].PERIODO==''){
										label.innerHTML = "<br><b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME+" <b>HASTA:</b> "+unJson[i].VALOR_HASTA;
									}
									else{
										label.innerHTML = "<br><b>PERIODO:</b>"+unJson[i].PERIODO+" <b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME+" <b>HASTA:</b> "+unJson[i].VALOR_HASTA;
									}									
								}
								// el campo valor_desde y campo valor_hasta estan vacios
								else{
									if(unJson[i].PERIODO==''){
										label.innerHTML = "<br><b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME;
									}
									else{
										label.innerHTML = "<br><b>PERIODO:</b>"+unJson[i].PERIODO+" <b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME;
									}									
								}
							}
						}
						unForm.appendChild(label);							
						
						if (unJson[i].COLUMN_NAME=="IMP_RIESGO"){
							mostrarOperaciones(label);
						//Tomo el campo select						
							var campoSelect = document.getElementsByName("selectDivisor");
						//Oculto los valores hasta que el usuario seleccione la opcion MEDIA						
							campoSelect[0].style.display='none';

						}
						i++;	
					}						
				});
				var formulario8 = document.getElementById('formulario8');
				var label= document.createElement("LABEL");
				label.id="labelDecimal";							
				label.innerHTML = "<br><br><b>Cantidad de decimales a guardar:</b>";
				var seleccion= document.createElement("SELECT");
				seleccion.id="selectDecimal";	
				seleccion.type="text";
				// crea las opciones para la seleccion de decimales
				for (var i=0;i<6 ;i++){
					var unaOpc = document.createElement('option');
					unaOpc.appendChild(document.createTextNode(i));
					seleccion.appendChild(unaOpc);
				}
				
				formulario8.appendChild(label);
				formulario8.appendChild(seleccion);
			}
			else{
				alert('El extractor '+valor+' no se encuentra almacenado.');
			}
		});
	}
	else{
		alert('El extractor '+valor+' no se encuentra almacenado o no tiene permisos para ejecutarlo.');
	}
}

//Funcion que guarda en la BD el esquema creado por el usuario.
function enviarEsquema(){
	var esquema = "[";
	var campoLabel;
	var idLabel;
	//obtengo el conjunto de campos checkbox del aprovisionador
	var camposCheck = document.getElementsByName("aCheck");
	var textoLabel;
	var table;
	var column;
	var id;
	var valorDde, valorHta;
	var nombreEsquema = $("#nombreEsquema").val().toUpperCase();
	//obtego el valor del periodo elegido por el usuario
	var indice = document.getElementById("selectPer").selectedIndex;
	var periodo = document.getElementById("selectPer").options[indice].text;
	
	// si el usuario no selecciono un periodo lo dejo en blanco
	if (periodo=='---Elegir Periodo---'){
		periodo='';
	}
	
	// recorro los campos que forman el aprovisionador
	for (var i=0; i<camposCheck.length; i++) {
		//si el campo fue seleccionado por el usuario
		if (camposCheck[i].checked == true){
			
			id = obtenerIDCampoCheck(camposCheck[i].id);
			idLabel= "unLabel"+id;
			campoLabel = document.getElementById(idLabel);
			textoLabel = $(campoLabel).text();
			//obtengo el nombre de la tabla
			table = obtenerTabla(textoLabel);
			//obtengo el nombre del campo
			column = obtenerCampo(textoLabel);
			//si es el campo segmento,subsegmento, marca o submarca tomo su valor de otra manera porque es un campo select
			if (column == 'SEGMENTO'|| column=='SUBSEGMENTO'||column == 'MARCA'|| column=='SUBMARCA'){
				valorDde = obtenerValor(id,column,textoLabel);
			}
			//sino tomo el valor desde y hasta del campo input de texto
			else{
				valorDde = $("#textInputDde"+id).val().toUpperCase();
				valorHta = $("#textInputHta"+id).val().toUpperCase();
			}
			// si el extractor esta vacio
			if (esquema == "["){
				esquema = esquema+"{\"TABLE_NAME\":\""+table+"\",\"COLUMN_NAME\":\""+column+"\",\"PERIODO\":\""+periodo+"\",\"VALOR_DESDE\":\""+valorDde+"\",\"VALOR_HASTA\":\""+valorHta+"\"}";
			}
			else{
				esquema = esquema+",{\"TABLE_NAME\":\""+table+"\",\"COLUMN_NAME\":\""+column+"\",\"PERIODO\":\""+periodo+"\",\"VALOR_DESDE\":\""+valorDde+"\",\"VALOR_HASTA\":\""+valorHta+"\"}";
			}
			
		}
	}
	esquema = esquema + "]";
	// guardo en la BD el extractor creado
	$.put('/insert/'+nombreEsquema+'/'+esquema,function(data){
		// asigno el nuevo extractor al usuario que lo crea
		guardarEsquemaUsuario(nombreEsquema);
		alert (data.msg);
	});
}

//Funcion que muestra por pantalla al usuario los campos existentes en la BD para que
//cree el esquema deseado.
function mostrarCampos(){
	
	var vAprovisionadores = [];
	var username = $("#username").val();
	var camposDisponibles = httpGet('/cubos/buscarCampos/'+username);
	if(camposDisponibles.length > 0){
		$.each(camposDisponibles,function(key,objeto){
			var vAuxiliar = JSON.parse(objeto.cubos);
			vAprovisionadores = vAprovisionadores.concat(vAuxiliar);		
		});
		//Almaceno los valores posibles de MARCA en un array y elimino los duplicados	
			var vMarcas = ejecutarConsulta('marca','rio2015.contratos_di').unique();
		//Almaceno los valores posibles de SUBMARCA en un array	y elimino los duplicados
			var vSubMarcas = ejecutarConsulta('submarca','rio2015.contratos_di').unique();
		//Almaceno los valores posibles de SEGMENTO en un array	y elimino los duplicados
			var vSegmentos = ejecutarConsulta('segmento','rio2015.clientes_periodo').unique();
		//Almaceno los valores posibles de SUBSEGMENTO en un array	y elimino los duplicados
			var vSubSegmentos = ejecutarConsulta('subsegmento','rio2015.clientes_periodo').unique();	
			var i = 0;
		//Creo los botones de select all y select none mediante la funcion	
			crearBotonesSeleccion();
		//Genero las acciones al clickear los botones
			generarAccionesBotones();
			for (var n in vAprovisionadores){
				if (n!=='unique'){
					if (vAprovisionadores[n].COLUMN_NAME=="MARCA"){
		//Recorro el vector de Marcas
						for (var j in vMarcas){
		//Si el indice es distinto de unique (por un BUG) y el valor almacenado no es NULL					
							if (j!=='unique'){
		//Creo el campo checkbox y el campo label						 
								var createField= document.createElement("INPUT");
								createField.id="unCheck"+i;
								createField.type="checkbox";
								createField.name="aCheck";
								var label= document.createElement("LABEL");
								label.id="unLabel"+i;
		//Obtengo el formulario en el cual voy a ingresar los checkbox	
								unForm = obtenerFormulario(vAprovisionadores[n]);
		//Almaceno el label para el campo checkbox						
								label.innerHTML = vAprovisionadores[n].TABLE_NAME+" "+vAprovisionadores[n].COLUMN_NAME+" = <b>"+vMarcas[j]+"</b><br>";
								unForm.appendChild(createField);
								unForm.appendChild(label);
								i++;
							}					
						}
					}
					else if(vAprovisionadores[n].COLUMN_NAME=="SUBMARCA"){
		//Recorro el vector de SubMarcas					
						for (var j in vSubMarcas){
							if (j!=='unique' ){
								var createField= document.createElement("INPUT");
								createField.id="unCheck"+i;
								createField.type="checkbox";
								createField.name="aCheck";
								var label= document.createElement("LABEL");
								label.id="unLabel"+i;
		//Obtengo el formulario en el cual voy a ingresar los checkbox	
								var unForm = obtenerFormulario(vAprovisionadores[n]);						
		//Almaceno el label para el campo checkbox						
								label.innerHTML = vAprovisionadores[n].TABLE_NAME+" "+vAprovisionadores[n].COLUMN_NAME+" = <b>"+vSubMarcas[j]+"</b><br>";
								unForm.appendChild(createField);
								unForm.appendChild(label);
								i++;
							}					
						}								
					}
				
					else{
						if (vAprovisionadores[n].COLUMN_NAME=="SEGMENTO"){
							var createField= document.createElement("INPUT");
							createField.id="unCheck"+i;
							createField.type="checkbox";
							createField.name="aCheck";
							var label= document.createElement("LABEL");
							label.id="unLabel"+i;
		//Obtengo el formulario en el cual voy a ingresar los checkbox	
							var unForm = obtenerFormulario(vAprovisionadores[n]);
		//Almaceno el label para el campo checkbox						
							label.innerHTML = vAprovisionadores[n].TABLE_NAME+" "+vAprovisionadores[n].COLUMN_NAME+" = ";
							unForm.appendChild(createField);
							unForm.appendChild(label);							
							var selectField= document.createElement("SELECT");
							selectField.name="selectSegmento"+i;
							selectField.type="text";
							var unaOpc = document.createElement('option');
							unaOpc.appendChild(document.createTextNode('---Elegir Segmento---'));
							selectField.appendChild(unaOpc);
		//Recorro el verctor de Segmentos
							for (var k in vSegmentos){				
								if (k!=='unique' ){
		//Guardo en el campo SELECT el segmento obtenido			
									unaOpc = document.createElement('option');
									unaOpc.appendChild(document.createTextNode(vSegmentos[k]));
									selectField.appendChild(unaOpc);							
								}
							}
							label.appendChild(selectField);
							var unTag = document.createElement("LABEL");
							unTag.innerHTML = "<br>";
							label.appendChild(unTag);
							i++;					
						}
						else{
							if (vAprovisionadores[n].COLUMN_NAME=="SUBSEGMENTO"){
								var createField= document.createElement("INPUT");
								createField.id="unCheck"+i;
								createField.type="checkbox";
								createField.name="aCheck";
								var label= document.createElement("LABEL");
								label.id="unLabel"+i;
		//Obtengo el formulario en el cual voy a ingresar los checkbox	
								var unForm = obtenerFormulario(vAprovisionadores[n]);
		//Almaceno el label para el campo checkbox						
								label.innerHTML = vAprovisionadores[n].TABLE_NAME+" "+vAprovisionadores[n].COLUMN_NAME+" = ";
								unForm.appendChild(createField);
								unForm.appendChild(label);							
								var selectField= document.createElement("SELECT");
								selectField.name="selectSubSegmento"+i;
								selectField.type="text";
								var unaOpc = document.createElement('option');
								unaOpc.appendChild(document.createTextNode('---Elegir SubSegmento---'));
								selectField.appendChild(unaOpc);
		//Recorro el verctor de SubSegmentos
								for (var k in vSubSegmentos){				
									if (k!=='unique' ){
		//Guardo en el campo SELECT el Subsegmento obtenido			
										unaOpc = document.createElement('option');
										unaOpc.appendChild(document.createTextNode(vSubSegmentos[k]));
										selectField.appendChild(unaOpc);							
									}
								}
								label.appendChild(selectField);
								var unTag = document.createElement("LABEL");
								unTag.innerHTML = "<br>";
								label.appendChild(unTag);						
								i++;
							}
		//Si el campo no es MARCA,SUBMARCA,SEGMENTO ni SUBSEGMENTO lo genero con el label original TABLA-COLUMNA	
							else{
								var createField= document.createElement("INPUT");
								createField.id="unCheck"+i;
								createField.type="checkbox";
								createField.name="aCheck";
								var label= document.createElement("LABEL");
								label.id="unLabel"+i;
								var campoDesde = document.createElement("INPUT");
								campoDesde.id="textInputDde"+i;						
								campoDesde.type="text";
								var label2= document.createElement("LABEL");
								label2.id="unLabel_"+i;
								var campoHasta = document.createElement("INPUT");
								campoHasta.id="textInputHta"+i;						
								campoHasta.type="text";
								var unTag = document.createElement("LABEL");
								unTag.innerHTML = "<br>";
			//Obtengo el formulario en el cual voy a ingresar los checkbox	
								var unForm = obtenerFormulario(vAprovisionadores[n]);
								label.innerHTML = vAprovisionadores[n].TABLE_NAME+" "+vAprovisionadores[n].COLUMN_NAME+" <b>DESDE</b>";
								label2.innerHTML = " "+vAprovisionadores[n].COLUMN_NAME+" <b>HASTA</b>";						
								unForm.appendChild(createField);
								unForm.appendChild(label);
								unForm.appendChild(campoDesde);
								unForm.appendChild(label2);
								unForm.appendChild(campoHasta);
								unForm.appendChild(unTag);
								i++;				
								
							}
						}
					}				
				}					
			}
	}
	else{
		alert('No existen campos a mostrar ya que el usuario '+username+' no tiene Aprovisionadores asignados.');
	}
	
//Si el formulario esta vacio borro los botones de SELECT ALL Y SELECT NONE
	eliminarBotonesSeleccion();
	
//Obtengo el campo de seleccion
	var selector = document.getElementsByName("selectPer");
//Almaceno los posibles valores de PERIODO en un array y elimino los duplicados
	var vPeriodos = ejecutarConsulta('periodo','rio2015.clientes_periodo').unique();
//Si el campo de seleccion de periodo tiene menos de 2 opciones cargo los periodos 
	if (document.getElementById("selectPer").options.length < 2){
		//Recorro el array de Periodos
		for (var j in vPeriodos){
		//Si el indice es distinto de unique (por un BUG)
			if (j!=='unique'){
			//Guardo en el campo SELECT el periodo obtenido			
				var option = document.createElement("option");
				option.appendChild(document.createTextNode(vPeriodos[j]));
				selector[0].appendChild(option);
			}
		
		}
	}
}

//Funcion que edita la Metrica seleccionada por el usuario.
function editarMetrica(){
	var nombre=$("#nombreMetri").val().toUpperCase();
	var username = $("#username").val();
	// valido que el usuario tenga la metrica asignada
	var usuarioValido = validarPermisosMetrica(nombre,username);
	if(usuarioValido){
		$.getJSON('/metricas/buscar/'+nombre,function(data){
			// si se encuentra la metrica en la BD
			if (data.length > 0){
				$.each(data,function(key,value){
					almacenarNuevaMetrica(value.id);
				});
			}
			else{
				alert('La metrica '+nombre+' no se encuentra almacenada.');
			}
		});
	}
	else{
		alert('La metrica '+nombre+' no se encuentra almacenada o no tiene permisos para editarla.');
	}	
}

//Funcion que elimina el Esquema seleccionado por el usuario.
function eliminarEsquema(){
	var nombre = $("#nombreEsquema").val().toUpperCase();
	var username = $("#username").val();	
	// valido que el usuario tenga la metrica asignada
	var usuarioValido = validarPermisosEsquema(nombre,username);
	
	if (usuarioValido){
		$.getJSON('/esquema/query/'+nombre,function(data){
			//si existe el extractor en la BD
			if (data.length > 0){
				$.each(data,function(key,value){
					$.delete('/esquema/eliminar/'+value.id+'/'+username,function(datos){
						alert (datos.msg);
					});
				});
			}
			else{
				alert('El extractor '+nombre+' no se encuentra almacenado.');
			}
		});
	}
	else{
		alert('El extractor '+nombre+' no se encuentra almacenado o no tiene permisos para eliminarlo.');
	}
}

//Funcion que elimina el Componente seleccionado por el usuario.
function eliminarComponente(){
	var nombre=$("#nombreComponente").val().toUpperCase();
	var username = $("#username").val();
	// valido que el usuario tenga el componente asignado
	var usuarioValido = validarPermisosComponente(nombre,username);
	if(usuarioValido){
		$.getJSON('/componentes/buscar/'+nombre,function(data){
			//si existe el componente en la BD
			if (data.length > 0){
				$.each(data,function(key,value){
					$.delete('/componente/eliminar/'+value.id+'/'+username,function(datos){
						alert (datos.msg);
					});
				});
			}
			else{
				alert('El componente '+nombre+' no se encuentra almacenado.');
			}
		});
	}
	else{
		alert('El componente '+nombre+' no se encuentra almacenado o no posee permisos para eliminarlo.');
	}		
}

//Funcion que elimina la Metrica seleccionada por el usuario.
function eliminarMetrica(){
	var nombre=$("#nombreMetri").val().toUpperCase();
	var username = $("#username").val();
	// valido que el usuario tenga la metrica asignada
	var usuarioValido = validarPermisosMetrica(nombre,username);
	
	if(usuarioValido){
		$.getJSON('/metricas/buscar/'+nombre,function(data){
			//si existe la metrica en la BD
			if (data.length > 0){
				$.each(data,function(key,value){
					$.delete('/metrica/eliminar/'+value.id+'/'+username,function(datos){
						alert (datos.msg);
					});
				});
			}
			else{
				alert('La metrica '+nombre+' no se encuentra almacenada.');
			}
		});
	}
	else{
		alert('La metrica '+nombre+' no se encuentra almacenada o no tiene permisos para eliminarla.');
	}	
}

//Funcion que asigna una metrica a un usuario.
function asignarMetrica(){
	var valor = $("#metrica").val().toUpperCase();
	var username = $("#usuario").val();
	//busco la metrica en la BD
	var datos = httpGet('/metricas/buscar/'+valor);
	//si existe la metrica en la BD
	if(datos.length>0){
		// busco el usuario seleccionado por el admin en la BD
		var unUser = httpGet('/usuarios/obtener/'+username);
		// si existe el usuario en la BD
		if (unUser.length>0){
			//asigno la metrica al usuario
			$.put('/metricas/usuarios/insert/'+valor+'/'+username,function(data){
				alert (data.msg);
			});
		}
		else{
			alert('Usuario '+username+' inexistente.');
		}
	}
	else{
		alert('La metrica '+valor+' no se encuentra almacenada.');
	}
}

//Funcion que asigna un componente a un usuario.
function asignarComponente(){
	var valor = $("#componente").val().toUpperCase();
	var username = $("#usuarioComponente").val();
	//busco el componente en la BD
	var datos = httpGet('/componentes/buscar/'+valor);
	//si existe el componente en la BD 
	if(datos.length>0){
		// busco el usuario seleccionado por el admin en la BD
		var unUser = httpGet('/usuarios/obtener/'+username);
		// si existe el usuario en la BD
		if (unUser.length>0){
			// asigno el componente al usuario
			$.put('/componentes/usuarios/insert/'+valor+'/'+username,function(data){
				alert (data.msg);
			});
		}
		else{
			alert('Usuario '+username+' inexistente.');
		}
	}
	else{
		alert('El componente '+valor+' no se encuentra almacenado.');
	}
}

//Funcion que asigna un extractor a un usuario.
function asignarExtractor(){
	var valor = $("#extractor").val().toUpperCase();
	var username = $("#usuarioExtractor").val();
	//busco el extractor en la BD
	var datos = httpGet('/esquema/query/'+valor);
	//si el extractor existe en la BD
	if(datos.length>0){
		// busco el usuario seleccionado por el admin en la BD
		var unUser = httpGet('/usuarios/obtener/'+username);
		// si el usuario existe en la BD
		if (unUser.length>0){
			// asigno el extractor al usuario seleccionado
			$.put('/esquemas/usuarios/insert/'+valor+'/'+username,function(data){
				alert (data.msg);
			});
		}
		else{
			alert('Usuario '+username+' inexistente.');
		}
	}
	else{
		alert('El extractor '+valor+' no se encuentra almacenado.');
	}
}

//Funcion que lista los cubos creados por el Administrador
function listarCubos(){
	var i = 1;
	var unForm = document.getElementById("cubosForm41");
	var data= httpGet('/cubos/listar/');
	var result = data[0].cubos;
	
	if (result!=null&&result!=''){
		$.each(data,function(key,value){			
			var label= document.createElement("LABEL");
			label.id="cubosLabel"+i;				
			label.innerHTML = "<u>Cubo "+i+"</u>: <b>"+value.nombre+"</b><br>";						
			unForm.appendChild(label);
			i++;
		});
	}		
}

//Funcion que lista los cubos creados por el Administrador para revisar su contenido.
function listarCubosParaRevisar(){
	var i = 1;
	var unForm = document.getElementById("cubosForm21");
	// busco todos los aprovisionadores creados en la BD
	var data= httpGet('/cubos/listar/');
	var result = data;
	if (result!=null&&result!=''){
		for(var n in data){
			if(n!=='unique'){
				var label= document.createElement("LABEL");
				label.id="cubosLabel"+i;				
				label.innerHTML = "<u>Cubo "+i+"</u>: <b>"+data[n]+"</b><br>";						
				unForm.appendChild(label);
				i++;		
			}
		}		
	}		
}

//Funcion que lista los usuarios para asignarles un cubo.
function listarUsuariosCubos(){
	var i = 0;
	var unForm = document.getElementById("cubosForm42");
	//busco los usuarios en la BD
	var data= httpGet('/usuarios/listar/');
	
	if (data!=null&&data!=''){
		for (var n in data){
			if (n!=='unique'){
				var label= document.createElement("LABEL");
				label.id="usersLabel"+i;				
				label.innerHTML = "<u>Usuario</u>: <b>"+data[n]+"</b><br>";						
				unForm.appendChild(label);
				i++;		
			}		
		}
	}
}

//Funcion que muestra por pantalla los campos disponibles para crear un cubo.
function listarCamposDisponibles(){
	
	var i = 0;
//Creo los botones de select all y select none mediante la funcion	
	crearBotonesSeleccionCubos();
//Genero las acciones al clickear los botones
	generarAccionesBotonesCubos();
//Hago un GET de todos los campos de las tablas	
	$.getJSON('/users',function(data){
//Por cada valor obtenido		
		$.each(data,function(key,value){			
			var createField= document.createElement("INPUT");
			createField.id= "cubosCheck"+i;
			createField.type= "checkbox";
			createField.name= "cubosCheckboxs";
			var label= document.createElement("LABEL");
			label.id="labelAprov"+i;
			var unTag = document.createElement("LABEL");
			unTag.innerHTML = "<br>";
		//Obtengo el formulario en el cual voy a ingresar los checkbox	
			var unForm = document.getElementById('cubosForm11');
			label.innerHTML = "<strong>"+value.TABLE_NAME+"</strong> - <i>"+value.COLUMN_NAME+"</i>";
			unForm.appendChild(createField);
			unForm.appendChild(label);
			unForm.appendChild(unTag);
			i++;				
						
		});
	});
	
}

//Funcion que crea un aprovisionador y lo almacena en el base de datos.
function crearCubo(){
	var cubo = "[";
	var campoLabel;
	var idLabel;
	//obtengo todos los campos checkbox
	var camposCheck = document.getElementsByName("cubosCheckboxs");
	var textoLabel;
	var table;
	var column;
	var id;
	var nombreCubo = $("#nombreAprovisionador").val().toUpperCase();
	var camposCubos = $('input[name="cubosCheckboxs"]');
	// obtengo la cantidad de campos seleccionados por el admin
    var camposElegidos = camposCubos.filter(':checked').length;
	//si se selecciono mas de 65 muestro error por pantalla ya que no se pueden enviar por HTTP
	if(camposElegidos>65){
		alert('El Aprovisionador no puede tener mas de 65 campos. Usted selecciono '+camposElegidos+' campos.');
		return;
	}
	//recorro los campos checkbox
	for (var i=0; i<camposCheck.length; i++) {
		// si fue seleccionado por el admin
		if (camposCheck[i].checked == true){
			
			id = obtenerIDCampoCheck(camposCheck[i].id);
			idLabel= "labelAprov"+id;
			campoLabel = document.getElementById(idLabel);
			textoLabel = $(campoLabel).text();
			// obtengo el nombre de la tabla
			table = obtenerTablaCubo(textoLabel);
			// obtengo el valor del campo
			column = obtenerCampoCubo(textoLabel);
			// si el aprovisionador esta vacio
			if (cubo == "["){
				cubo = cubo+"{\"TABLE_NAME\":\""+table+"\",\"COLUMN_NAME\":\""+column+"\"}";
			}
			else{
				cubo = cubo+",{\"TABLE_NAME\":\""+table+"\",\"COLUMN_NAME\":\""+column+"\"}";
			}
			
		}
	}
	cubo = cubo + "]";

	// almaceno el aprovisionador en la BD
	$.put('/cubos/insert/'+nombreCubo+'/'+cubo,function(data){
		$.put('/cubos/usuarios/insert/'+nombreCubo+'/admin');		
		alert (data.msg);
	});

}

//Funcion que muestra por pantalla el detalle del Aprovisionador seleccionado por el usuario.
function mostrarCubo(){
	
	var valor = $("#datoAprovisionador").val().toUpperCase();
	// busco en la BD el aprovisionador seleccionado
	var data = httpGet ('/cubos/buscar/'+valor);

	//si existe el aprovisionador en la BD
		if (data.length > 0){
			$.each(data,function(key,value){
				var i=0;
				var unJson = JSON.parse(value.cubos);
				//obtengo la cantidad de campos que componen el aprovisionador
				var total= unJson.length;
				var unForm = document.getElementById("cubosForm22");
				var label= document.createElement("LABEL");
				label.id="tituloAprov";							
				label.innerHTML = '<h3><u>Aprovisionador</u>: '+valor+'</h3>';
				unForm.appendChild(label);
				
				while (i<total){
					var label= document.createElement("LABEL");
					label.id="unLabel"+i;
					label.innerHTML = "<br><b>TABLA:</b>"+unJson[i].TABLE_NAME+" <b>CAMPO:</b>"+unJson[i].COLUMN_NAME;										
					unForm.appendChild(label);
					i++;
				}							
			}); 			
		}
		else{
			alert('El Aprovisionador '+valor+' no se encuentra almacenado.');
		}
}

//Funcion que ejecuta el Aprovisionador seleccionado por el usuario.
function ejecutarCubo(){
	var valor = $("#unAprov").val().toUpperCase();
			
	//Busco en la base el Aprovisionador que solicita el usuario
	$.getJSON('/cubos/buscar/'+valor,function(data){
		if (data.length > 0){
			var vFilas = [];
			//Por cada valor que devuelve la base
			$.each(data,function(key,value){
				var i=0;
				var contador=0;
				var unJson = JSON.parse(value.cubos);
				var total= unJson.length;
				var vRegistros = "[";
				var vCampos = [];
				var vTablas = [];					
				//Mientras no llegue al final del ultimo JSON del array
				while (i<total){
					var unRegistro = {
						tabla : unJson[i].TABLE_NAME,
						campo : unJson[i].COLUMN_NAME,						
					};
		//Almaceno en un vector el valor de los campos y las tablas utilizados en el esquema
					vCampos.push(unJson[i].COLUMN_NAME);
					vTablas.push(unJson[i].TABLE_NAME);					
					//Convierto el registro creado en un JSON
					unRegistro = JSON.stringify(unRegistro);
					if (vRegistros=="["){
						vRegistros= vRegistros+unRegistro;
					}
					else{
						vRegistros= vRegistros+","+unRegistro;
					}
					i++;
				}
				vRegistros = vRegistros + "]";
				vTablas=vTablas.unique();
	//Busco en la base los valores segun la tabla y campo del aprovisionador que ingreso el usuario
				$.getJSON('/cubos/ejecutar/'+vRegistros,function(resultado){
					if(resultado.length > 0){
						var n=0;						
						//Por cada fila que retorna la base
						$.each(resultado,function(key,value){
							if (Object.size(vTablas)!=1){
								$('#textAreaCubo').val($('#textAreaCubo').val()+
								"******** TABLA:"+vTablas[n]+" ********\n"+
								"--------------------------------------------------------------------------------------\n");
								n++;	
							}
							else{
								if (n==0){
									$('#textAreaCubo').val($('#textAreaCubo').val()+
									"******** TABLA:"+vTablas[0]+" ********\n"+
									"--------------------------------------------------------------------------------------\n");
									n++;
								}
							}
							// si hay mas de una tabla en el aprovisionador
							if (Object.size(vTablas)!=1){						
								for (var j in value){
									if (j!='unique'){									
										jsonSize=Object.keys(value[j]).length;
										for (k=0;k<jsonSize;k++){
											if (k!='unique'){
												$('#textAreaCubo').val($('#textAreaCubo').val() + 
												Object.keys(value[j])[k]+": "+value[j][Object.keys(value[j])[k]]+" | ");																																
											}																				
										}																				
									}
									$('#textAreaCubo').val($('#textAreaCubo').val() +
									"\n--------------------------------------------------------------------------------------\n");
								}	
							}
							// si el aprovisionador tiene una sola tabla
							else{
								jsonSize=Object.keys(value).length;
								for (k=0;k<jsonSize;k++){
									$('#textAreaCubo').val($('#textAreaCubo').val() + 
									Object.keys(value)[k]+": "+value[Object.keys(value)[k]]+" | ");									
								}
								$('#textAreaCubo').val($('#textAreaCubo').val() +
								"\n--------------------------------------------------------------------------------------\n");								
							}							
						});						
					}						
				});
		//Realizo un nuevamente un GET para armar el vector de filas retornadas					
				var valores=httpGet('/cubos/ejecutar/'+vRegistros);
				vFilas.push(contador);
				// si en el aprovisionador hay mas de una tabla
				if (Object.size(vTablas)>1){
					$.each(valores,function(key,value){
						// si hay registros en la tabla
						if(Object.size(value) > 0){
							contador=contador+Object.size(value);
							vFilas.push(contador);
						}
						else{
							vFilas.push(contador);
						}	
					});
				}
				else{
					vFilas.push(Object.size(valores));
				}								
			});
		//Muestro el resultado de las filas por pantalla			
			if (vFilas.length!=0){
				var posFin = vFilas.length-1;
			}
			else{
				var posFin = 0;
			}
			$('#textAreaCubo').val($('#textAreaCubo').val()+
			'Aprovisionador: '+valor+'\n\n'+
			'La consulta arrojo '+vFilas[posFin]+' filas:\n--------------------------------------------------------------------------------------\n');
		}
		else{
			alert('El Aprovisionador '+valor+' no se encuentra almacenado.');
		}	
	});
}

//Funcion que asigna un Aprovisionador a un usuario.
function asignarCubo(){
	var valor = $("#aprovisionador").val().toUpperCase();
	var username = $("#usuarioAprovisionador").val();
	//obtengo el aprovisionador seleccionado
	var datos = httpGet('/cubos/buscar/'+valor);
	// si el aprovisionador se encuentra en la BD
	if(datos.length>0){
		// busco el usuario seleccionado por el admin 
		var unUser = httpGet('/usuarios/obtener/'+username);
		// si existe el usuario en la BD
		if (unUser.length>0){
			// asigno el aprovisionador al usuario seleccionado 
			$.put('/cubos/usuarios/insert/'+valor+'/'+username,function(data){
				alert (data.msg);
			});
		}
		else{
			alert('Usuario '+username+' inexistente.');
		}
	}
	else{
		alert('El Aprovisionador '+valor+' no se encuentra almacenado.');
	}
}

//Funcion que editar el Aprovisionador seleccionado por el usuario.
function editarCubo(){
	
	var nombre =$("#nombreAprovisionador").val().toUpperCase();
	//busco el aprovisionador en la BD
	$.getJSON('/cubos/buscar/'+nombre,function(data){
		// si existe el aprovisionador en la BD
		if (data.length > 0){
			$.each(data,function(key,value){
				//llamo a la funcion que crear y almacena el nuevo aprovisionador
				almacenarNuevoCubo(value.id);
			});
		}
		else{
			alert('El Aprovisionador '+nombre+' no se encuentra almacenado.');
		}
	});
}

//Funcion que guarda el nuevo Aprovisionador seleccionado por el usuario.
function almacenarNuevoCubo(idCubo){
	
	var cubo = "[";
	var campoLabel;
	var idLabel;
	// obtengo los campos checkbox
	var camposCheck = document.getElementsByName("cubosCheckboxs");
	var textoLabel;
	var table;
	var column;
	var id;
	var nombreCubo = $("#nombreAprovisionador").val().toUpperCase();
	var camposCubos = $('input[name="cubosCheckboxs"]');
    // obtengo la cantidad de campos seleccionados por el admin
	var camposElegidos = camposCubos.filter(':checked').length;
	// si se seleccionan mas de 65 campos, muestro el error por pantalla ya que no se pueden enviar por http
	if(camposElegidos>65){
		alert('El Aprovisionador no puede tener mas de 65 campos. Usted selecciono '+camposElegidos+' campos.');
		return;
	}
	//recorro los campos checkboxs
	for (var i=0; i<camposCheck.length; i++) {
		// si el campo fue seleccionado por el admin
		if (camposCheck[i].checked == true){
			
			id = obtenerIDCampoCheck(camposCheck[i].id);
			idLabel= "labelAprov"+id;
			campoLabel = document.getElementById(idLabel);
			textoLabel = $(campoLabel).text();
			//obtengo el nombre de la tabla
			table = obtenerTablaCubo(textoLabel);
			//obtengo el nombre del campo
			column = obtenerCampoCubo(textoLabel);
			//si el aprovisionador esta vacio
			if (cubo == "["){
				cubo = cubo+"{\"TABLE_NAME\":\""+table+"\",\"COLUMN_NAME\":\""+column+"\"}";
			}
			else{
				cubo = cubo+",{\"TABLE_NAME\":\""+table+"\",\"COLUMN_NAME\":\""+column+"\"}";
			}
			
		}
	}
	cubo = cubo + "]";

	//guardo el aprovisionador en la base
	$.put('/cubos/edit/'+nombreCubo+'/'+cubo+'/'+idCubo,function(data){
		alert (data.msg);
	});	
}

//Funcion que elimina el Aprovisionador seleccionado por el usuario.
function eliminarCubo(){
	var nombre = $("#nombreAprovisionador").val().toUpperCase();
	// busco el aprovisionador en la BD
	$.getJSON('/cubos/buscar/'+nombre,function(data){
		//si el aprovisionador existe en la BD
		if (data.length > 0){
			$.each(data,function(key,value){
				// elimino el aprovisionador
				$.delete('/cubos/eliminar/'+value.id,function(datos){
					alert (datos.msg);
				});
			});
		}
		else{
			alert('El extractor '+nombre+' no se encuentra almacenado.');
		}
	});
}

//Funcion que muestra al admin las asignaciones de los distintos usuarios
function listarAsignacionesCubos(){
	
	var i = 0;
	//busco las asignaciones de aprovisionadores de los usuarios
	$.getJSON('/asignaciones/cubos/',function(data){
		//si hay asignaciones de aprovisionadores en la BD
		if (data.length > 0){
			$.each(data,function(key,value){			
				var label= document.createElement("LABEL");
				label.id="labelAsigAprov"+i;
				var unTag = document.createElement("LABEL");
				unTag.innerHTML = "<br>";
				//Obtengo el formulario en el cual voy a ingresar los checkbox	
				var unForm = document.getElementById('cubosForm42');
				label.innerHTML = "<strong><u>"+value.username+"</u></strong><br>";
				//guardo los Aprovisionadores en un vector
				var vCubos = value.cubos.split(',');				
				unForm.appendChild(label);
				//recorro el vector de aprovisionadores
				for (var n in vCubos){
					if(n!='unique'){
						var createField= document.createElement("INPUT");
						createField.id= "asignacionesAp"+i+n;
						createField.type= "checkbox";
						createField.name= "asignacionesAprov";
						createField.checked= true;
						var etiqueta= document.createElement("LABEL");
						etiqueta.id="etiquetaAprov"+i+n;
						etiqueta.innerHTML = "<strong>"+vCubos[n]+"</strong><br>";
						unForm.appendChild(createField);
						unForm.appendChild(etiqueta);
					}
				}				
				unForm.appendChild(unTag);
				i++;						
			});			
		}
		else{
			alert('No existen Aprovisionadores asignados.');
		}
	});
}

//Funcion que muestra al admin las asignaciones de los distintos usuarios
function listarAsignacionesExtractor(){
	
	var i = 0;
	//busco las asignaciones de extractores de los usuarios
	$.getJSON('/asignaciones/extractores/',function(data){
		//si hay asignaciones de extractores en la BD
		if (data.length > 0){
			$.each(data,function(key,value){			
				var label= document.createElement("LABEL");
				label.id="labelAsigExt"+i;
				var unTag = document.createElement("LABEL");
				unTag.innerHTML = "<br>";
				//Obtengo el formulario en el cual voy a ingresar los checkbox	
				var unForm = document.getElementById('formulario15');
				label.innerHTML = "<strong><u>"+value.username+"</u></strong><br>";
				//guardo los extractores en un vector
				var vExtractores = value.esquemas.split(',');				
				unForm.appendChild(label);
				//recorro el vector de extractores
				for (var n in vExtractores){
					if(n!='unique'){
						var createField= document.createElement("INPUT");
						createField.id= "asignacionesExt"+i+n;
						createField.type= "checkbox";
						createField.name= "asignacionesExt";
						createField.checked= true;
						var etiqueta= document.createElement("LABEL");
						etiqueta.id="etiquetaExt"+i+n;
						etiqueta.innerHTML = "<strong>"+vExtractores[n]+"</strong><br>";
						unForm.appendChild(createField);
						unForm.appendChild(etiqueta);
					}
				}				
				unForm.appendChild(unTag);
				i++;						
			});			
		}
		else{
			alert('No existen Extractores asignados.');
		}
	});
}

//Funcion que muestra al admin las asignaciones de los distintos usuarios
function listarAsignacionesComponentes(){
	
	var i = 0;
	//busco las asignaciones de componentes de los usuarios
	$.getJSON('/asignaciones/componentes/',function(data){
		//si hay asignaciones de componentes en la BD
		if (data.length > 0){
			$.each(data,function(key,value){			
				var label= document.createElement("LABEL");
				label.id="labelAsigCompo"+i;
				var unTag = document.createElement("LABEL");
				unTag.innerHTML = "<br>";
				//Obtengo el formulario en el cual voy a ingresar los checkbox	
				var unForm = document.getElementById('formulario24');
				label.innerHTML = "<strong><u>"+value.username+"</u></strong><br>";
				//guardo los componentes en un vector
				var vComponentes = value.componentes.split(',');				
				unForm.appendChild(label);
				//recorro el vector de componentes
				for (var n in vComponentes){
					if(n!='unique'){
						
						var createField= document.createElement("INPUT");
						createField.id= "asignacionesCompo"+i+n;
						createField.type= "checkbox";
						createField.name= "asignacionesCompo";
						createField.checked= true;
						var etiqueta= document.createElement("LABEL");
						etiqueta.id="etiquetaCompo"+i+n;
						etiqueta.innerHTML = "<strong>"+vComponentes[n]+"</strong><br>";
						unForm.appendChild(createField);
						unForm.appendChild(etiqueta);
					}
				}				
				unForm.appendChild(unTag);
				i++;						
			});			
		}
		else{
			alert('No existen Componentes asignados.');
		}
	});
}

//Funcion que muestra al admin las asignaciones de los distintos usuarios
function listarAsignacionesMetricas(){
	
	var i = 0;
	//busco las asignaciones de metricas de los usuarios
	$.getJSON('/asignaciones/metricas/',function(data){
		//si hay asignaciones de metricas en la BD
		if (data.length > 0){
			$.each(data,function(key,value){			
				var label= document.createElement("LABEL");
				label.id="labelAsigMetri"+i;
				var unTag = document.createElement("LABEL");
				unTag.innerHTML = "<br>";
				//Obtengo el formulario en el cual voy a ingresar los checkbox	
				var unForm = document.getElementById('formulario34');
				label.innerHTML = "<strong><u>"+value.username+"</u></strong><br>";
				//guardo las metricas en un vector
				var vMetricas = value.metricas.split(',');				
				unForm.appendChild(label);
				//recorro el vector de metricas
				for (var n in vMetricas){
					if(n!='unique'){
						
						var createField= document.createElement("INPUT");
						createField.id= "asignacionesMetri"+i+n;
						createField.type= "checkbox";
						createField.name= "asignacionesMetri";
						createField.checked= true;
						var etiqueta= document.createElement("LABEL");
						etiqueta.id="etiquetaMetri"+i+n;
						etiqueta.innerHTML = "<strong>"+vMetricas[n]+"</strong><br>";
						unForm.appendChild(createField);
						unForm.appendChild(etiqueta);
					}
				}				
				unForm.appendChild(unTag);
				i++;						
			});			
		}
		else{
			alert('No existen Metricas asignadas.');
		}
	});
}

//Funcion que quita la asignacion de los Aprovisionadores seleccionados por el admin
function desasignarAprovisionadores(){
	
	var camposCheck = document.getElementsByName("asignacionesAprov");
	
	// recorro las asignaciones
	for (var i=0; i<camposCheck.length; i++) {
		//si el campo fue destildado por el admin
		if (camposCheck[i].checked == false){
			var id = obtenerIDAprovisionador(camposCheck[i].id);			
			var idUser = obtenerIDUserAp(camposCheck[i].id);			
			var campoLabel = document.getElementById("etiquetaAprov"+id);
			var labelUsuario = document.getElementById('labelAsigAprov'+idUser);
			//obtengo el nombre del aprovisionador destildado
			var	aprovisionador = $(campoLabel).text();
			//obtengo el usuario al que se le destildo el aprovisionador
			var usuario = $(labelUsuario).text();
			//modifico las asignaciones del usuario			
			$.put('/aprovisionadores/desasignar/'+aprovisionador+'/'+usuario);
		}
	}
	alert ('Aprovisionadores desasignados con exito.');
}

//Funcion que quita la asignacion de los Extractores seleccionados por el admin
function desasignarExtractores(){
	var camposCheck = document.getElementsByName("asignacionesExt");
	
	// recorro las asignaciones
	for (var i=0; i<camposCheck.length; i++) {
		//si el campo fue destildado por el admin
		if (camposCheck[i].checked == false){
			var id = obtenerIDExtractor(camposCheck[i].id);	
			var idUser = obtenerIDUserExt(camposCheck[i].id);	
			var labelExtractor = document.getElementById("etiquetaExt"+id);
			var labelUsuario = document.getElementById('labelAsigExt'+idUser);
			//obtengo el nombre del extractor destildado
			var	extractor = $(labelExtractor).text();
			//obtengo el usuario al que se le destildo el extractor
			var usuario = $(labelUsuario).text();
			//modifico las asignaciones del usuario	
			$.put('/extractores/desasignar/'+extractor+'/'+usuario);
		}
	}
	alert ('Extractores desasignados con exito.');	
}

//Funcion que quita la asignacion de los Componentes seleccionados por el admin
function desasignarComponentes(){
	
	var camposCheck = document.getElementsByName("asignacionesCompo");
	
	// recorro las asignaciones
	for (var i=0; i<camposCheck.length; i++) {
		//si el campo fue destildado por el admin
		if (camposCheck[i].checked == false){
			var id = obtenerIDComponente(camposCheck[i].id);	
			var idUser = obtenerIDUserComp(camposCheck[i].id);	
			var labelComponente = document.getElementById("etiquetaCompo"+id);
			var labelUsuario = document.getElementById('labelAsigCompo'+idUser);
			//obtengo el nombre del componente destildado
			var	componente = $(labelComponente).text();
			//obtengo el usuario al que se le destildo el componente
			var usuario = $(labelUsuario).text();
			//modifico las asignaciones del usuario	
			$.put('/componentes/desasignar/'+componente+'/'+usuario);
		}
	}
	alert ('Componentes desasignados con exito.');		
}

//Funcion que quita la asignacion de las Metricas seleccionadas por el admin
function desasignarMetricas(){

	var camposCheck = document.getElementsByName("asignacionesMetri");
	
	// recorro las asignaciones
	for (var i=0; i<camposCheck.length; i++) {
		//si el campo fue destildado por el admin
		if (camposCheck[i].checked == false){
			var id = obtenerIDMetrica(camposCheck[i].id);	
			var idUser = obtenerIDUserMet(camposCheck[i].id);	
			var labelMetrica = document.getElementById("etiquetaMetri"+id);
			var labelUsuario = document.getElementById('labelAsigMetri'+idUser);
			//obtengo el nombre de la metrica destildado
			var	metrica = $(labelMetrica).text();
			//obtengo el usuario al que se le destildo la metrica
			var usuario = $(labelUsuario).text();
			//modifico las asignaciones del usuario	
			$.put('/metricas/desasignar/'+metrica+'/'+usuario);
		}
	}
	alert ('Metricas desasignadas con exito.');	
}

// **************************** FUNCIONES AUXILIARES **************************** //

//Funcion que retorna el formulario en donde mostrar los campos de cada tabla.
function obtenerFormulario(datos){
	var unFormulario,unDiv;	
	switch (datos.TABLE_NAME){
		case "contratos_di":
		unFormulario = document.getElementById("formulario");		
		unDiv = document.getElementById("sectionfirst");
		unDiv.style.display= "inline";
		break;
		case "contratos_periodo":
		unFormulario = document.getElementById("formulario1");
		unDiv = document.getElementById("sectionfirst1");
		unDiv.style.display= "inline";		
		break;
		case "clientes_di":
		unFormulario = document.getElementById("formulario2");
		unDiv = document.getElementById("sectionfirst2");
		unDiv.style.display= "inline";
		break;
		case "clientes_periodo":
		unFormulario = document.getElementById("formulario3");
		unDiv = document.getElementById("sectionfirst3");
		unDiv.style.display= "inline";
		break;
		default:
		console.log('ERROR:'+datos.TABLE_NAME+'-'+datos.COLUMN_NAME);
	}
	return unFormulario;
}

//Funcion que retorna el nombre de la tabla seleccionada.		
function obtenerTabla(texto){
	var posFin = texto.indexOf(' ');
	var tabla = texto.substring(0,posFin);
	return tabla;	
}

//Funcion que retorna el nombre de la tabla seleccionada en la creacion de Cubos.		
function obtenerTablaCubo(texto){
	var posFin = texto.indexOf('-');
	var tabla = texto.substring(0,posFin-1);
	return tabla;	
}

//Funcion que retorna el nombre del campo seleccionado.
function obtenerCampo(texto){
	if (texto.indexOf(' MARCA')==-1 && texto.indexOf('SUBMARCA')==-1&& texto.indexOf('SUBSEGMENTO')==-1&& texto.indexOf(' SEGMENTO')==-1){
		var posIni = texto.indexOf(' ');
		var posFin = texto.indexOf(' ',posIni+1);
		var campo = texto.substring(posIni+1,posFin);
	}
	else {
		var posIni = texto.indexOf(' ');
		var posFin = texto.indexOf(' ',posIni+1);
		var campo = texto.substring(posIni+1,posFin);	
	}
	return campo;
}

//Funcion que retorna el nombre del campo seleccionado en la creacion de Cubos.
function obtenerCampoCubo(texto){
	var posIni = texto.indexOf('-');
	var campo = texto.substring(posIni+2);

	return campo;
}

//Funcion que retorna la seleccion del campo Marca
function obtenerMarca(texto){
	var posIni = texto.indexOf(' MARCA');
	if (posIni!==-1){
		var retornoMarca = texto.substring(posIni+9);
	}
	else{
		var retornoMarca = "";
	}
	return retornoMarca;
}

//Funcion que devulve la seleccion del campo SubMarca
function obtenerSubmarca(texto){
	var posIni = texto.indexOf('SUBMARCA');
	if (posIni!==-1){
		var retornoSubMarca = texto.substring(posIni+11);
	}
	else{
		var retornoSubMarca = "";
	}
	return retornoSubMarca;	
}

//Funcion que retorna el ID del campo checkbox
function obtenerIDCampoCheck(idCheck){
	var posIni = idCheck.indexOf('k')+1;
	var retornoID = idCheck.substring(posIni);
	return parseInt(retornoID);
}
		
function enfocar(){
	var x=$("#field");
	x.attr("value","");
}

function desenfocar(){
	var x=$("#field");
	x.attr("value","Campo");
}

//Funcion para realizar un GET sincronico, el GET de Jquery es asincronico
function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

//Funcion para quitar valores duplicados de un array.
Array.prototype.unique=function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

//Funcion que retorna en un vector los valores obtenidos segun el campo y la tabla 
//pasados por parametro.
function ejecutarConsulta(campo,tabla){
	var vValores=[];
	var data;
	campo = campo.toUpperCase();
	
	data = httpGet('/users/'+campo+'/'+tabla);
	if (data.length > 0){
		$.each(data,function(key,value){
			vValores.push(value[campo]); 
		}); 			
	}
	else{
		alert('El campo '+campo+' no se encuentra en la tabla' +tabla);
	}

	return vValores;
}

//Funcion que retorna un JSON segun el nombre de esquema pasado por parametro
function getEsquema(nombre){
	nombre = nombre.toUpperCase();
	var data = httpGet('/esquema/query/'+nombre);
	var objeto;
	
	if (data.length > 0){
		$.each(data,function(key,value){
			objeto = JSON.parse(value.esquema);
		}); 			
	}
	else{
		alert('El esquema '+nombre+' no se encuentra almacenado.');
	}
	return objeto;
}

//Funcion que retorna el valor seleccionado por el usuario en los campos Segmento,
//Subsegmento, Marca y SubMarca.
function obtenerValor(unID,campo,label){
	
	switch (campo){
		case "SUBSEGMENTO":
		var campoSelect = document.getElementsByName("selectSubSegmento"+unID);
		var indice = campoSelect[0].selectedIndex;
		var opcion = campoSelect[0].options[indice].text;		
		break;
		case "SEGMENTO":
		var campoSelect = document.getElementsByName("selectSegmento"+unID);
		var indice = campoSelect[0].selectedIndex;
		var opcion = campoSelect[0].options[indice].text;		
		break;
		case "MARCA":
		var opcion = obtenerMarca(label) ;				
		break;
		case "SUBMARCA":
		var opcion = obtenerSubmarca(label);	
		break;
	}
	
	return opcion;
}

//Funcion que retorna el numero de registros devuelto por la consulta enviada por parametro
function getTotalRegistros(nombreEsquema){

	//Busco en la base el esquema que solicita el usuario
	var data = httpGet('/esquema/query/'+nombreEsquema);
		if (data.length > 0){
			var vFilas = [];
			//Por cada valor que devuelve la base
			$.each(data,function(key,value){
				var i=0;
				var contador=0;
				var unJson = JSON.parse(value.esquema);
				var total= unJson.length;
				var vRegistros = "[";
				var vCampos = [];
				var vTablas = [];					
				//Mientras no llegue al final del ultimo JSON del array
				while (i<total){
					var unRegistro = {
						periodo : unJson[i].PERIODO,
						tabla : unJson[i].TABLE_NAME,
						campo : unJson[i].COLUMN_NAME,
						valor_desde: unJson[i].VALOR_DESDE,
						valor_hasta: unJson[i].VALOR_HASTA
					};
		//Almaceno en un vector el valor de los campos y las tablas utilizados en el esquema
					vCampos.push(unJson[i].COLUMN_NAME);
					vTablas.push(unJson[i].TABLE_NAME);					
					//Convierto el registro creado en un JSON
					unRegistro = JSON.stringify(unRegistro);
					if (vRegistros=="["){
						vRegistros= vRegistros+unRegistro;
					}
					else{
						vRegistros= vRegistros+","+unRegistro;
					}
					i++;
				}
				vRegistros = vRegistros + "]";
				vTablas=vTablas.unique();
		//Realizo un GET para armar el vector de filas retornadas					
				var valores=httpGet('/esquema/consulta/'+vRegistros);
				vFilas.push(contador);
				if (Object.size(vTablas)>1){
					$.each(valores,function(key,value){					
						if(Object.size(value) > 0){
							contador=contador+Object.size(value);
							vFilas.push(contador);
						}
						else{
							vFilas.push(contador);
						}	
					});
				}
				else{
					vFilas.push(Object.size(valores));
				}								
			});
		//Muestro el resultado de las filas por pantalla			
			if (vFilas.length!=0){
				var posFin = vFilas.length-1;
			}
			else{
				var posFin = 0;
			}
			return vFilas[posFin];
		}
		else{
			alert('El esquema '+valor+' no se encuentra almacenado.');
		}		
}

//Funcion que retorna el valor de la suma o media de los importes de riesgo del esquema.
function calcularImpRiesgo(esquema,opcion){

	for (x in esquema){
		if(x!=='unique'){
			if(esquema[x].COLUMN_NAME=='IMP_RIESGO'){
				var aux = getValores(esquema[x].TABLE_NAME,esquema);
				var valores ="[";
				valores = valores+JSON.stringify(aux.fil[0]);
				for (var i in aux.fil){
					if(i!=='unique' && i!= 0){
						valores = valores.concat(',');
						valores = valores.concat(JSON.stringify(aux.fil[i]));	
					}					
				}
				valores = valores+"]";
				var impRiesgo = obtenerImpRiesgo(valores,opcion);
			}

		}
	}
	return impRiesgo;
}

//Funcion que retorna los campos y los valores que comparten la tabla pasada por
//parametro en el esquma seleccionado.
function getValores(unaTabla,unEsquema){
	vRetorno={
		fil:[]	
	};

	for (i in unEsquema){
		if(i!=='unique'){
			if (unEsquema[i].TABLE_NAME==unaTabla){
				var registro={
					tabla: null,
					campo: null,
					periodo: null,
					valor_desde: null,
					valor_hasta: null
				};
				registro.tabla = unEsquema[i].TABLE_NAME;
				registro.campo = unEsquema[i].COLUMN_NAME;
				registro.periodo = unEsquema[i].PERIODO;
				registro.valor_desde = unEsquema[i].VALOR_DESDE;
				registro.valor_hasta = unEsquema[i].VALOR_HASTA;
				vRetorno.fil.push(registro);
				
			}
		}
	}
	return vRetorno;
}

//Funcion que retorna los importes de riesgo de los registros pasados por parametro calculados
//segun la opcion elegida por el usuario.
function obtenerImpRiesgo(registros,opcion){
	var acum = 0;

	var importes = httpGet('/importes/'+registros);
		if (importes.length>0){
			$.each(importes,function(key,value){
				acum = acum + value.imp_riesgo;
			});
			if(opcion=='SUMA'){
//Se calcula la SUMA de IMP_RIESGO
				return acum;
			}
			else{
//Se calcula la MEDIA de IMP_RIESGO
				var divisor = obtenerDivisor(registros);
				if (acum != 0 && divisor!=0){					
					return (acum/divisor);
				}
				else{
					return 0;
				}
			}	
		}
		else{
			return 0;
		}

}

//Funcion que retorna el numero divisor segun la opcion del campo DIVISOR que selecciono
//el usuario.
function obtenerDivisor(datos){
//Tomo el campo SELECT con los divisores						
		var campoSelect = document.getElementsByName("selectDivisor");
//Tomo el valor seleccionado por el usuario						
		var valor = campoSelect[0].value;
		var unDiv = 0;
		if (valor== 'PERIODO'){
			unDiv=30;
		}
		else{
			var vResultado=httpGet('/divisor/'+datos+'/'+valor);
			if (vResultado.length>0){
				unDiv = vResultado.length;
			}						
		}
	return unDiv;
}

//Funcion que redondea hacia arriba la cantidad de digitos pasados por parametro.
Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

//Funcion que retorna un componente armado listo para ingresar en la BD segun los
//valores pasados por parametro.
function armarComponente(nEsquema,valor,periodo,checks){
		
	var checkboxes = $('input[name="checkboxInd"]');
    var checkSelected = checkboxes.filter(':checked').length;
	
	if (checkSelected >1){
		alert('Solo puede asociar un parametro al Componente.');
		return '';
	}
	else{
		if (checkSelected==1){
			for (var j=0; j<checks.length; j++){
				if (checks[j].checked == true){
					idLabel= "parametro"+j;
					campoLabel = document.getElementById(idLabel);
					textoLabel = $(campoLabel).text();
					var unParametro = obtenerParametro(textoLabel);
					var valorParam = obtenerValorParametro(textoLabel);
				}
			}
			var valorPorcentual = (parseFloat(valor) * parseFloat (valorParam))/100 ;
			var decimales = document.getElementById('selectDecimal').value;
			decimales = parseInt(decimales);
			valorPorcentual = valorPorcentual.toFixedDown(decimales);
			var unComponente = "[{\"ESQUEMA\":\""+nEsquema.toUpperCase()+"\",\"PERIODO\":\""+periodo+"\",\"VALOR\":\""+valorPorcentual+"\",\"PARAMETRO\":\""+unParametro+"\",\"VALOR_PARAMETRO\":\""+valorParam+"\"}]";
		}
		else{
			var decimales = document.getElementById('selectDecimal').value;
			decimales = parseInt(decimales);			
			valor = valor.toFixedDown(decimales);
			var unComponente = "[{\"ESQUEMA\":\""+nEsquema.toUpperCase()+"\",\"PERIODO\":\""+periodo+"\",\"VALOR\":\""+valor+"\",\"PARAMETRO\":\"No Aplica\",\"VALOR_PARAMETRO\":\"No Aplica\"}]";
		}		
	}

	return unComponente;	
}

//Funcion que muestra las operaciones disponibles para realizar con el campo IMP_RIESGO
function mostrarOperaciones(unLabel){
	var createField= document.createElement("SELECT");
	var selectField= document.createElement("SELECT");
	createField.name="selectOperacion";
	selectField.name="selectDivisor";
	createField.type="text";
	selectField.type="text";
	createField.setAttribute("onchange","muestraCampo(this.value);");
	var unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('---Elegir Operacion---'));
	createField.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('---Elegir campo Divisor---'));
	selectField.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('SUMA'));
	createField.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('MEDIA'));
	createField.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('CLIENTE'));
	selectField.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('CONTRATO'));
	selectField.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('PERIODO'));
	selectField.appendChild(unaOpc);
	unLabel.appendChild(createField);	
	unLabel.appendChild(selectField);
}

//Funcion que muestra u oculta el campo DIVISOR segun la opcion elegida por el usuario
function muestraCampo(valor){
	if (valor=='MEDIA'){
//Tomo el campo select con los DIVISORES						
		var campoSelect = document.getElementsByName("selectDivisor");
//Muestro el campo para que seleccione un valor como DIVISOR						
		campoSelect[0].style.display='';
	}
	else{
//Caso contrario, vuelvo a ocultar el campo SELECT						
		var campoSelect = document.getElementsByName("selectDivisor");
		campoSelect[0].style.display='none';	
	}	
}

//Funcion que retorna el Parametro(Indicador) que figura en el label pasado por parametro.
function obtenerParametro(texto){
	var posIni = texto.indexOf('Parametro:');
	var posFin = texto.indexOf('Porcentaje:');
	if (posIni==-1){
		var retornoParam = '';
	}
	else{
		var retornoParam = texto.substring(posIni+11,posFin-1);
	}
	return retornoParam;	
}

//Funcion que retorna el valor del Parametro(Indicador) que figura en el label pasado por parametro.
function obtenerValorParametro(texto){
	
	var posIni = texto.indexOf('Porcentaje:');
	var posFin = texto.indexOf('%');

	if (posIni==-1){
		var retornoVal = '';
	}
	else{
		var retornoVal = texto.substring(posIni+12,posFin);
	}
	return retornoVal;	
}

//Funcion que retorna el Componente que figura en el label pasado por parametro.
function obtenerComponenteLabel(texto){
	var posIni = texto.indexOf('Nombre del Componente:');
	if (posIni!=-1){
		var retornoCmp = texto.substring(posIni+23);
	}
	else{
		posIni = texto.indexOf('Nombre de la Metrica:');
		var retornoCmp = texto.substring(posIni+22);;
	}
	return retornoCmp;	
}

//Funcion que retorna true si el componente es metrica, false en caso contrario.
function componenteEsMetrica(texto){
	var retorno;
	var posIni = texto.indexOf('Nombre del Componente:');
	if (posIni!=-1){
		retorno=false;
	}
	else{
		retorno=true;
	}

	return retorno;	
}

//Funcion que retorna el valor del Componente pasado por parametro.
function obtenerValorComponente(componente){

	var data = httpGet('/componentes/buscar/'+componente);
	var valor;
	if (data.length > 0){				
		var objeto=JSON.parse(data);
		valor = objeto[0].VALOR;				
	}
	else{
		data = httpGet('/metricas/buscar/'+componente);		
		data = JSON.parse(data);
		var unJSON = JSON.parse(data);		
		valor = unJSON[0].valor;
	}
	return valor;
}

//Retorna un campo SELECT con las operaciones basicas para las Metricas.
function crearCampoSelectOp(){
	
	var selectOperacion = document.createElement("SELECT");
	selectOperacion.id="selectOp";
	selectOperacion.type="text";
	selectOperacion.setAttribute("onchange","muestraCampoOrden(this.value,this.form);");
	selectOperacion.setAttribute("onfocus","verificaCheckbox($('input[name=\"checkboxComponente\"]').filter(':checked').length,this);");
	var unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('---Elegir Operacion---'));
	selectOperacion.appendChild(unaOpc);			
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('SUMA'));
	selectOperacion.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('PRODUCTO'));
	selectOperacion.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('RESTA'));			
	selectOperacion.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('DIVISION'));
	selectOperacion.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('MAYOR'));
	selectOperacion.appendChild(unaOpc);	
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('MENOR'));
	selectOperacion.appendChild(unaOpc);	

	return selectOperacion;	
}

//Funcion que oculta la RESTA y la DIVISION si se seleccionan mas de dos componentes
function verificaCheckbox(cantCheck,campo){
	if (cantCheck > 2){
		//Oculto RESTA y luego DIVISION
		var opciones = document.getElementById('selectOp').getElementsByTagName("option");
		var indice = indexMatchingText(opciones,'RESTA');
		document.getElementById("selectOp").options[indice] = null;
		indice = indexMatchingText(opciones,'DIVISION');
		document.getElementById("selectOp").options[indice] = null;
	}
	else{
		if (document.getElementById("selectOp").options.length < 6){
			var unaOpc = document.createElement('option');
			unaOpc.appendChild(document.createTextNode('RESTA'));			
			campo.appendChild(unaOpc);
			unaOpc = document.createElement('option');
			unaOpc.appendChild(document.createTextNode('DIVISION'));
			campo.appendChild(unaOpc);	
		}
	}
}

//Funcion que retorna el resultado de la operacion dada por parametro entre el
//acumulado y el nuevo valor pasado por parametro.
function calcularOperacion(operacion,vComponentes){
	var resultado=0;
	switch (operacion){
		case "SUMA":
		for (var i in vComponentes){
			if(i!='unique'){
				resultado = resultado + parseFloat(vComponentes[i].VALOR);
			}
		}
		break;
		case "PRODUCTO":
		for (var i in vComponentes){
			if(i!='unique'){
				if(i==0){
					resultado = parseFloat(vComponentes[i].VALOR);
				}				
				else{					
					resultado= resultado * parseFloat(vComponentes[i].VALOR);
				}
			}
		}	
		break;
	}
	var decimales = document.getElementById('cantidadDecimal').value;
	decimales = parseInt(decimales);	
	return resultado.toFixedDown(decimales);
}

//Funcion que deja vacio el textArea pasado por parametro.
function resetTextArea(event){
	document.getElementById(event.data.p).value="";	
}

//Funcion que deja vacio el Formulario pasado por parametro.
function resetForm(event){
	var unForm=document.getElementById(event.data.p);
	while (unForm.hasChildNodes()){
		unForm.removeChild(unForm.childNodes[0]);
	}	
}

//Funcion que deja vacio el Formulario con los campos de la BD.
function resetFormularios(event){
	var unForm=document.getElementById(event.data.p);
	while (unForm.hasChildNodes()){
		unForm.removeChild(unForm.childNodes[0]);
	}
	unForm=document.getElementById(event.data.p2);
	while (unForm.hasChildNodes()){
		unForm.removeChild(unForm.childNodes[0]);
	}
	unForm=document.getElementById(event.data.p3);
	while (unForm.hasChildNodes()){
		unForm.removeChild(unForm.childNodes[0]);
	}
	unForm=document.getElementById(event.data.p4);
	while (unForm.hasChildNodes()){
		unForm.removeChild(unForm.childNodes[0]);
	}	
}

//Funcion que guarda en la BD el esquema editado por el usuario.
function almacenarNuevoEsquema(idEsquema){
	var esquema = "[";
	var campoLabel;
	var idLabel;
	var camposCheck = document.getElementsByName("aCheck");
	var textoLabel;
	var table;
	var column;
	var id;
	var valorDde,valorHta;
	var nombreEsquema = $("#nombreEsquema").val().toUpperCase();
	var indice = document.getElementById("selectPer").selectedIndex;
	var periodo = document.getElementById("selectPer").options[indice].text;
	
	// si el usuario no selecciono un periodo lo dejo en blanco
	if (periodo=='---Elegir Periodo---'){
		periodo='';
	}
	
	for (var i=0; i<camposCheck.length; i++) {
		if (camposCheck[i].checked == true){
			
			id = obtenerIDCampoCheck(camposCheck[i].id);
			idLabel= "unLabel"+id;
			campoLabel = document.getElementById(idLabel);
			textoLabel = $(campoLabel).text();
			table = obtenerTabla(textoLabel);
			column = obtenerCampo(textoLabel);

			if (column == 'SEGMENTO'|| column=='SUBSEGMENTO'||column == 'MARCA'|| column=='SUBMARCA'){
				valorDde = obtenerValor(id,column,textoLabel);
			}
			else{
				valorDde = $("#textInputDde"+id).val().toUpperCase();
				valorHta = $("#textInputHta"+id).val().toUpperCase();
			}

			if (esquema == "["){
				esquema = esquema+"{\"TABLE_NAME\":\""+table+"\",\"COLUMN_NAME\":\""+column+"\",\"PERIODO\":\""+periodo+"\",\"VALOR_DESDE\":\""+valorDde+"\",\"VALOR_HASTA\":\""+valorHta+"\"}";
			}
			else{
				esquema = esquema+",{\"TABLE_NAME\":\""+table+"\",\"COLUMN_NAME\":\""+column+"\",\"PERIODO\":\""+periodo+"\",\"VALOR_DESDE\":\""+valorDde+"\",\"VALOR_HASTA\":\""+valorHta+"\"}";
			}
			
		}
	}
	
	esquema = esquema + "]";

	$.put('/esquema/edit/'+nombreEsquema+'/'+esquema+'/'+idEsquema,function(data){
		alert (data.msg);
	});
}

//Funcion que edita un componente en la BD segun las especificaciones del usuario.
function almacenarNuevoComponente(idComp){
//Tomo el valor del nombre del componente	
	var nombreComp = $("#nombreComponente").val().toUpperCase();
//Tomo el campo select	
	var camposSelect = document.getElementsByName("selectOperacion");
//Armo un vector para almacenar las opciones elegidas.
	var vOpciones = [];
	
	for (var x in camposSelect){
		var indice = camposSelect[x].selectedIndex;
		if (typeof indice == 'number'){
			var opcion = camposSelect[x].options[indice].text;
			vOpciones.push(opcion);	
		}
	}
	var hayImp=false;
	var nroRegs=0;
	var valor = 0;
//Tomo el valor del nombre del esquema buscado por el usuario	
	var nombreEsquema = $("#datoEsquema2").val().toUpperCase();
//Busco ese esquema en la BD	
	var unEsquema=getEsquema(nombreEsquema);
//Tomo el valor de los checkbox de parametros
	var paramChecks = document.getElementsByName('checkboxInd');
//Recorro los JSONs obtenidos	
	for (var i in unEsquema){
		if (i!=='unique'){
//Si el IMP_RIESGO forma parte del esquema			
			if (unEsquema[i].COLUMN_NAME=='IMP_RIESGO'){
				hayImp = true;
//Calculo la suma o la media del IMP_RIESGO segun la seleccion del usuario				
				valor = calcularImpRiesgo(unEsquema,vOpciones[0]);			
			}
			var periodo = unEsquema[i].PERIODO;
		}
	}
//Almaceno los numeros de registros de ejecutar esa consulta			
		nroRegs = getTotalRegistros(nombreEsquema);	
//Si el IMP_RIESGO no forma parte del esquema,el valor a guardar es el del nro de
//registros de la ejecucion del esquema.	
	if (!hayImp){
		valor = nroRegs;
	}
//Armo el componente para ingresar en la BD	
	unComponente = armarComponente(nombreEsquema,valor,periodo,paramChecks);
	// si se selecciona mas de un parametro no continuo ejecutando la funcion
	if (unComponente==''){
		return;
	}
//Ingreso con un GET el componente en la BD con el nombre seleccionado por el usuario
	$.put('/componente/edit/'+unComponente+'/'+nombreComp+'/'+idComp,function(data){
		
		alert (data.msg);
	});
}

//Funcion que cambia el nombre del Componente pasado por parametro al usuario asociado.
function editarComponenteUsuario(componente){
	var username = $("#username").val();
	$.put('/componentes/user/edit/'+username+'/'+componente);
	
	if (username != 'admin'){
		$.put('/componentes/user/edit/admin/'+componente);
	}	
}

//Funcion que muestra por pantalla los Componentes y Metricas almacenados.
function listarComponentesyMetricas(){
	var username = $("#username").val();	
	var data= httpGet('/componentes/listar/'+username);
	var resComponentes = data;
	var i = 0;
	var unForm = document.getElementById("formulario31");
	if (resComponentes!=null&&resComponentes!=''){
		var vComponentes = data.split(',');
		for (j in vComponentes){
			if (j!='unique'){
				var createField= document.createElement("INPUT");
				createField.id="unCheck"+i;
				createField.type="checkbox";
				createField.name="checkboxComponente";			
				var label= document.createElement("LABEL");
				label.id="ListarCLabel"+i;
				label.innerHTML = "<u>Nombre del Componente:</u> "+vComponentes[j]+"<br>";						
				unForm.appendChild(createField);
				unForm.appendChild(label);
				i++;					
			}
		}
	}	

	data= httpGet('/metricas/listar/'+username);
	var resMetricas = data;
	if (resMetricas!=null&&resMetricas!=''){
		var vMetricas = data.split(',');
		for (j in vMetricas){
			if (j!='unique'){
				var createField= document.createElement("INPUT");
				createField.id="unCheck"+i;
				createField.type="checkbox";
				createField.name="checkboxComponente";			
				var label= document.createElement("LABEL");
				label.id="ListarCLabel"+i;				
				label.innerHTML = "<u>Nombre de la Metrica:</u> "+vMetricas[j]+"<br>";						
				unForm.appendChild(createField);
				unForm.appendChild(label);
				i++;
			}
		}	
	}
	
	if ((resComponentes!=null||resMetricas!=null)&&(resComponentes!=''||resMetricas!='')){
		var label = document.createElement("LABEL");
		label.innerHTML = "<br><b>OPERACION:</b>";
		unForm.appendChild(label);		
		var selectOperacion = crearCampoSelectOp();
		var selectOrden = crearCampoDeOrden(unForm);
		unForm.appendChild(selectOperacion);
		unForm.appendChild(selectOrden);		
		label = document.createElement("LABEL");
		label.innerHTML = "<br><br><b>Cantidad de decimales a guardar:</b>";
		unForm.appendChild(label);
		var seleccion= document.createElement("SELECT");
		seleccion.id="cantidadDecimal";	
		seleccion.type="text";
		for (var i=0;i<6 ;i++){
			var unaOpc = document.createElement('option');
			unaOpc.appendChild(document.createTextNode(i));
			seleccion.appendChild(unaOpc);
		}
		unForm.appendChild(seleccion);
	}
}

//Funcion que retorna el tamano de un objeto.
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

//Funcion que edita en la BD la Metrica creada por el usuario.
function almacenarNuevaMetrica(idMetrica){
	
	var campoLabel;
	var idLabel;
	var camposCheck = document.getElementsByName("checkboxComponente");
	var checkboxes = $('input[name="checkboxComponente"]');
    var checkSelected = checkboxes.filter(':checked').length;
	var operacion = document.getElementById("selectOp").value;
	var nombreMetrica = $("#nombreMetri").val().toUpperCase();
	var textoLabel;
	var unComponente;
	var unaMetrica = "[";
	var paramChecks = document.getElementsByName('checkboxParam');
	var checkParam = $('input[name="checkboxParam"]');
    var checkParamSelected = checkParam.filter(':checked').length;
	
	if (checkParamSelected >1){
		alert('Solo puede asociar un parametro a la Metrica.');
		return;
	}
	else{
		if (checkParamSelected==1){
			for (var j=0; j<paramChecks.length; j++){
				if (paramChecks[j].checked == true){
					idLabel= "parametroMetrica"+j;
					campoLabel = document.getElementById(idLabel);
					textoLabel = $(campoLabel).text();
					var unParametro = obtenerParametro(textoLabel);
					var valorParam = parseFloat(obtenerValorParametro(textoLabel));
				}
			}						
		}
		else{
			var valorParam = 0;
		}		
	}	
	
	for (var j=0; j<camposCheck.length; j++){
		if (camposCheck[j].checked == true){
			idLabel= "ListarCLabel"+j;
			campoLabel = document.getElementById(idLabel);
			textoLabel = $(campoLabel).text();
			unComponente = obtenerComponenteLabel(textoLabel);
			var valor = obtenerValorComponente(unComponente);
			if (valorParam == 0){
				if (unaMetrica == "["){
					unaMetrica = unaMetrica+"{\"COMPONENTE\":\""+unComponente+"\",\"VALOR\":\""+valor+"\",\"PARAMETRO\":\"No Aplica\",\"VALOR_PARAMETRO\":\"No Aplica\"}";
				}
				else{
					unaMetrica = unaMetrica+",{\"COMPONENTE\":\""+unComponente+"\",\"VALOR\":\""+valor+"\",\"PARAMETRO\":\"No Aplica\",\"VALOR_PARAMETRO\":\"No Aplica\"}";
				}				
			}
			else{
				if (unaMetrica == "["){
					unaMetrica = unaMetrica+"{\"COMPONENTE\":\""+unComponente+"\",\"VALOR\":\""+valor+"\",\"PARAMETRO\":\""+unParametro+"\",\"VALOR_PARAMETRO\":\""+valorParam+"\"}";
				}
				else{
					unaMetrica = unaMetrica+",{\"COMPONENTE\":\""+unComponente+"\",\"VALOR\":\""+valor+"\",\"PARAMETRO\":\""+unParametro+"\",\"VALOR_PARAMETRO\":\""+valorParam+"\"}";
				}				
			}
	
		}
	}
	unaMetrica = unaMetrica + "]";
	var vJSON = JSON.parse(unaMetrica);
	var resultado = 0;
	if (checkSelected==1){
		resultado = valor;
		operacion = 'No Aplica';
	}
	else{
		if(operacion == 'MAYOR'){
			var mayor = calcularComponenteMayor(vJSON);
			var vRetorno = obtenerComponenteoMetrica(mayor.COMPONENTE);
			if (esComponente(mayor.COMPONENTE)){
				unComponente = JSON.parse(vRetorno[0].componente);
				if(valorParam !=0){
					unaMetrica = "[{\"COMPONENTE\":\""+mayor.COMPONENTE+"\",\"VALOR\":\""+unComponente[0].VALOR+"\",\"PARAMETRO\":\""+unParametro+"\",\"VALOR_PARAMETRO\":\""+valorParam+"\"}]";
				}
				else{
					unaMetrica = "[{\"COMPONENTE\":\""+mayor.COMPONENTE+"\",\"VALOR\":\""+unComponente[0].VALOR+"\",\"PARAMETRO\":\"No Aplica\",\"VALOR_PARAMETRO\":\"No Aplica\"}]";
				}
				resultado = parseFloat(unComponente[0].VALOR);
			}
			else{
				if(valorParam !=0){
					unaMetrica = "[{\"COMPONENTE\":\""+mayor.COMPONENTE+"\",\"VALOR\":\""+mayor.VALOR+"\",\"PARAMETRO\":\""+unParametro+"\",\"VALOR_PARAMETRO\":\""+valorParam+"\"}]";
				}
				else{
					unaMetrica = "[{\"COMPONENTE\":\""+mayor.COMPONENTE+"\",\"VALOR\":\""+mayor.VALOR+"\",\"PARAMETRO\":\"No Aplica\",\"VALOR_PARAMETRO\":\"No Aplica\"}]";
				}
				resultado = parseFloat(mayor.VALOR);
			}			
		}
		else{
			if (operacion == 'MENOR'){
				var menor = calcularComponenteMenor(vJSON);
				var vRetorno = obtenerComponenteoMetrica(menor.COMPONENTE);
				if (esComponente(menor.COMPONENTE)){
					unComponente = JSON.parse(vRetorno[0].componente);
					if (valorParam !=0){
						unaMetrica = "[{\"COMPONENTE\":\""+menor.COMPONENTE+"\",\"VALOR\":\""+unComponente[0].VALOR+"\",\"PARAMETRO\":\""+unParametro+"\",\"VALOR_PARAMETRO\":\""+valorParam+"\"}]";
					}
					else{
						unaMetrica = "[{\"COMPONENTE\":\""+menor.COMPONENTE+"\",\"VALOR\":\""+unComponente[0].VALOR+"\",\"PARAMETRO\":\"No Aplica\",\"VALOR_PARAMETRO\":\"No Aplica\"}]";
					}
					resultado = parseFloat(unComponente[0].VALOR);
				}
				else{
					if (valorParam !=0){
						unaMetrica = "[{\"COMPONENTE\":\""+menor.COMPONENTE+"\",\"VALOR\":\""+menor.VALOR+"\",\"PARAMETRO\":\""+unParametro+"\",\"VALOR_PARAMETRO\":\""+valorParam+"\"}]";
					}
					else{
						unaMetrica = "[{\"COMPONENTE\":\""+menor.COMPONENTE+"\",\"VALOR\":\""+menor.VALOR+"\",\"PARAMETRO\":\"No Aplica\",\"VALOR_PARAMETRO\":\"No Aplica\"}]";
					}
					
					resultado = parseFloat(menor.VALOR);
				}					
			}
			else{
				if(checkSelected<3){
					var ordenOperacion = document.getElementById('selectOrdenformulario31').value;
					for (var k in vJSON){
						if(k!='unique'){
							if(k!=0){
								resultado = calcularOperacionConOrden(ordenOperacion,operacion,vJSON);
							}
						}
					}
				}
				else{
					resultado = calcularOperacion(operacion,vJSON);
				}				
			}
		}		
	}
	
	if (valorParam!=0){
		resultado = (resultado * valorParam) / 100;
	}	
	
	var decimales = document.getElementById('cantidadDecimal').value;
	decimales = parseInt(decimales);
	resultado = resultado.toFixedDown(decimales);
	
	$.put('/metricas/edit/'+nombreMetrica+'/'+unaMetrica+'/'+resultado+'/'+operacion+'/'+idMetrica,function(data){
		alert (data.msg);
	});		
}

//Funcion para crear el metodo PUT en Jquery
function _ajax_request(url, callback, method) {
    return jQuery.ajax({
        url: url,
        type: method,
        success: callback
    });
}
jQuery.extend({
	put: function(url, callback) {
	return _ajax_request(url, callback, 'PUT');
}});
jQuery.extend({
	delete: function(url, callback) {
	return _ajax_request(url, callback, 'DELETE');
}});

//Funcion que asigna el esquema segun el usuario con permisos para verlo.
function guardarEsquemaUsuario(unEsquema){
	var username = $("#username").val();
	$.put('/esquemas/user/set/'+username+'/'+unEsquema,function(error){

	});
	if (username != 'admin'){
		$.put('/esquemas/user/set/admin/'+unEsquema);
	}	
}

//Funcion que asigna el componente segun el usuario con permisos para verlo.
function guardarComponenteUsuario(unCompo){
	var username = $("#username").val();
	$.put('/componentes/user/set/'+username+'/'+unCompo,function(error){

	});
	if (username != 'admin'){
		$.put('/componentes/user/set/admin/'+unCompo);
	}	
}

//Funcion que asigna la metrica segun el usuario con permisos para verlo.
function guardarMetricaUsuario(unaMetrica){
	var username = $("#username").val();
	$.put('/metricas/user/set/'+username+'/'+unaMetrica,function(error){

	});
	if (username != 'admin'){
		$.put('/metricas/user/set/admin/'+unaMetrica);
	}	
}

//Funcion que valida si el usuario pasado por parametro tiene permisos para utilizar
//el esquema pasado tambien por parametro.
function validarPermisosEsquema(esquema,username){
	
	if (username == 'admin'){
		return true;
	}
	
	var data= httpGet('/esquemas/listar/'+username);
	if(data.length>0){
		if (data[0].esquemas!=null){			
			var vEsquemas =data[0].esquemas.split(',');			
			for (i in vEsquemas){
				if (i!='unique'){
					if (esquema == vEsquemas[i].toUpperCase()){
						return true;
					}				
				}
			}
			return false;
		}
		else{
			return false;
		}
	}
	else{
		return false;
	}
}

//Funcion que valida si el usuario pasado por parametro tiene permisos para utilizar
//el componente pasado tambien por parametro.
function validarPermisosComponente(componente,username){

	if (username == 'admin'){
		return true;
	}
	
	var data= httpGet('/componentes/listar/'+username);
	if(data.length>0){
		if (data[0].componentes!=null){
			var vComponentes =data[0].componentes.split(',');			
			for (i in vComponentes){
				if (i!='unique'){
					if (componente == vComponentes[i].toUpperCase()){
						return true;
					}				
				}
			}
			return false;
		}
		else{
			return false;
		}
	}
	else{
		return false;
	}
}

//Funcion que valida si el usuario pasado por parametro tiene permisos para utilizar
//la metrica pasada tambien por parametro.
function validarPermisosMetrica(metrica,username){

	if (username == 'admin'){
		return true;
	}
	
	var data= httpGet('/metricas/listar/'+username);
	if(data.length>0){
		if (data[0].metricas!=null){
			var vMetricas =data[0].metricas.split(',');			
			for (i in vMetricas){
				if (i!='unique'){
					if (metrica == vMetricas[i].toUpperCase()){
						return true;
					}				
				}
			}
			return false;
		}
		else{
			return false;
		}
	}
	else{
		return false;
	}
}

// Leer los datos GET de nuestra pagina y devolver un array asociativo 
//(Nombre de la variable GET => Valor de la variable).
function getUrlVars(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++){
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

//Funcion que parsea la URL pasada por parametro para obtener el usuario logueado al
//sistema
function obtenerUsuarioUrl(unaUrl){

	var posIni = unaUrl.indexOf('http://hidalgo.chat/inicio/');
	if (posIni!=-1){
		var retorno = unaUrl.substring(posIni+27);
	}
	else{
		var retorno = '';
	}
	return retorno;	
}

//Funcion que muestra u oculta el campo de orden de las operaciones
function muestraCampoOrden(valor,unFormulario){

	switch (valor){
		case "RESTA":			
			var campoOrden = document.getElementById("selectOrden"+unFormulario.id);
			campoOrden.style.display = "inline";
			if (campoOrden.options.length > 4){
				//No es codigo duplicado, oculto dos veces la opcion de la pos 3 del vector.
				campoOrden.options[3] = null;	
				campoOrden.options[3] = null;
			}
			else{
				campoOrden.options[1] = null;	
				campoOrden.options[1] = null;
				var unaOpc = document.createElement('option');
				unaOpc.appendChild(document.createTextNode('COMPONENTE 1 - COMPONENTE 2'));			
				campoOrden.appendChild(unaOpc);
				unaOpc = document.createElement('option');
				unaOpc.appendChild(document.createTextNode('COMPONENTE 2 - COMPONENTE 1'));
				campoOrden.appendChild(unaOpc);				
			}	
		break;
		case "DIVISION":
			var campoOrden = document.getElementById("selectOrden"+unFormulario.id);
			campoOrden.style.display = "inline";
			if (campoOrden.options.length > 4){
				//No es codigo duplicado, oculto dos veces la opcion de la pos 1 del vector.
				campoOrden.options[1] = null;	
				campoOrden.options[1] = null;				
			}
			else{
				campoOrden.options[1] = null;	
				campoOrden.options[1] = null;
				var unaOpc = document.createElement('option');
				unaOpc.appendChild(document.createTextNode('COMPONENTE 1 / COMPONENTE 2'));			
				campoOrden.appendChild(unaOpc);
				unaOpc = document.createElement('option');
				unaOpc.appendChild(document.createTextNode('COMPONENTE 2 / COMPONENTE 1'));
				campoOrden.appendChild(unaOpc);					
			}	
		break;
		default:
			var campoOrden = document.getElementById("selectOrden"+unFormulario.id);
			campoOrden.style.display = "none";
			if(campoOrden.options.length < 4){
				//No es codigo duplicado, vacio el array de opciones.
				campoOrden.options[1] = null;	
				campoOrden.options[1] = null;			
				var unaOpc = document.createElement('option');
				unaOpc.appendChild(document.createTextNode('COMPONENTE 1 - COMPONENTE 2'));			
				campoOrden.appendChild(unaOpc);
				unaOpc = document.createElement('option');
				unaOpc.appendChild(document.createTextNode('COMPONENTE 2 - COMPONENTE 1'));
				campoOrden.appendChild(unaOpc);
				unaOpc = document.createElement('option');
				unaOpc.appendChild(document.createTextNode('COMPONENTE 1 / COMPONENTE 1'));
				campoOrden.appendChild(unaOpc);	
				unaOpc = document.createElement('option');
				unaOpc.appendChild(document.createTextNode('COMPONENTE 2 / COMPONENTE 1'));
				campoOrden.appendChild(unaOpc);					
			}		
	}	
}

//Funcion que retorna el resultado de la operacion dada por parametro entre el
//acumulado y el nuevo valor pasado por parametro segun el orden dado.
function calcularOperacionConOrden(orden,operacion,vComponentes){
	var resultado=0;
	switch (operacion){
		case "RESTA":
			if (orden == 'COMPONENTE 1 - COMPONENTE 2'){
				resultado = parseFloat(vComponentes[0].VALOR)-parseFloat(vComponentes[1].VALOR);			
			}
			else{
				resultado = parseFloat(vComponentes[1].VALOR)-parseFloat(vComponentes[0].VALOR);
			}			
		break;
		case "DIVISION":
			if (orden == 'COMPONENTE 1 / COMPONENTE 2'){
				if (parseFloat(vComponentes[1].VALOR)!=0){
					resultado = parseFloat(vComponentes[0].VALOR)/parseFloat(vComponentes[1].VALOR);
				}
				else{
					resultado = 0;
				}	
			}
			else{
				if (parseFloat(vComponentes[0].VALOR)!=0){
					resultado = parseFloat(vComponentes[1].VALOR)/parseFloat(vComponentes[0].VALOR);
				}
				else{
					resultado = 0;
				}	
			}
		break;
		case "SUMA":
		for (var i in vComponentes){
			if(i!='unique'){
				resultado = resultado + parseFloat(vComponentes[i].VALOR);
			}
		}
		break;
		case "PRODUCTO":
		for (var i in vComponentes){
			if(i!='unique'){
				if(i==0){
					resultado = parseFloat(vComponentes[i].VALOR);
				}				
				else{					
					resultado= resultado * parseFloat(vComponentes[i].VALOR);
				}
			}
		}	
		break;		
	}
	var decimales = document.getElementById('cantidadDecimal').value;
	decimales = parseInt(decimales);	
	return resultado.toFixedDown(decimales);
}

//Funcion que lista los usuarios creados en el sistema.
function listarUsuarios(){
	var i = 0;
	var unForm = document.getElementById("formulario33");
	data= httpGet('/usuarios/listar/');
	
	if (data!=null&&data!=''){
		for (var n in data){
			if(n!=='unique'){
				var label= document.createElement("LABEL");
				label.id="usersLabel"+i;				
				label.innerHTML = "<u>Usuario</u>: <b>"+data[n]+"</b><br>";						
				unForm.appendChild(label);
				i++;			
			}		
		}			
	}	
}

//Funcion que lista los usuarios creados en el sistema para asignar componentes.
function listarUsuariosComponentes(){
	var i = 0;
	var unForm = document.getElementById("formulario23");
	data= httpGet('/usuarios/listar/');
	
	if (data!=null&&data!=''){
		for(var n in data){
			if(n!=='unique'){
				var label= document.createElement("LABEL");
				label.id="usersLabel"+i;				
				label.innerHTML = "<u>Usuario</u>: <b>"+data[n]+"</b><br>";						
				unForm.appendChild(label);
				i++;		
			}
		}
	}	
}

//Funcion que lista los usuarios creados en el sistema para asignar extractores.
function listarUsuariosExtractores(){
	var i = 0;
	var unForm = document.getElementById("formulario14");
	data= httpGet('/usuarios/listar/');
	
	if (data!=null&&data!=''){
		for(var n in data){
			if(n!=='unique'){
				var label= document.createElement("LABEL");
				label.id="usersLabel"+i;				
				label.innerHTML = "<u>Usuario</u>: <b>"+data[n]+"</b><br>";						
				unForm.appendChild(label);
				i++;					
			}
		}			
	}	
}

//Funcion que retorna el objeto componente o metrica segun el nombre que se pasa por parametro.
function obtenerComponenteoMetrica(nombre){
	
	var datos = httpGet('/componentes/buscar/'+nombre);	
	var tam = datos.length;
	if (tam !== 'undefined' && tam>0){
		datos = JSON.parse(datos);
	}			

	if(datos[0]==null||datos[0]==''){
		datos = httpGet('/metricas/buscar/'+nombre);
	}
	return datos;
}

//Funcion que determina si el valor obtenido es una metrica o un componente.
function esComponente(nombre){
	
	var datos = httpGet('/componentes/buscar/'+nombre);
	if(datos.length > 0){
		return true;
	}
	else{
		return false;
	}
}

//Funcion que crear los botones de SELECT ALL y SELECT NONE
function crearBotonesSeleccion(){
	var unDiv = document.createElement('DIV');
	unDiv.id = 'divisorSelect';
	var botonAll = document.createElement("INPUT");
	botonAll.id = 'selectAll';
	botonAll.type = 'button';
	botonAll.value = 'SELECT ALL';
	var botonNone = document.createElement("INPUT");
	botonNone.id = 'selectNone';
	botonNone.type = 'button';				
	botonNone.value = 'SELECT NONE';				
	var formulario = document.getElementById('formulario');
	unDiv.appendChild(botonAll);
	unDiv.appendChild(botonNone);
	formulario.appendChild(unDiv);
	var unDiv = document.createElement('DIV');
	unDiv.id = 'divisorSelect';	
	botonAll = document.createElement("INPUT");
	botonAll.id = 'selectAll1';
	botonAll.type = 'button';
	botonAll.value = 'SELECT ALL';
	botonNone = document.createElement("INPUT");
	botonNone.id = 'selectNone1';
	botonNone.type = 'button';				
	botonNone.value = 'SELECT NONE';	
	var formulario1 = document.getElementById('formulario1');
	unDiv.appendChild(botonAll);
	unDiv.appendChild(botonNone);
	formulario1.appendChild(unDiv);
	var unDiv = document.createElement('DIV');
	unDiv.id = 'divisorSelect';		
	botonAll = document.createElement("INPUT");
	botonAll.id = 'selectAll2';
	botonAll.type = 'button';
	botonAll.value = 'SELECT ALL';
	botonNone = document.createElement("INPUT");
	botonNone.id = 'selectNone2';
	botonNone.type = 'button';				
	botonNone.value = 'SELECT NONE';		
	var formulario2 = document.getElementById('formulario2');
	unDiv.appendChild(botonAll);
	unDiv.appendChild(botonNone);
	formulario2.appendChild(unDiv);
	var unDiv = document.createElement('DIV');
	unDiv.id = 'divisorSelect';	
	botonAll = document.createElement("INPUT");
	botonAll.id = 'selectAll3';
	botonAll.type = 'button';
	botonAll.value = 'SELECT ALL';
	botonNone = document.createElement("INPUT");
	botonNone.id = 'selectNone3';
	botonNone.type = 'button';				
	botonNone.value = 'SELECT NONE';	
	var formulario3 = document.getElementById('formulario3');
	unDiv.appendChild(botonAll);
	unDiv.appendChild(botonNone);
	formulario3.appendChild(unDiv);
}

//Funcion que crear los botones de SELECT ALL y SELECT NONE para Aprovisionadores
function crearBotonesSeleccionCubos(){
	var unDiv = document.createElement('DIV');
	unDiv.id = 'divisorSelect';
	var botonAll = document.createElement("INPUT");
	botonAll.id = 'selectAllCubos';
	botonAll.type = 'button';
	botonAll.value = 'SELECT ALL';
	var botonNone = document.createElement("INPUT");
	botonNone.id = 'selectNoneCubos';
	botonNone.type = 'button';				
	botonNone.value = 'SELECT NONE';				
	var formulario = document.getElementById('cubosForm11');
	unDiv.appendChild(botonAll);
	unDiv.appendChild(botonNone);
	formulario.appendChild(unDiv);
	
}

//Funcion que genera las acciones a realizar ante cada boton select all  y select none.
function generarAccionesBotones(){
	var x=$("#selectAll");
	x.click(selectAllCheckboxFormulario);
	x=$("#selectAll1");
	x.click(selectAllCheckboxFormulario1);
	x=$("#selectAll2");
	x.click(selectAllCheckboxFormulario2);
	x=$("#selectAll3");
	x.click(selectAllCheckboxFormulario3);		
	x=$("#selectNone");
	x.click(selectNoneFormulario);	
	x=$("#selectNone1");
	x.click(selectNoneFormulario1);	
	x=$("#selectNone2");
	x.click(selectNoneFormulario2);
	x=$("#selectNone3");
	x.click(selectNoneFormulario3);	
}

//Funcion que genera las acciones a realizar ante cada boton select all  y select none de aprovisionadores.
function generarAccionesBotonesCubos(){
	var x=$("#selectAllCubos");
	x.click(selectAllCheckboxCubos);		
	x=$("#selectNoneCubos");
	x.click(selectNoneCubos);	
	
}

//Funcion que selecciona todos los checkboxes del formulario.
function selectAllCheckboxFormulario(){	
	var vCheckBoxes = document.getElementById('formulario').aCheck;
	
	for (var i in vCheckBoxes){
		vCheckBoxes[i].checked = true;
	}
}

//Funcion que selecciona todos los checkboxes del formulario de aprovisionadores.
function selectAllCheckboxCubos(){	
	var vCheckBoxes = document.getElementById('cubosForm11').cubosCheckboxs;
	
	for (var i in vCheckBoxes){
		vCheckBoxes[i].checked = true;
	}
}

//Funcion que selecciona todos los checkboxes del formulario1.
function selectAllCheckboxFormulario1(){
	var vCheckBoxes = document.getElementById('formulario1').aCheck;
	
	for (var i in vCheckBoxes){
		vCheckBoxes[i].checked = true;
	}
}

//Funcion que selecciona todos los checkboxes del formulario2.
function selectAllCheckboxFormulario2(){
	var vCheckBoxes = document.getElementById('formulario2').aCheck;
	
	for (var i in vCheckBoxes){
		vCheckBoxes[i].checked = true;
	}
}

//Funcion que selecciona todos los checkboxes del formulario3.
function selectAllCheckboxFormulario3(){
	var vCheckBoxes = document.getElementById('formulario3').aCheck;
	
	for (var i in vCheckBoxes){
		vCheckBoxes[i].checked = true;
	}
}


//Funcion que quita la seleccion de todos los checkboxes de formulario de aprovisionadores.
function selectNoneCubos(){
	var vCheckBoxes = document.getElementById('cubosForm11').cubosCheckboxs;
	
	for (var i in vCheckBoxes){
		vCheckBoxes[i].checked = false;
	}	
}

//Funcion que quita la seleccion de todos los checkboxes de formulario.
function selectNoneFormulario(){
	var vCheckBoxes = document.getElementById('formulario').aCheck;
	
	for (var i in vCheckBoxes){
		vCheckBoxes[i].checked = false;
	}	
}

//Funcion que quita la seleccion de todos los checkboxes de formulario1.
function selectNoneFormulario1(){
	var vCheckBoxes = document.getElementById('formulario1').aCheck;
	
	for (var i in vCheckBoxes){
		vCheckBoxes[i].checked = false;
	}	
}

//Funcion que quita la seleccion de todos los checkboxes de formulario2.
function selectNoneFormulario2(){
	var vCheckBoxes = document.getElementById('formulario2').aCheck;
	
	for (var i in vCheckBoxes){
		vCheckBoxes[i].checked = false;
	}	
}

//Funcion que quita la seleccion de todos los checkboxes de formulario3.
function selectNoneFormulario3(){
	var vCheckBoxes = document.getElementById('formulario3').aCheck;
	
	for (var i in vCheckBoxes){
		vCheckBoxes[i].checked = false;
	}	
}

//Funcion que crea y retorna el campo de orden para las operaciones de division y resta.
function crearCampoDeOrden(unFormulario){
	var campoSelect = document.createElement("SELECT");
	campoSelect.id="selectOrden"+unFormulario.id;
	campoSelect.type="text";
	campoSelect.style.display = "none";
	var unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('---Elegir Orden---'));
	campoSelect.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('COMPONENTE 1 - COMPONENTE 2'));
	campoSelect.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('COMPONENTE 2 - COMPONENTE 1'));			
	campoSelect.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('COMPONENTE 1 / COMPONENTE 2'));
	campoSelect.appendChild(unaOpc);
	unaOpc = document.createElement('option');
	unaOpc.appendChild(document.createTextNode('COMPONENTE 2 / COMPONENTE 1'));			
	campoSelect.appendChild(unaOpc);

	return campoSelect;
}

//Funcion que obtiene el indice de la opcion indicada en el campo select.
function indexMatchingText(ele, text) {
    for (var i=0; i<ele.length;i++) {
        if (ele[i].childNodes[0].nodeValue === text){
            return i;
        }
    }
    return undefined;
}

//Funcion que retorna el nombre del componente con mayor valor entre los pasados por parametro.
function calcularComponenteMayor(vComponentes){
	var mayor = vComponentes[0];
	for (var i in vComponentes){
		if(i!='unique'){			
			if(parseFloat(vComponentes[i].VALOR) > parseFloat(mayor.VALOR)){
				mayor = vComponentes[i];
			}
		}
	}
	return mayor;
}

//Funcion que retorna el nombre del componente con menor valor entre los pasados por parametro.
function calcularComponenteMenor(vComponentes){
	var menor = vComponentes[0];
	for (var i in vComponentes){
		if(i!='unique'){			
			if(parseFloat(vComponentes[i].VALOR) < parseFloat(menor.VALOR)){
				menor = vComponentes[i];
			}
		}
	}
	return menor;
}

//Funcion que elimina los botones de SELECT ALL Y SELECT NONE de los formularios vacios
function eliminarBotonesSeleccion(){
	
	var formulario = document.getElementById('formulario').children.length;
	var formulario1 = document.getElementById('formulario1').children.length;
	var formulario2 = document.getElementById('formulario2').children.length;
	var formulario3 = document.getElementById('formulario3').children.length;
	
	if(formulario < 2){
		var unForm = document.getElementById('formulario');
		unForm.removeChild(unForm.childNodes[0]);	
	}
	
	if(formulario1 < 2){
		var unForm = document.getElementById('formulario1');
		unForm.removeChild(unForm.childNodes[0]);		
	}

	if(formulario2 < 2){
		var unForm = document.getElementById('formulario2');
		unForm.removeChild(unForm.childNodes[0]);		
	}

	if(formulario3 < 2){
		var unForm = document.getElementById('formulario3');
		unForm.removeChild(unForm.childNodes[0]);		
	}	
}

//Funcion que retorna el ID del label pasado por parametro
function obtenerIDAprovisionador(texto){
	var posIni = texto.indexOf('Ap')+2;
	var retornoID = texto.substring(posIni);
	return parseInt(retornoID);
}

//Funcion que retorna el ID del label pasado por parametro
function obtenerIDExtractor(texto){
	var posIni = texto.indexOf('Ext')+3;
	var retornoID = texto.substring(posIni);
	return parseInt(retornoID);
}

//Funcion que retorna el ID del label pasado por parametro
function obtenerIDComponente(texto){
	var posIni = texto.indexOf('Compo')+5;
	var retornoID = texto.substring(posIni);
	return parseInt(retornoID);
}

//Funcion que retorna el ID del label pasado por parametro
function obtenerIDMetrica(texto){
	var posIni = texto.indexOf('Metri')+5;
	var retornoID = texto.substring(posIni);
	return parseInt(retornoID);
}

//Funcion que retorna el ID del label pasado por parametro
function obtenerIDUserAp(texto){
	var posIni = texto.indexOf('Ap')+2;
	var retornoID = texto.substring(posIni,posIni+1);
	return parseInt(retornoID);
}

//Funcion que retorna el ID del label pasado por parametro
function obtenerIDUserExt(texto){
	var posIni = texto.indexOf('Ext')+3;
	var retornoID = texto.substring(posIni,posIni+1);
	return parseInt(retornoID);
}

//Funcion que retorna el ID del label pasado por parametro
function obtenerIDUserComp(texto){
	var posIni = texto.indexOf('Compo')+5;
	var retornoID = texto.substring(posIni,posIni+1);
	return parseInt(retornoID);
}

//Funcion que retorna el ID del label pasado por parametro
function obtenerIDUserMet(texto){
	var posIni = texto.indexOf('Metri')+5;
	var retornoID = texto.substring(posIni,posIni+1);
	return parseInt(retornoID);
}