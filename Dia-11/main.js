/* Conecptos Basicos */

// 1. Escribe un comentario en una línea
// Este es un comentario de una sola línea

// 2. Escribe un comentario en varias líneas
/*
Este es un comentario
de varias líneas en JavaScript
sirve para explicar más cosas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let miString = "Hola mundo";
let miNumero = 42;
let miBooleano = true;
let miUndefined;
let miNull = null;
let miBigInt = 123456789012345678901234567890n;
let miSimbolo = Symbol("simbolo");

// 4. Imprime por consola el valor de todas las variables
console.log("miString:", miString);
console.log("miNumero:", miNumero);
console.log("miBooleano:", miBooleano);
console.log("miUndefined:", miUndefined);
console.log("miNull:", miNull);
console.log("miBigInt:", miBigInt);
console.log("miSimbolo:", miSimbolo);

// 5. Imprime por consola el tipo de todas las variables
console.log("typeof miString:", typeof miString);
console.log("typeof miNumero:", typeof miNumero);
console.log("typeof miBooleano:", typeof miBooleano);
console.log("typeof miUndefined:", typeof miUndefined);
console.log("typeof miNull:", typeof miNull);
console.log("typeof miBigInt:", typeof miBigInt);
console.log("typeof miSimbolo:", typeof miSimbolo);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
miString = "Adiós mundo";
miNumero = 100;
miBooleano = false;
miUndefined = undefined;
miNull = null;
miBigInt = 99999999999999999999n;
miSimbolo = Symbol("nuevoSimbolo");

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
miString = 12345;
miNumero = "Ahora es un string";
miBooleano = "true";
miUndefined = null;
miNull = "valor nulo";
miBigInt = 88;
miSimbolo = "ya no es símbolo";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const constString = "Constante string";
const constNumero = 3.14;
const constBooleano = false;
const constUndefined = undefined;
const constNull = null;
const constBigInt = 99999999999999999999999n;
const constSimbolo = Symbol("constSymbol");

// 9. A continuación, modifica los valores de las constantes
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// constString = "Nuevo valor";
// constNumero = 42;
// constBooleano = true;
// constUndefined = "definido";
// constNull = "no es nulo";
// constBigInt = 123n;
// constSimbolo = Symbol("otro");

/*OPERADORES LOGICOS  */

// 1. Crea una variable para cada operación aritmética
let suma = 10 + 5;
let resta = 20 - 3;
let multiplicacion = 4 * 6;
let division = 25 / 5;
let modulo = 10 % 3;
let potencia = 2 ** 3;

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas
let x = 10;

x += 5;
x -= 3;
x *= 2;
x /= 4;
x %= 4;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(10 > 5);
console.log(7 <= 7);
console.log("5" == 5);
console.log(3 !== 4);
console.log(6 === 6);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(10 < 5);
console.log(7 > 9);
console.log("5" === 5);
console.log(3 == "4");
console.log(6 !== 6);

// 5. Utiliza el operador lógico and
let edad = 20;
let esEstudiante = true;

console.log(edad >= 18 && esEstudiante);

// 6. Utiliza el operador lógico or
let tieneLicencia = false;
let permisoEspecial = true;

console.log(tieneLicencia || permisoEspecial);

// 7. Combina ambos operadores lógicos
let nota = 17;
let asistencia = 90;

console.log((nota >= 14 && asistencia >= 80) || nota === 20);

// 8. Añade alguna negación
let registrado = false;

console.log(!registrado);

// 9. Utiliza el operador ternario
let edadPersona = 16;
let mensaje = edadPersona >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(mensaje);

// 10. Combina operadores aritméticos, de comparáción y lógicas
let a = 10;
let b = 5;
let resultadoFinal = (a + b > 10 && a - b < 10) || a * b === 50;

console.log(resultadoFinal);

// Utilizando el operador ternario determinar si una variable de
// tipo usuario y de tipo password coinciden con admin y 123456
// si el login es correcto mostrar datos correctos si el login falla
// en alguno de ambos o en ambos mostrar datos incorrectos

// Declaración de variables
let usuario = "admin";
let password = "123456";

// Verificación con operador ternario
let mensaje1 =
  usuario === "admin" && password === "123456" ? "Datos correctos" : "Datos incorrectos";

// Mostrar resultado
console.log(mensaje1);
