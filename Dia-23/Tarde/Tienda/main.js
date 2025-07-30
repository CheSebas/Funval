const contenedor = document.getElementById("contenedor-perros");
const boton = document.getElementById("btn-cargar");

function cargarGaleriaPerritos(cantidad = 6) {
  contenedor.innerHTML = "";

  for (let i = 0; i < cantidad; i++) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        const img = document.createElement("img");
        img.src = data.message;
        img.alt = "Perrito adorable";
        img.className =
          "w-full max-w-xs h-64 object-cover rounded-lg shadow-md border-4 border-yellow-300";
        contenedor.appendChild(img);
      })
      .catch((error) => {
        console.error("Error al cargar imagen:", error);
        const errorMsg = document.createElement("p");
        errorMsg.textContent = "Error al cargar la imagen";
        errorMsg.className = "text-red-600 font-semibold";
        contenedor.appendChild(errorMsg);
      });
  }
}

cargarGaleriaPerritos();
