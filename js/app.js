console.log("Arranca la pagina... ahora desde un archivo js");

// o let
var soyUnaVariable = " Un string con comillas 'Esto es un string' " ; // Una cadena de caracteres

var soyUnNumeroEntero = -123131313; // Numeros enteros

var soyUnNumeroFlotante = 23.54; // Numero reales o con coma

const ESTO_ES_UNA_CONSTANTE = "Soy constante..."; // Una constante

const PI = 3.141528;

console.log(ESTO_ES_UNA_CONSTANTE + PI); // Usar log en la consola
console.log(PI)
console.log(Math.PI)
console.dir(document.body); // usar dir en la consola...

// Defini mi variable myInput y llame a una funcion prompt y le pase datos 
let myInput = 18//prompt("Ingrese su edad..."); // Esto captura string

console.log(myInput);

myInput = Number.parseInt(myInput) // Vuelvo a asignar un valor a la misma variable
console.log("Cambie el valor de mi variable", myInput);

console.log("Mi valor fue un numero?" + Number.isInteger(myInput) )


calcularEdadMinima(myInput); // Invoque a la funcion...
calcularEdadMinima(myInput);
calcularEdadMinima(myInput);
calcularEdadMinima(myInput);
if ( calcularEdadMinima(myInput)) {
    console.log("Lo dejo ingresar a la pagina...")
}
