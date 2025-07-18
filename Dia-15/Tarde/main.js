// let estudiantes = [
//   { nombre: "kevin", pais: "Bolivia" },
//   { nombre: "Pablo", pais: "Argentina" },
//   { nombre: "Geraldine", pais: "Peru" },
//   { nombre: "Gabriel", pais: "Argentina" },
//   { nombre: "Mario", pais: "Argentina" },
// ];

// let contenedor = document.querySelector("#contenedor-estudiantes");
// let boton = document.querySelector("#btn-argentinos");

// function mostrarEstudiantes(lista) {
//   contenedor.innerHTML = "";
//   for (let i = 0; i < lista.length; i++) {
//     contenedor.innerHTML += `
//       <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
//         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${lista[i].nombre}</h5>
//         <p class="font-normal text-gray-700 dark:text-gray-400">País de origen: ${lista[i].pais}</p>
//       </a>
//     `;
//   }
// }

// mostrarEstudiantes(estudiantes);

// // Mostrar solo los de Argentina
// boton.addEventListener("click", function () {
//   let argentinos = [];
//   for (let i = 0; i < estudiantes.length; i++) {
//     if (estudiantes[i].pais === "Argentina") {
//       argentinos.push(estudiantes[i]);
//     }
//   }
//   mostrarEstudiantes(argentinos);
// });

/*  Mostrar todos los productos en una lista.

Cada producto debe mostrar:

Nombre

Precio

Stock disponible

Botón "Comprar"*/

const productos = [
  { id: 1, nombre: "Helado de vainilla", precio: 10, stock: 3 },
  { id: 2, nombre: "Helado de chocolate", precio: 12, stock: 0 },
  { id: 3, nombre: "Helado de fresa", precio: 11, stock: 2 },
  { id: 4, nombre: "Helado de limón", precio: 9, stock: 1 },
];

let contenedor = document.getElementById("contenedor-productos");
let listaCompras = document.getElementById("lista-compras");
let totalCompraElemento = document.getElementById("total-compra");

let total = 0;
// Mostrar
function mostrarProductos() {
  contenedor.innerHTML = "";

  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    contenedor.innerHTML += `
      <div class="bg-white shadow-md rounded-lg p-4 border">
        <h2 class="text-xl font-semibold mb-2">${producto.nombre}</h2>
        <p>Precio: $${producto.precio}</p>
        <p>Stock: <span id="stock-${producto.id}">${producto.stock}</span></p>
        <button 
          class="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onclick="comprarProducto(${producto.id})"
          ${producto.stock === 0 ? "disabled class='mt-3 px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed'" : ""}
        >
          Comprar
        </button>
      </div>
    `;
  }
}
// Comprar
function comprarProducto(id) {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === id) {
      if (productos[i].stock > 0) {
        productos[i].stock--;
        agregarALista(productos[i]);
        alert(`¡Compraste: ${productos[i].nombre}!`);
      } else {
        alert("¡Producto agotado!");
      }
    }
  }

  mostrarProductos();
}
// Lista
function agregarALista(producto) {
  let item = document.createElement("li");
  item.classList.add("border-b", "pb-2");
  item.textContent = `${producto.nombre} - $${producto.precio}`;
  listaCompras.appendChild(item);

  total += producto.precio;
  totalCompraElemento.textContent = total;
}

mostrarProductos();
