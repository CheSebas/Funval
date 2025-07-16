let saldo = 0;
let continuar = true;
let historial = [];
const limiteDiario = 500;
let retirosHoy = 0;

function ingresarDinero(monto) {
  if (monto > 0) {
    saldo += monto;
    historial.push(`+ Ingreso de $${monto}`);
    alert(`Depósito exitoso. Saldo actual: $${saldo}`);
  } else {
    alert("Ingresa un monto válido.");
  }
}

function retirarDinero(monto) {
  if (monto <= 0) {
    alert("Ingresa un monto mayor a cero.");
  } else if (monto > saldo) {
    alert("Saldo insuficiente.");
  } else if (retirosHoy + monto > limiteDiario) {
    alert("Has superado el límite de retiro diario.");
  } else {
    saldo -= monto;
    retirosHoy += monto;
    historial.push(`- Retiro de $${monto}`);
    alert(`Retiro exitoso. Saldo restante: $${saldo}`);
  }
}

function consultarSaldo() {
  alert(`Saldo actual: $${saldo}`);
}

while (continuar) {
  let opcion = prompt(
    `Bienvenido a tu cuenta bancaria
    1. Ingresar dinero
    2. Retirar dinero
    3. Consultar saldo
    4. Ver historial
    5. Salir
    Límite de retiro diario: $${limiteDiario - retirosHoy}
    Elige una opción:`,
  );

  switch (opcion) {
    case "1":
      let ingreso = parseFloat(prompt("¿Cuánto deseas ingresar?"));
      ingresarDinero(ingreso);
      break;
    case "2":
      let retiro = parseFloat(prompt("¿Cuánto deseas retirar?"));
      retirarDinero(retiro);
      break;
    case "3":
      consultarSaldo();
      break;
    case "4":
      if (historial.length === 0) {
        alert("No hay transacciones registradas.");
      } else {
        alert(`Historial de transacciones: ${historial}`);
      }
      break;
    case "5":
      continuar = false;
      alert("Gracias por usar tu cuenta bancaria. ¡Hasta pronto!");
      break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}
