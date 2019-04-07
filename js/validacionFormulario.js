
function validarNombre(){
  var validarNombre = document.getElementById('nombre').value;

  if (validarNombre==""){
      alert("Falto campo Nombre por completar");
      return false;
    }
}

function validarApellido(){
  var apellido = document.getElementById('apellido').value;

  if (apellido ==""){
    alert("Falto campo Apellido por completar");
    return false;
  }
}

function validarSelectCiudad(){

  if (document.form.ciudad.value =='Seleccione una ciudad' ) {
      alert("Faltó seleccionar una ciudad");
      return false;
  }
}

function validarCorreo(valor){
  var correo = document.getElementById('correo').value;
  var expresionRegular = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if (expresionRegular.test(valor)) {
    alert("Falta campo Correo por llenar");
    return false;
  }
}

function validarRadioButton(){
  var radio1 = document.getElementById('si').checked;
  var radio2 = document.getElementById('no').checked;

  if ((radio1=="") && (radio2=="")) {
    alert("Seleccion una opcion si desea que le enviemos noticias");
  }
  return false;
}
