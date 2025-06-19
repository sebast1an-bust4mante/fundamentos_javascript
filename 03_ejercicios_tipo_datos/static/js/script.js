// Declaración de variables
let edad = 18; //Valor numerico Edad
let anioDeNacimiento = 25; //Tipo numérico INT
let numeroEuler= 2.71828; //Numérico con parte decimal FLOAT
let malChiste = "una sandia fantasma"; // string
let valorBooleano = true; //Valor verdadero o falso(0 , 1) Boolean
let arreglito = [1, 2, 3, true, ["hola"]]; //Array - Lista de elementos []
let mostrarUsuario = { nombre: "soka", edad: 18, correo:"xxxxgmail.com" }; //Object - Diccionario {}
let mostrarIndefinid; //Sin valor asignado - undefined
let estadoAmoroso = null; // Valor Nulo - Null
const mes = "Junio"; //Constante - No Varía

// Funciones para mostrar cada valor con alert()
function mostrarNumeroEntero() {
  alert("Número entero: " + anioDeNacimiento);
}

function mostrarNumeroDecimal() {
  alert("Número decimal: " + numeroEuler);
}

function mostrarCadenaTexto() {
  alert("Cadena de texto: " + malChiste);
}

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
  alert("Arreglo de números: " + arreglito);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(mostrarUsuario));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + mostrarIndefinid);
}

function mostrarNulo() {
  alert("Valor nulo: " + estadoAmoroso);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}
