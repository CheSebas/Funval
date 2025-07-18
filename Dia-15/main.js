/* las notas de un estudiante de funval estn dentro de un array
ejemplo:
let notas =[32,100,25,78]
let notas =[32,100,10,8,0]
let notas =[32]
let notas =[32,77]
realizar una funcion q reciba un array y nos retorne el promedio de las notas de un estudiante
*/

// function calcularPromedio(notas) {
//   let suma = 0;

//   for (let i = 0; i < notas.length; i++) {
//     suma += notas[i];
//   }

//   let promedio = suma / notas.length;

//   return promedio;
// }

// let notas1 = [20,20,10,15];
// let notas2 = [32, 100, 10, 8, 0];
// let notas3 = [32];
// let notas4 = [32, 77];

// console.log("Promedio 1:", calcularPromedio(notas1));
// console.log("Promedio 2:", calcularPromedio(notas2));
// console.log("Promedio 3:", calcularPromedio(notas3));
// console.log("Promedio 4:", calcularPromedio(notas4));

// ================================

// let matriz = [
//   [28, 39, 90, 89],
//   [70, 32, 28, 18],
//   [10, 0, 15, 31],
//   [11, 23, 45, 67],
// ];
// /* realizar la suma y mostrar el total de la diagonal principal pero usando un solo for */
// let sumaDiagonal = 0;

// for (let i = 0; i < matriz.length; i++) {
//   sumaDiagonal += matriz[i][i];
// }

// console.log("Suma de la diagonal principal:", sumaDiagonal);

// // Diagonal Secundaria

// let sumaDiagonalSecundaria = 0;
// let j = matriz.length - 1;

// for (let i = 0; i < matriz.length; i++) {
//   sumaDiagonalSecundaria += matriz[i][j];
//   j--;
// }

// console.log("Suma de la diagonal secundaria:", sumaDiagonalSecundaria);

// ================================

let listaEstudiantes = [
  {
    nombre: "kevin",
    edad: 28,
    nacionalidad: "Bolivia",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [11, 23, 45, 67],
  },
  {
    nombre: "Pablo",
    edad: 33,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 12322876454n,
    notas: [99, 80, 100, 10],
  },
  {
    nombre: "Yamila",
    edad: 22,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 112894789123479812n,
    notas: [77, 99, 51, 80],
  },
  {
    nombre: "Sebastian",
    edad: 25,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [0, 10, 0, 100],
  },
  {
    nombre: "jeff",
    edad: 34,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [100, 90, 99, 88],
  },
];

// Función para calcular el promedio de notas
function promedio(notas) {
  let suma = notas.reduce((acum, nota) => acum + nota, 0);
  return suma / notas.length;
}

// Mostrar estudiantes con promedio mayor o igual a 65
for (let index = 0; index < listaEstudiantes.length; index++) {
  let promedioEstudiante = promedio(listaEstudiantes[index].notas);
  if (promedioEstudiante >= 65) {
    console.log(`${listaEstudiantes[index].nombre} tiene un promedio de ${promedioEstudiante}`);
  }
}

// Mostrar estudiantes que son de Argentina
for (let i = 0; i < listaEstudiantes.length; i++) {
  if (listaEstudiantes[i].nacionalidad === "Argentina") {
    console.log(`${listaEstudiantes[i].nombre} es de Argentina`);
  }
}
