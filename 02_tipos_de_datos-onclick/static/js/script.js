// Declaración de variables
var num = 18; //menos segura
let numeroEntero = 25; //Tipo numérico INT
let numeroDecimal = 3.14; //Numérico con parte decimal FLOAT
let cadenaTexto = "Hola, mundo"; // string
let valorBooleano = true; //Valor verdadero o falso(0 , 1) Boolean
let arregloNumeros = [1, 2, 3, 4]; //Array - Lista de elementos
let objetoPersona = { nombre: "Ana", edad: 30 }; //Object - Diccionario
let valorIndefinido; //Sin valor asignado - undefined
let valorNulo = null; // Valor Nulo - Null
const mes = "Junio"; //Constante - No Varía

// Funciones para mostrar cada valor con alert()
function mostrarNumeroEntero() {
  alert("Número entero: " + numeroEntero);
}

function mostrarNumeroDecimal() {
  alert("Número decimal: " + numeroDecimal);
}

function mostrarCadenaTexto() {
  alert("Cadena de texto: " + cadenaTexto);
}

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
  alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}
