'use strict'

// Espero recibir un string de la funcion 
// a la cual le paso un numero como parametro
var mes = nombreDeMes(1);
if (mes !== "Enero") {
    alert("Prueba fallida con mes Enero")
}

var mes = nombreDeMes(2);
if (mes !== "Febrero") {
    alert("Prueba fallida con mes Febrero")
}

var mes = nombreDeMes(3);
if (mes !== "Marzo") {
    alert("Prueba fallida con mes Marzo")
}

var mes = nombreDeMes(7);
if (mes !== "Julio") {
    alert("Prueba fallida con mes Julio")
}


var mes = nombreDeMes(-1);
if (mes === "Error") {
    console.log("Prueba exitosa, devuelve Error porque le pasamos -1")
} else {
    alert("Prueba fallida, no devuelve Error")
}


var serieFib = fibonacci(0);
if (serieFib != 0) {
    alert("Error en Fibonacci de 0")
}

var serieFib = fibonacci(1);
if (serieFib != 1) {
    alert("Error en Fibonacci de 1")
}

var serieFib = fibonacci(3);
if (serieFib != 2) {
    alert("Error en Fibonacci de 3")
}


//myFuncionFib(1);// No tengo idea que hay adentro... 

//myWorker(myFuncionFib);

//((numero) => numero * 2) () // Esto tiene un porque...

var myFirstString = "ESto es una cadea de texto" // <= esto es un string...
var mySecondString = String("ESto es una cadea de texto");
var myThirdString = new String("ESto es una cadea de texto");// Este solo es un objeto

console.log(typeof myFirstString, typeof mySecondString, typeof myThirdString);

String.prototype.myNewFunction = (numero) => numero * 2

console.log(myFirstString.length)
console.log(mySecondString.length)
console.log(myThirdString.length)

myThirdString.toUpperCase(); // Esto convierte el string todo a Mayuscula
console.log(myThirdString.myNewFunction(2))

// Numero, boleano, string, function...
var myArray = [121212, true, "Hola Mundo", (numero) => numero * 3];
myArray[0];// Siempre empieza por 0...

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)


let alumnos = ['Ale', 'Fabian', 'Marcelo', 'Diego', 'Carlitos', 'Marianela']

pos = 3;
n = 1;// Es 1 solo elemento

let bajaAlumno = alumnos.splice(pos, n)

console.log("El alumno que se dio de baja es: ", bajaAlumno)
console.log("Quedan estos alumnos", alumnos);

let alumnosFinal = alumnos.concat(bajaAlumno)

console.log("Lista final de alumnos", alumnosFinal)

alumnos.push(bajaAlumno[0]);
console.log("Lista final con la original", alumnos)


const notasAlumnos = [10, 4, 7, 9, 9, 10, 1, 3, 6, 8]

/*const asc = function (a, b) {
    return a - b;
};
const desc = function (a, b) {
    return b - a;
}*/
console.log("Las notas en orden ascendente son:", notasAlumnos.sort((a, b) => a - b));


for (let index = 0; index < alumnos.length; index++) {
    const element = alumnos[index];
    console.log("El elemento: ", index, " del Array es: ", element);
}

alumnos.forEach(element => console.log("El elemento es: ", element));

// que es el DOM.

document.write("<ul>");
alumnos.forEach(element => {
    document.write("<li>" + element + "</li>")
});
document.write("</ul>");

var forms = document.querySelectorAll('.needs-validation')

console.dir(forms);

for (var value of forms.values()) {
    console.log(value);
}

forms[0].addEventListener('submit', function (event) {

    event.preventDefault()
    event.stopPropagation()


    //form.classList.add('was-validated')
});