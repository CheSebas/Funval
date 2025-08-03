async function fetchUsers() {
  const container = document.getElementById("users");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Error al obtener datos del servidor");
    }

    const users = await response.json();

    users.forEach((user) => {
      const card = document.createElement("div");
      card.className =
        "bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition";

      card.innerHTML = `
        <h3 class="text-xl font-bold text-blue-700 mb-2">Nombre: ${user.name}</h3>
        <p class="text-gray-700"><strong>Usuario:</strong> ${user.username}</p>
        <p class="text-gray-700"><strong>Email:</strong> ${user.email}</p>
        <p class="text-gray-700"><strong>Empresa:</strong> ${user.company.name}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `
      <div class="col-span-full bg-red-100 text-red-700 p-4 rounded-lg text-center font-semibold">
        Error al cargar los usuarios. Inténtalo de nuevo más tarde.
      </div>
    `;
    console.error("Error:", error);
  }
}

fetchUsers();
