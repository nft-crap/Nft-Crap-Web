var iframeCode = '<iframe class="overflow-scroll" src="https://gateway.ipfscdn.io/ipfs/QmQpHkDDWGJPBHFKkpX1DsfzvwZXQYNVoaW4R1Lhenp6T5/bundledrop.html?contract=0x82237B50Ef5Fe10Eb82aAe0672326703898f75ac&chainId=137&tokenId=0" width="700px" height="450px" style="max-width:100%; margin-top: 100px;" frameborder="0" scrolling="yes"></iframe>';

function validarRespuestas() {

  console.log('En validar index');

  // Obtener las respuestas ingresadas por el usuario
  var respuesta1 = document.getElementById("respuesta1").value;
  var respuesta2 = document.getElementById("respuesta2").value;

  // Verificar si las respuestas son correctas (aquí puedes colocar las respuestas que esperas)
  if (respuesta1 === "respuesta1" && respuesta2 === "respuesta2") {
    // Ocultar el mensaje de error si estaba visible
    document.getElementById("mensajeError").style.display = "none";

    // Mostrar el código del iframe en la página
    document.getElementById("myForm").innerHTML = iframeCode;
  } else {
    // Si las respuestas son incorrectas, mostrar el mensaje de error y mantener el formulario
    document.getElementById("mensajeError").style.display = "block";
  }
}




// Definir arreglo de títulos de libros correctos
const titulosCorrectos = ["Título libro 1", "Título libro 2"];

function validarRespuestasArray() {
  // Obtener valor de cada caja de texto
  const respuesta1 = document.getElementById("respuesta1").value.trim();
  const respuesta2 = document.getElementById("respuesta2").value.trim();

  // Almacenar respuestas en un arreglo
  const respuestasUsuario = [respuesta1, respuesta2];

  // Ordenar el arreglo de respuestas del usuario
  respuestasUsuario.sort();

  // Comparar los arreglos de respuestas del usuario y respuestas correctas
  if (JSON.stringify(respuestasUsuario) === JSON.stringify(titulosCorrectos)) {
    // Ocultar el mensaje de error si estaba visible
    document.getElementById("mensajeError").style.display = "none";
    // Si las respuestas son correctas, mostrar código HTML deseado
    document.getElementById("myFormArray").innerHTML = iframeCode;
  } else {
    // Si las respuestas son incorrectas, mostrar el mensaje de error y mantener el formulario
    document.getElementById("mensajeError").style.display = "block";
  }
}


function validarRespuestasHorus() {

  console.log('En validar HOrus');

  // Obtener las respuestas ingresadas por el usuario
  var respuesta1 = document.getElementById("respuesta1").value;
 
  // Verificar si las respuestas son correctas (aquí puedes colocar las respuestas que esperas)
  if (respuesta1 === "decypher += char") {
    // Ocultar el mensaje de error si estaba visible
    document.getElementById("mensajeError").style.display = "none";

    // Mostrar el código del iframe en la página
    document.getElementById("myForm").innerHTML = iframeCode;
  } else {
    // Si las respuestas son incorrectas, mostrar el mensaje de error y mantener el formulario
    document.getElementById("mensajeError").style.display = "block";
  }
}

function validate_neith() {
  /*
  const inputs = document.querySelectorAll("#neith_form");
  const respuestas = ["zohar", "amduat", "kybalion", "picatrix", "anacalypsis"];
  const respuestasUsuario = [];
  inputs.forEach(input => {
    respuestasUsuario.push(input.value.toString().toLowerCase());
  });

  */
  const respuestasCorrectas = ["zohar", "amduat", "kybalion", "picatrix", "anacalypsis"];

  const respuesta1 = document.getElementById("quest_1").value.toString().toLowerCase().trim();
  const respuesta2 = document.getElementById("quest_2").value.toString().toLowerCase().trim();
  const respuesta3 = document.getElementById("quest_3").value.toString().toLowerCase().trim();
  const respuesta4 = document.getElementById("quest_4").value.toString().toLowerCase().trim();
  const respuesta5 = document.getElementById("quest_5").value.toString().toLowerCase().trim();

  // Almacenar respuestas en un arreglo
  const respuestasUsuario = [respuesta1, respuesta2, respuesta3, respuesta4, respuesta5];


  if (JSON.stringify(respuestasCorrectas.sort()) === JSON.stringify(respuestasUsuario.sort())) {

    // Ocultar el mensaje de error si estaba visible
    document.getElementById("mensajeError").style.display = "none";

    // Mostrar el código del iframe en la página
    document.getElementById("neith_form").innerHTML = iframeCode;
  } else {

    // Si las respuestas son incorrectas, mostrar el mensaje de error y mantener el formulario
    document.getElementById("mensajeError").style.display = "block";
  }
}


function validate_horus() {

  const respuestasCorrectas = ["10"];

  const respuesta1 = document.getElementById("quest_1").value.toString().toLowerCase().trim();

  // Almacenar respuestas en un array
  const respuestasUsuario = [respuesta1];


  if (JSON.stringify(respuestasCorrectas.sort()) === JSON.stringify(respuestasUsuario.sort())) {

    // Ocultar el mensaje de error si estaba visible
    document.getElementById("mensajeError").style.display = "none";

    // Mostrar el código del iframe en la página
    document.getElementById("horus_form").innerHTML = iframeCode;
  } else {

    // Si las respuestas son incorrectas, mostrar el mensaje de error y mantener el formulario
    document.getElementById("mensajeError").style.display = "block";
  }
}


