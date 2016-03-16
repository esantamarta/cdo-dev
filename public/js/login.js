var x=$(document);
x.ready(inicio);

//Funcion inicial que lee los eventos ejecutados por el usuario por pantalla.					
function inicio(){
	var x=$("#enter");
	x.click(comprobarUsuario);
}

function comprobarUsuario(){

	var username = $("#username").val();
	if (username!=''){
		$.getJSON('/login/'+username,function(result){

			if (result.msg=='ERROR_LOGIN'){
				alert('Usuario incorrecto o inexistente. Intentelo nuevamente.');
			}
			else{
				window.location.replace('http://hidalgo.chat/inicio/'+username);
			}		
		});
	}
	else{
		alert('Debe ingresar un Usuario valido para continuar.');
	}
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

//Funcion para realizar un GET sincronico, el GET de Jquery es asincronico
function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}