const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla Gamer", precio: 450 },
  { nombre: "Audífonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "USB 128GB", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tablet", precio: 500 },
];

// Recorremos y mostramos los productos con forEach
let res1 =
  "<h2 class='text-xl font-semibold mb-2'>Lista de Productos</h2><ul class='list-disc ml-6'>";
productos.forEach((p) => {
  res1 += `<li>${p.nombre} - $${p.precio}</li>`;
});
res1 += "</ul>";
document.getElementById("resultado1").innerHTML = res1;

// Obtener nombres con map + verificar con includes
const productosDisponibles = productos.map((p) => p.nombre);
let productoBuscado = "Tablet";
let disponible = productosDisponibles.includes(productoBuscado);
document.getElementById("resultado2").innerHTML = `
  <h2 class="text-xl font-semibold mb-2">Productos Disponibles</h2>
  <p><strong>Nombres:</strong> ${productosDisponibles.join(", ")}</p>
  <p>¿${productoBuscado} está disponible? <strong>${disponible ? "Sí" : "No"}</strong></p>
`;

// Aplicar 10% de descuento con map
const productosConDescuento = productos.map((p) => ({
  nombre: p.nombre,
  precioOriginal: p.precio,
  precioDescuento: (p.precio * 0.9).toFixed(2),
}));
let res3 =
  "<h2 class='text-xl font-semibold mb-2'>Productos con Descuento (10%)</h2><ul class='list-disc ml-6'>";
productosConDescuento.forEach((p) => {
  res3 += `<li>${p.nombre} - Original: $${p.precioOriginal} | Con Descuento: $${p.precioDescuento}</li>`;
});
res3 += "</ul>";
document.getElementById("resultado3").innerHTML = res3;

// Filtrar productos con precio < $100
const baratos = productos.filter((p) => p.precio < 100);
let res4 =
  "<h2 class='text-xl font-semibold mb-2'>Productos Menores a $100</h2><ul class='list-disc ml-6'>";
baratos.forEach((p) => {
  res4 += `<li>${p.nombre} - $${p.precio}</li>`;
});
res4 += "</ul>";
document.getElementById("resultado4").innerHTML = res4;

// Slice: Primeros 2 productos
const primerosDos = productos.slice(0, 2);
let res5 =
  "<h2 class='text-xl font-semibold mb-2'>Primeros 2 Productos</h2><ul class='list-disc ml-6'>";
primerosDos.forEach((p) => {
  res5 += `<li>${p.nombre} - $${p.precio}</li>`;
});
res5 += "</ul>";
document.getElementById("resultado5").innerHTML = res5;

// Ordenar por precio (menor a mayor)
const ordenados = [...productos].sort((a, b) => a.precio - b.precio);
let res6 =
  "<h2 class='text-xl font-semibold mb-2'>Productos Ordenados por Precio</h2><ul class='list-disc ml-6'>";
ordenados.forEach((p) => {
  res6 += `<li>${p.nombre} - $${p.precio}</li>`;
});
res6 += "</ul>";
document.getElementById("resultado6").innerHTML = res6;

// /Invertir el orden
const invertidos = [...productos].reverse();
let res7 =
  "<h2 class='text-xl font-semibold mb-2'>Productos en Orden Inverso</h2><ul class='list-disc ml-6'>";
invertidos.forEach((p) => {
  res7 += `<li>${p.nombre} - $${p.precio}</li>`;
});
res7 += "</ul>";
document.getElementById("resultado7").innerHTML = res7;