function validate_anubis() {

  const respuestasCorrectas = ["4"];

  const respuesta1 = document.getElementById("quest_1").value.toString().toLowerCase().trim();

  // Almacenar respuestas en un array
  const respuestasUsuario = [respuesta1];


  if (JSON.stringify(respuestasCorrectas.sort()) === JSON.stringify(respuestasUsuario.sort())) {

    // Ocultar el mensaje de error si estaba visible
    document.getElementById("mensajeError").style.display = "none";

    // Mostrar el código del iframe en la página
    document.getElementById("horus_form").innerHTML = iframeCode;
  } else {

    // Si las respuestas son incorrectas, mostrar el mensaje de error y mantener el formulario
    document.getElementById("mensajeError").style.display = "block";
  }
}

function validate_thoth() {

  const respuestasCorrectas = ["the black cat", "the raven", "the oval portrait", "the fall of the house of usher", "the premature burial"];

  const respuesta1 = document.getElementById("quest_1").value.toString().toLowerCase().trim();
  const respuesta2 = document.getElementById("quest_2").value.toString().toLowerCase().trim();
  const respuesta3 = document.getElementById("quest_3").value.toString().toLowerCase().trim();
  const respuesta4 = document.getElementById("quest_4").value.toString().toLowerCase().trim();
  const respuesta5 = document.getElementById("quest_5").value.toString().toLowerCase().trim();

  // Almacenar respuestas en un arreglo
  const respuestasUsuario = [respuesta1, respuesta2, respuesta3, respuesta4, respuesta5];


  if (JSON.stringify(respuestasCorrectas.sort()) === JSON.stringify(respuestasUsuario.sort())) {

    // Ocultar el mensaje de error si estaba visible
    document.getElementById("mensajeError").style.display = "none";

    // Mostrar el código del iframe en la página
    document.getElementById("neith_form").innerHTML = iframeCode;
  } else {

    // Si las respuestas son incorrectas, mostrar el mensaje de error y mantener el formulario
    document.getElementById("mensajeError").style.display = "block";
  }
}


function validate_isis() {

  const respuestasCorrectas = ["necklace", "plane", "watch", "bottle", "shoe"];

  const respuesta1 = document.getElementById("quest_1").value.toString().toLowerCase().trim();
  const respuesta2 = document.getElementById("quest_2").value.toString().toLowerCase().trim();
  const respuesta3 = document.getElementById("quest_3").value.toString().toLowerCase().trim();
  const respuesta4 = document.getElementById("quest_4").value.toString().toLowerCase().trim();
  const respuesta5 = document.getElementById("quest_5").value.toString().toLowerCase().trim();

  // Almacenar respuestas en un arreglo
  const respuestasUsuario = [respuesta1, respuesta2, respuesta3, respuesta4, respuesta5];


  if (JSON.stringify(respuestasCorrectas.sort()) === JSON.stringify(respuestasUsuario.sort())) {

    // Ocultar el mensaje de error si estaba visible
    document.getElementById("mensajeError").style.display = "none";

    // Mostrar el código del iframe en la página
    document.getElementById("neith_form").innerHTML = iframeCode;
  } else {

    // Si las respuestas son incorrectas, mostrar el mensaje de error y mantener el formulario
    document.getElementById("mensajeError").style.display = "block";
  }
}


/*
var horus_form = document.getElementById("horus_form");
var horus_answers = ["decypher += char"]
if (horus_form !== null) {
  horus_form.addEventListener("submit", function(event) {
    event.preventDefault();
    validate_answers(horus_form, horus_answers);
  });
}
*/

var form_general = document.getElementById("myForm");
if (form_general !== null) {
  form_general.addEventListener("submit", function(event) {
    event.preventDefault();
    validarRespuestas();
  });
}


var neith_form = document.getElementById("neith_form");
if (neith_form !== null) {
  neith_form.addEventListener("submit", function(event) {
    event.preventDefault();
    validate_neith();
  });
}

var horus_form = document.getElementById("horus_form");
if (horus_form !== null) {
  horus_form.addEventListener("submit", function(event) {
    event.preventDefault();
    validate_horus();
  });
}



var thoth_form = document.getElementById("thoth_form");
if (thoth_form !== null) {
  thoth_form.addEventListener("submit", function(event) {
    event.preventDefault();
    validate_thoth();
  });
}

var isis_form = document.getElementById("isis_form");
if (isis_form !== null) {
  isis_form.addEventListener("submit", function(event) {
    event.preventDefault();
    validate_isis();
  });
}

var anubis_form = document.getElementById("anubis_form");
if (anubis_form !== null) {
  anubis_form.addEventListener("submit", function(event) {
    event.preventDefault();
    validate_anubis();
  });
}

var sacmis_form = document.getElementById("sacmis_form");
if (sacmis_form !== null) {
  sacmis_form.addEventListener("submit", function(event) {
    event.preventDefault();
    sacmis_form.innerHTML = iframeCode;
  });
}