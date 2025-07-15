function mostrarMenu() {
  let opcion = "";

  while (true) {
    opcion = prompt(
      "Calculadora de Áreas:\n" +
        "1. Área de un Cuadrado\n" +
        "2. Área de un Rectángulo\n" +
        "3. Área de un Triángulo\n" +
        "4. Salir\n\n" +
        "Ingrese el número de la opción:",
    );

    if (opcion === null || opcion === "4") {
      alert("Gracias por usar la calculadora.");
      break;
    }

    switch (opcion) {
      case "1":
        calcularCuadrado();
        break;
      case "2":
        calcularRectangulo();
        break;
      case "3":
        calcularTriangulo();
        break;
      default:
        alert("Opción no válida. Intente nuevamente.");
    }
  }
}

function calcularCuadrado() {
  let lado = prompt("Ingrese el valor del lado del cuadrado:");
  lado = parseFloat(lado);

  if (isNaN(lado) || lado <= 0) {
    alert("Dato inválido. Ingrese un número positivo.");
    return;
  }

  let area = lado * lado;
  mostrarResultado(`Área del Cuadrado = ${area}`);
}

function calcularRectangulo() {
  let base = prompt("Ingrese la base del rectángulo:");
  let altura = prompt("Ingrese la altura del rectángulo:");
  base = parseFloat(base);
  altura = parseFloat(altura);

  if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    alert("Datos inválidos. Ingrese números positivos.");
    return;
  }

  let area = base * altura;
  mostrarResultado(`Área del Rectángulo = ${area}`);
}

function calcularTriangulo() {
  let base = prompt("Ingrese la base del triángulo:");
  let altura = prompt("Ingrese la altura del triángulo:");
  base = parseFloat(base);
  altura = parseFloat(altura);

  if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    alert("Datos inválidos. Ingrese números positivos.");
    return;
  }

  let area = (base * altura) / 2;
  mostrarResultado(`Área del Triángulo = ${area}`);
}

function mostrarResultado(texto) {
  document.getElementById("resultado").innerText = texto;
}
