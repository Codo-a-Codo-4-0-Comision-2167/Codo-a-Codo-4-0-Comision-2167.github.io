// DEFINO CONSTANTES
const ENABLE_FIB_FOR = true;


function nombreDeMes(numeroMes) {

    var mensaje = "Error"; // Asigno valor por defecto...

    // Espero numeros de 1 a 12... 
    // Si llega otra cosa devuelve mensaje de error...
    switch (numeroMes) {
        case 1:
            mensaje = "Enero"
            break;
        case 2:
            mensaje = "Febrero"
            break;
        case 3:
            mensaje = "Marzo"
            break;
        case 4:
            mensaje = "Abril"
            break;
        case 5:
            mensaje = "Mayo"
            break;
        case 6:
            mensaje = "Junio"
            break;
        case 7:
            mensaje = "Julio"
            break;
        default:
            break;
    }

    return mensaje;

}


/**
 * Chequea la edad minima, en este caso 18 años..
 * @param {Number} parametro 
 * @returns 
 */
function calcularEdadMinima(parametro) {

    if (parametro >= 18) {
        console.log("Cumple con la edad minima...")
    } else {
        console.log("No cumple con la edad minima...");
        return false;
    }

    return true;
}


function fibonacci(numero) {
    var fibNumber = -1;

    if ( numero == 0) {
        fibNumber = 0;
    } else if ( numero == 1) {
        fibNumber = 1;
    } else {
        // El numero de fibonnaci (n) = fibonacci (n-1) + fibonacci(n-2)
        fibNumber = fibonacci(numero - 1) + fibonacci(numero - 2);

        // Como convierto mi fibonacci a un for
        /*for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }*/
    }

    return fibNumber;
}


function fibonacciFOR(numero) {
    return numero;
}



var myFuncionFib = function (numero) {
    var fibNumber = -1;

    if ( numero == 0) {
        fibNumber = 0;
    } else if ( numero == 1) {
        fibNumber = 1;
    } else {
        // El numero de fibonnaci (n) = fibonacci (n-1) + fibonacci(n-2)
        fibNumber = fibonacci(numero - 1) + fibonacci(numero - 2);

        // Como convierto mi fibonacci a un for
        /*for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }*/
    }

    return fibNumber;
}


if(ENABLE_FIB_FOR) {
    myFuncionFib = (numero) => numero;
}


function myWorker(callFuncion) {

    var myInput = prompt("Ingrese numero...");

    return callFuncion(parseInt(myInput));
}

/*console.log(myWorker(function (numero) {
    return numero*2;
})); // Que creen que dara como output?


console.log(myWorker( (numero)  =>  numero*2 ));
*/
var myArrowFunction = (numero)  =>  numero*2 ; // A partir de ES6
var myAnonimousFunction = function (numero)  { return numero*2 } ;

