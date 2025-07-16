/* 
  GENERAR LA SERIE DE LOS NUMEROS PRIMOS ESTA SERIE SE CARACTERIZA X Q UN NUMERO PRIMO ES AQUEL
  Q SOLO ES DIVISIBLE ENTRE 1 Y EL MISMO DE LA CANTIDAD N Q INGRESE EL CLIENTE
  N=6
  2,3,5,7,11,13
  N=2
  2,3
  N=5
  2,3,5,7,11
  ahora deberan realizarlo con fUNCIONES
*/

// function mostrarPrimos() {
//   let cantidad = parseInt(prompt("¿Cuántos números primos deseas ver?"));
//   let primos = [];
//   let numero = 2;

//   while (primos.length < cantidad) {
//     let esPrimo = true;

//     for (let i = 2; i < numero; i++) {
//       if (numero % i === 0) {
//         esPrimo = false;
//         break;
//       }
//     }

//     if (esPrimo) {
//       primos.push(numero);
//     }

//     numero++;
//   }

//   console.log("Números primos:");
//   console.log(primos.join(", "));
// }

// mostrarPrimos();

// DESAFIO GRUPAL
// Requerimientos del Restaurante "don baraton"
// El restaurante necesita un sistema simple que permita:
// Mostrar el menú del día (máximo 5 platos, sin usar arrays).
// Permitir que un cliente realice varios pedidos (repetir mientras desee).
// Calcular el precio según el plato elegido.
// Solicitar el nombre del cliente.
// Mostrar una factura final con el total a pagar por todos los platos.
// (Opcional +5PTS) Aplicar descuento del 5% si el total supera los $120.
// (Opcional +5PTS) Mostrar un mensaje especial si el cliente eligió "Tacos".
// (Opcional html +10pts)

// function realizarPedido() {
//     // Solicitar nombre del cliente
//     let nombreCliente = prompt("Bienvenido a Don Baratón, ¿Cuál es tu nombre?");
//     let total = 0;
//     let seguirPidiendo = true;

//     let mensajeMenu = `Menú del día:
//     1. Pollo a la brasa - $35
//     2. Lomo saltado - $40
//     3. Tacos - $25
//     4. Hamburguesa - $30
//     5. Ensalada - $20
//     0. Salir`;

//     while (seguirPidiendo) {
//         let eleccion = prompt(`${mensajeMenu}\n\n¿Qué deseas pedir? Ingresa el número del plato:`);

//         if (eleccion === "0") {
//             alert("Has salido del programa. ¡Hasta luego!");
//             return;
//         }

//         switch (eleccion) {
//         case "1":
//             total += 35;
//             alert("Agregaste Pollo a la brasa");
//             break;
//         case "2":
//             total += 40;
//             alert("Agregaste Lomo saltado");
//             break;
//         case "3":
//             total += 25;
//             alert("¡Agregaste Tacos! 🌮");
//             alert("¡Buen gusto! Los tacos son los favoritos de la casa.");
//             break;
//         case "4":
//             total += 30;
//             alert("Agregaste Hamburguesa");
//             break;
//         case "5":
//             total += 20;
//             alert("Agregaste Ensalada");
//             break;
//         default:
//             alert("Opción inválida. Intenta nuevamente.");
//             continue;
//         }

//         seguirPidiendo = confirm("¿Deseas pedir otro plato?");
//     }

//     // Aplicar descuento si corresponde
//     let descuento = 0;
//     if (total > 120) {
//         descuento = total * 0.05;
//         total -= descuento;
//     }

//     // Mostrar factura final
//     alert(`Gracias por tu pedido, ${nombreCliente}.
//         Descuento aplicado: $${descuento.toFixed(2)}
//         Total a pagar: $${total.toFixed(2)}
//         ¡Que disfrutes tu comida en Don Baratón!`);
// }

// realizarPedido();

// function obtenerPrecio(opcion) {
//   switch (opcion) {
//     case 1:
//       return 35;
//     case 2:
//       return 40;
//     case 3:
//       return 25;
//     case 4:
//       return 30;
//     case 5:
//       return 20;
//     default:
//       return 0;
//   }
// }

