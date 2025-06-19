// Ejercicios Condiciones IF - ELSE
console.log("Conexión con js establecida...");

/* Edad para votar
Solicita la edad del usuario mediante prompt().
Muestra con alert() si puede votar
(18 años o más) o no
*/
function edadVotar() {
    let edad = parseInt(prompt("Ingrese su Edad: ")); // Input conversión string a número
    // Condicion if - else if - else
    if (edad >= 18) {
        alert("Su edad " + edad + " aprobada para votar.");
    } else if (edad >= 0 && edad < 18) { //&& compuerta AND
        alert("Su edad " + edad + " no esta aprobada para votar.");
    } else {
        alert("Ingrese un valor válido");
    }
};

/* Contraseña válida 
Pide una contraseña con prompt().
Si es igual a "1234", muestra un mensaje
de acceso permitido. En caso contrario, 
muestra acceso denegado
*/

function validarPassword() {
    let clave = "1234";
    let pass = prompt("Ingrese su contraseña: ");
    // Condición estructura if - else
    if (pass == clave) {
        alert("Acceso Permitido...");
    } else {
        alert("Acceso Denegado")
    }
};

// ejemplo de MOD --> modulo de división = resto
function parImpar() {
    let numero = parseInt(prompt("Ingresar un número"))
    if (numero % 2 == 0) {  //numero / 2 = resto;
        alert("Es par"); // es par
    } else {
        alert("Es impar") //impar
    }
};

/* Temperatura ambiental 
Solicita la temperatura actual. Si es mayor o
igual a 30, muestra "Hace calor", de lo contrario
muestra "Clima agradable"
*/

function temperaturaAmbiental() {
    let temperatura = parseInt(prompt("Ingresar Temperatura"));
    if (temperatura >= 30 && temperatura <= 50) {
        alert("Hace Calor")
    } else if (temperatura >= 15 && temperatura < 30) {
        alert("Agradable")
    } else if (temperatura >= -5 && temperatura <= 15) {
        alert("Hace frío")
    } else {
        alert("Ingrese un valor válido")
    }
};

/* Comparar dos números 
Solicita dos núneros al usuario.
Compara ambos y muestra cuál es mayor o si son iguales
*/

function compararNumeros() {
    let num1 = parseInt(prompt("Ingresar primer número"));
    let num2 = parseInt(prompt("Ingresar segundo número"));
    if (num1 < num2) {
        alert("El numero " + num1 + " es menor que " + num2);
    } else if (num1 == num2) {
        alert("El numero " + num1 + " es igual que " + num2);
    } else {
        alert("El numero " + num1 + " es mayor que " + num2);
    }
};

/* */

function note() {
    let ingresa = parseInt(prompt("Ingresa tu nota: "));

    if (ingresa < 4) {
        alert("Desaprobado");
    } else if (ingresa >= 4 && ingresa <= 7) {
        alert("Aprobado")
    } else {
        alert("por favor, ingrese un valor valido");
    }
};

function usuarioAdmin(){
    let usu = parseInt(prompt("Ingrese usuario"))
    if (usu == "admin"){
        alert("Bienvenido, Administrador")
    } else {
        alert("Usuario no reconocido")
    }
}

/* pida una palabra al usuario. 
Verifica si empieza con la letra "A" mayuscula
*/

function palabraMayuscula(){
    let letra = prompt("Ingresa palabra")
    let letraA = "A";
    if (letra[0] == letraA) {
        alert("La palabra comienza con A mayuscula")
    } else {
        alert("la palabra no comienza con A mayuscula")
    }
}