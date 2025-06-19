// Uso de strings Ejemplo

let nombre = "Sebastian"; // Variable tipo texto
let apellido = "Bustamante";
// Uso de lenght --> Largo de una variable
function usarString() {
    let nombre = prompt("ingrese cualquier Nombre: ")
    let primeraLetra = nombre[0]; // Asignamos valor a primeraLetra con posición 0 de nombre
    let ultimaLetra = nombre[nombre.length - 1];
    alert("Primera letra es: " + primeraLetra + "\nÚltima letra es " + ultimaLetra); // Mostrar resultado
}
// Tarea: Imprimir segunda letra y penultima de el apellido

function manipularApellido() {
    let apellido = prompt("Ingrese cualquier Apellido: ")
    let segundaLetraApellido = apellido[1]; // Segunda letra del apellido
    let penultimaLetraApellido = apellido[nombre.length - 1]; // Penúltima letra del apellido
    apellido[0] = "P"; // No se puede modificar porque es inmutable - No funciona
    alert("Segunda letra es: " + segundaLetraApellido + "\nPenúltima letra es " + penultimaLetraApellido);
}