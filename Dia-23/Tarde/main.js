/* ----------FETCH-------------- */
let contenedor = document.querySelector("#contenedor-usuarios");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error("Error al obtener los datos");
    }
    return respuesta.json();
  })
  .then((data) => {
    let html = "";

    data.forEach((usuario) => {
      html += `
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700">
        <h2 class="mb-2 text-xl font-bold text-blue-700 dark:text-white">${usuario.name}</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">@${usuario.username}</p>
        <p class="text-gray-800 dark:text-gray-200"><strong>Email:</strong> ${usuario.email}</p>
        <p class="text-gray-800 dark:text-gray-200"><strong>Ciudad:</strong> ${usuario.address.city}</p>
        <p class="text-gray-800 dark:text-gray-200"><strong>Teléfono:</strong> ${usuario.phone}</p>
        <p class="text-gray-800 dark:text-gray-200"><strong>Empresa:</strong> ${usuario.company.name}</p>

        <a href="mailto:${usuario.email}" class="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 text-center">
          Contactar
        </a>
      </div>
      `;
    });

    contenedor.innerHTML = html;
  })
  .catch((error) => {
    contenedor.innerHTML = `
      <p class="text-red-600 font-bold text-center w-full"> Error al cargar los usuarios: ${error.message}</p>
    `;
  });
