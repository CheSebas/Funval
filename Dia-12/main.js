// let permisoMama = false;
// let permisoPapa = true;
// edad = 28;
// if (edad >= 18) {
//   if (permisoMama || permisoPapa) {
//     console.log("puedo salir a bailar");
//   } else {
//     console.log("me quedo en casa");
//   }
// } else {
//   console.log("me quedo en casa");
// }

// // Refactorizar codigo

// let permisoMama = false;
// let permisoPapa = true;
// let edad = 28;

// // Se combinó la verificación de edad y los permisos en una sola condición lógica usando &&
// if (edad >= 18 && (permisoMama || permisoPapa)) {
//   console.log("puedo salir a bailar");
// } else {
//   console.log("me quedo en casa");
// }

// Usando operador ternario
let permisoMama = false;
let permisoPapa = true;
let edad = 28;

let mensaje =
  edad >= 18 && (permisoMama || permisoPapa) ? "puedo salir a bailar" : "me quedo en casa";

console.log(mensaje);

// El usuario va ingresar su fecha de nacimiento dia, el mes y el año
// ustedes deberan decirle cuantos dias tiene de vida nacio el 1 de julio de 2025
// vivio 15 dias ustedes deberan tener en cuenta años bisiestos y febrero

// Fecha de nacimiento
let dia = 6;
let mes = 3;
let anio = 2025;

// Fecha actual fija
let diaActual = 15;
let mesActual = 7;
let anioActual = 2025;

// Verificar si el año es bisiesto
let esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;

// Días vividos en el mes de nacimiento
let diasVividos = 0;

switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    diasVividos = 31 - dia;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    diasVividos = 30 - dia;
    break;
  case 2:
    diasVividos = (esBisiesto ? 29 : 28) - dia;
    break;
  default:
    console.log("Mes inválido");
    break;
}

// Si está en el mismo mes y año, simplemente restamos días
if (anio === anioActual && mes === mesActual) {
  diasVividos = diaActual - dia;
}

console.log("Días vividos:", diasVividos);

// Numeros pares
// REALIZAR LA SERIE DE LOS NUMEROS PARES
// SI EL CLIENTE COLOCA EL NUMERO 5
// 2,4,6,8,10
// SI EL CLIENTE COLOCA EL NUMERO 3
// 2,4,6

// let cantidad = 10;

// let resultado = "";

// for (let i = 1; i <= cantidad; i++) {
//   resultado += i * 2;
//   if (i < cantidad) {
//     resultado += ", ";
//   }
// }

// console.log(resultado);

// REALIZAR LA MULTIPLICACION DE 2 NUMEROS INGRESADOS X EL CLIENTE
// REGLA: NO PUEDEN UTILIZAR NI EL SIMBOLO / NI EL * DE SOLO PODRAN USAR EL SIMBOLO DE LA SUMA

// let numero1 = 4;
// let numero2 = 4;

// let resultado = 0;

// for (let i = 0; i < numero2; i++) {
//   resultado += numero1;
// }

// console.log(`El resultado de ${numero1} x ${numero2} es: ${resultado}`);

// Dado un numero cualquiera encontrar su factorial
// 5!=1*2*3*4*5= 120

// let numero = 2;

// let factorial = 1;

// for (let i = 1; i <= numero; i++) {
//   factorial *= i;
// }

// console.log(`El factorial de ${numero} es: ${factorial}`);

// MOSTRAR LOS N TERMINOS DE LA SERIE FIBONACCI
// 0,1,1,2,3,5,8,13,21

// let n = 10;
// let a = 0;
// let b = 1;
// let siguiente;
// let i = 0;
// let resultado = "";

// while (i < n) {
//   resultado += a + (i < n - 1 ? ", " : "");
//   siguiente = a + b;
//   a = b;
//   b = siguiente;
//   i++;
// }

// console.log(`Serie Fibonacci: ${resultado}`);

// GENERAR LA SERIE DE LOS NUMEROS PRIMOS ESTA SERIE SE CARACTERIZA
// X Q UN NUMERO PRIMO ES AQUEL Q SOLO ES DIVISIBLE ENTRE 1 Y EL MISMO DE LA CANTIDAD N Q INGRESE EL CLIENTE
// N=6
// 2,3,5,7,11,13
// N=2
// 2,3
// N=5
// 2,3,5,7,11

let n = 6;
let contador = 0;
let numero = 2;
let resultado = "";

for (; contador < n; numero++) {
  let esPrimo = true;

  // Verifica si el número actual es primo
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }

  if (esPrimo) {
    resultado += numero + (contador < n - 1 ? ", " : "");
    contador++;
  }
}

console.log(`Números primos: ${resultado}`);