// function calcularTotalFinal(subtotal, nombreCliente) {
//   let totalConDescuento = subtotal;
//   const umbralDescuento = 120;
//   const porcentajeDescuento = 0.05;

//   if (subtotal > umbralDescuento) {
//     totalConDescuento = subtotal * (1 - porcentajeDescuento);
//     console.log(`¡Felicidades ${nombreCliente}! Obtuviste un 5% de descuento.`);
//     console.log(`Subtotal: $${subtotal.toFixed(2)}`);
//     console.log(`Descuento aplicado: $${(subtotal * porcentajeDescuento).toFixed(2)}`);
//   }

//   return totalConDescuento;
// }

// function mostrarFactura(nombreCliente, totalFinal) {
//   console.log("\n=== FACTURA FINAL ===");
//   console.log(`Cliente: ${nombreCliente}`);
//   console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
//   console.log("Gracias por su compra en Don Baratón!");
//   console.log("======================\n");
// }

// function realizarPedido() {
//   let nombreCliente = prompt("Bienvenido a Don Baratón, ¿Cuál es tu nombre?");
//   let total = 0;
//   let seguirPedido = true;
//   let pidioTacos = false;

//   let mensajeMenu = `Menú del día:
//     1. Pollo a la brasa - $35
//     2. Lomo saltado - $40
//     3. Tacos - $25
//     4. Hamburguesa - $30
//     5. Ensalada - $20
//     0. Salir
//     PROMOCIÓN: Obtén 5% de descuento si tu compra supera los $120`;

//   while (seguirPedido) {
//     let eleccion = prompt(`${mensajeMenu}\n¿Qué deseas pedir? Ingresa el número del plato:`);
//     let opcion = parseInt(eleccion);

//     if (isNaN(opcion) || opcion < 0 || opcion > 5) {
//       alert("Por favor, ingresa un número válido del 0 al 5.");
//       continue;
//     }

//     if (opcion === 3) {
//       pidioTacos = true;
//     }

//     if (opcion === 0) {
//       break;
//     }

//     let precio = obtenerPrecio(opcion);
//     total += precio;

//     seguirPedido = confirm("¿Deseas pedir otro plato?");
//   }

//   let totalFinal = calcularTotalFinal(total, nombreCliente);

//   if (pidioTacos) {
//     console.log("¡Gracias por elegir nuestros famosos Tacos!");
//   }

//   if (total === 0) {
//     console.log(`No se realizó ningún pedido. ¡Gracias por visitar Don Baratón, ${nombreCliente}!`);
//     return;
//   }

//   mostrarFactura(nombreCliente, totalFinal);
// }

// realizarPedido();

/* 
  REALIZAR UNA CALCULADORA CON UN MENU
  MULTIPLICAR
  SUMAR
  RESTAR
  DIVIDIR
  2 NUMEROS
  vamos a crear arrowfunction para cada operacion y hacer uso de ellas 
*/

// Operaciones usando arrow functions
let sumar = (a, b) => a + b;
let restar = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => a / b;

// Mostrar menú y pedir opción al usuario
let opcion = prompt(
  `Calculadora simple:
  1. Sumar
  2. Restar
  3. Multiplicar
  4. Dividir`,
);

// Pedir números
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let resultado;

// Elegir operación con switch
switch (opcion) {
  case "1":
    resultado = sumar(num1, num2);
    alert("El resultado de la suma es: " + resultado);
    break;
  case "2":
    resultado = restar(num1, num2);
    alert("El resultado de la resta es: " + resultado);
    break;
  case "3":
    resultado = multiplicar(num1, num2);
    alert("El resultado de la multiplicación es: " + resultado);
    break;
  case "4":
    if (num2 === 0) {
      alert("Error: no se puede dividir entre 0");
    } else {
      resultado = dividir(num1, num2);
      alert("El resultado de la división es: " + resultado);
    }
    break;
  default:
    alert("Opción inválida");
}
