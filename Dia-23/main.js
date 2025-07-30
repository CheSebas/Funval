// Ejemplo de Sincronia
// console.log("Inicio");

// function tareaSincrona() {
//   console.log("Tarea en proceso...");
// }

// tareaSincrona();

// console.log("Fin");

// Ejemplo de Asincronia
// console.log("Inicio");

// function tareaAsincrona() {
//   setTimeout(() => {
//     console.log("Asincronia en proceso...");
//   }, 2000);
// }

// tareaAsincrona();

// console.log("Fin");

/* ---------------Ejercicio-------------- */
let estudiantes = [
  {
    nombre: "Yamila",
    edad: 21,
    notas: [34, 77, 45, 78],
  },
  {
    nombre: "Gabriel",
    edad: 24,
    notas: [90, 44, 55, 9],
  },
  {
    nombre: "Jefferson",
    edad: 18,
    notas: [100, 10, 0, 100],
  },
  {
    nombre: "Pablo",
    edad: 33,
    notas: [31, 22, 45, 78],
  },
];

// CREANDO UNA PROMESA
const listaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cumplido = true;
    if (cumplido) {
      resolve(estudiantes);
    } else {
      reject("el servidor esta caido");
    }
  }, 5000);
});

//  deberan consumir esta promesa para obtener el listado de los estudiantes una vez tengan el listado de estudiantes
//  deberan mostrar con inerHTML o createElement EN SU WEB la lista de todos los estudiantes aprobados se considera aprobado cuando
//  el promedio del estudiante es de 51pts pueden mostrarlo usando cards listas tablas etc.

// CONSUMO DE LA PROMESA Y MOSTRAR ESTUDIANTES APROBADOS
listaEstudiantes
  .then((data) => {
    document.getElementById("loader").style.display = "none";

    const contenedor = document.getElementById("aprobados");

    data.forEach((est) => {
      const promedio = est.notas.reduce((acc, n) => acc + n, 0) / est.notas.length;

      if (promedio >= 51) {
        const card = document.createElement("div");
        card.className = "bg-white rounded-lg shadow-md p-6 w-full max-w-sm border border-gray-200";
        card.innerHTML = `
          <h3 class="text-xl font-semibold text-blue-700 mb-2">${est.nombre}</h3>
          <p class="text-gray-700"><strong>Edad:</strong> ${est.edad}</p>
          <p class="text-gray-700"><strong>Notas:</strong> ${est.notas.join(", ")}</p>
          <p class="text-gray-700"><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>
          <p class="text-green-600 font-semibold mt-2">Aprobado</p>
        `;
        contenedor.appendChild(card);
      }
    });
  })
  .catch((err) => {
    document.getElementById("aprobados").innerHTML = `
      <p class="text-red-600 font-bold">${err}</p>`;
  });
