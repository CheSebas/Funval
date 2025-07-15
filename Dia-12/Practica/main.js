let opcion = "";

while (true) {
  opcion = prompt("Calculadora de Áreas:\n1. Cuadrado\n2. Rectángulo\n3. Triángulo\n4. Salir");

  if (opcion === null || opcion === "4") {
    console.log("Gracias por usar la calculadora.");
    break;
  }

  switch (opcion) {
    case "1":
      let lado = parseFloat(prompt("Lado del cuadrado:"));
      if (isNaN(lado) || lado <= 0) {
        console.log("Dato inválido.");
        break;
      }
      console.log("Área del Cuadrado =", lado * lado);
      break;

    case "2":
      let baseRect = parseFloat(prompt("Base del rectángulo:"));
      let alturaRect = parseFloat(prompt("Altura del rectángulo:"));
      if (isNaN(baseRect) || isNaN(alturaRect) || baseRect <= 0 || alturaRect <= 0) {
        console.log("Datos inválidos.");
        break;
      }
      console.log("Área del Rectángulo =", baseRect * alturaRect);
      break;

    case "3":
      let baseTri = parseFloat(prompt("Base del triángulo:"));
      let alturaTri = parseFloat(prompt("Altura del triángulo:"));
      if (isNaN(baseTri) || isNaN(alturaTri) || baseTri <= 0 || alturaTri <= 0) {
        console.log("Datos inválidos.");
        break;
      }
      console.log("Área del Triángulo =", (baseTri * alturaTri) / 2);
      break;

    default:
      console.log("Opción no válida.");
  }
}
