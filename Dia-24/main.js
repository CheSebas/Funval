let contenedor = document.querySelector("#pokemons-container");

async function traerpokemones(numeroInicialPokemones) {
  contenedor.innerHTML = "";
  for (let i = numeroInicialPokemones; i < numeroInicialPokemones + 10; i++) {
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let data = await respuesta.json();
    console.log(data);
    renderizarPokemon(data);
  }
}
traerpokemones(1);

function renderizarPokemon({
  sprites: {
    other: {
      ["official-artwork"]: { front_default },
    },
  },
  name,
  id,
  types,
}) {
  let tipos = "";
  types.forEach((tipo) => {
    tipos = tipos + " " + tipo.type.name;
  });

  contenedor.innerHTML += `
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="${front_default}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">#00${id}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">tipos ${tipos}</p>
        <button 
        onclick="mostrarDetalle(${id})"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded"
      >
        Más información
      </button>
    </div>
</div>
`;
}

let next = document.querySelector("#siguiente");
let contador = 1;
next.addEventListener("click", function (e) {
  contador += 10;
  traerpokemones(contador);
});

let ant = document.querySelector("#anterior");

ant.addEventListener("click", function (e) {
  if (contador > 10) {
    contador -= 10;
    traerpokemones(contador);
  }
});

let menu = document.querySelector("#drpwn");
let opc = document.querySelector("#opciones");
menu.addEventListener("click", function (e) {
  opc.classList.toggle("hidden");
});

async function filtrarPorTipo(tipo) {
  contenedor.innerHTML = "";
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);
    const data = await res.json();
    const pokemons = data.pokemon.slice(0, 10);

    for (let pkm of pokemons) {
      const resp = await fetch(pkm.pokemon.url);
      const dataPokemon = await resp.json();
      renderizarPokemon(dataPokemon);
    }
  } catch (error) {
    contenedor.innerHTML = `<p class="text-red-500">Error al cargar tipo ${tipo}</p>`;
  }
}

const listaTipos = document.querySelectorAll("#opciones li");

listaTipos.forEach((li) => {
  li.addEventListener("click", () => {
    const tipo = li.getAttribute("data-tipo");
    filtrarPorTipo(tipo);
    opc.classList.add("hidden");
  });
});

const tiposPokemon = [
  { nombre: "fuego", tipo: "fire", color: "bg-red-600", texto: "text-yellow-300" },
  { nombre: "agua", tipo: "water", color: "bg-blue-700", texto: "text-white" },
  { nombre: "fantasma", tipo: "ghost", color: "bg-black", texto: "text-white" },
  { nombre: "eléctrico", tipo: "electric", color: "bg-yellow-400", texto: "text-black" },
  { nombre: "planta", tipo: "grass", color: "bg-green-600", texto: "text-white" },
  { nombre: "psíquico", tipo: "psychic", color: "bg-pink-500", texto: "text-white" },
  { nombre: "roca", tipo: "rock", color: "bg-stone-500", texto: "text-white" },
  { nombre: "hielo", tipo: "ice", color: "bg-cyan-200", texto: "text-black" },
  { nombre: "dragón", tipo: "dragon", color: "bg-indigo-800", texto: "text-white" },
];

const opciones = document.querySelector("#opciones");

function renderizarTipos() {
  const ul = document.createElement("ul");
  ul.classList.add("flex", "flex-col");

  tiposPokemon.forEach((tipo) => {
    const li = document.createElement("li");
    li.setAttribute("data-tipo", tipo.tipo);
    li.className = `flex items-center justify-center gap-1 p-2 cursor-pointer ${tipo.color} ${tipo.texto}`;
    li.innerHTML = `${tipo.nombre}`;
    ul.appendChild(li);
  });

  opciones.appendChild(ul);
}

renderizarTipos();

function agregarEventosTipos() {
  const listaTipos = document.querySelectorAll("#opciones li");

  listaTipos.forEach((li) => {
    li.addEventListener("click", () => {
      const tipo = li.getAttribute("data-tipo");
      filtrarPorTipo(tipo);
      opciones.classList.add("hidden");
    });
  });
}

agregarEventosTipos();

async function mostrarDetalle(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  const {
    sprites: {
      other: {
        ["official-artwork"]: { front_default },
      },
    },
    name,
    types,
    height,
    weight,
    abilities,
    moves,
    stats,
  } = data;

  const tiposHTML = types
    .map((t) => `<span class="px-2 py-1 rounded bg-gray-200">${t.type.name}</span>`)
    .join(" ");
  const habilidadesHTML = abilities.map((a) => `<li>${a.ability.name}</li>`).join("");
  const movimientosHTML = moves
    .slice(0, 5)
    .map((m) => `<li>${m.move.name}</li>`)
    .join("");
  const statsHTML = stats
    .map(
      (s) => `
    <div class="flex justify-between">
      <span>${s.stat.name}</span>
      <span>${s.base_stat}</span>
    </div>
  `,
    )
    .join("");

  const contenedor = document.getElementById("contenido-detallado");
  contenedor.innerHTML = `
    <img src="${front_default}" alt="${name}" class="w-40 h-40 mx-auto mb-4" />
    <h2 class=" text-gray-900 dark:text-white text-2xl font-bold capitalize mb-1">${name}</h2>
    <p class="text-gray-600 dark:text-gray-300 mb-2">#${id.toString().padStart(3, "0")}</p>
    <div class="mb-2 flex gap-2 justify-center">${tiposHTML}</div>
    <p class="text-gray-900 dark:text-white text-sm">Altura: ${(height / 10).toFixed(1)} m | Peso: ${(weight / 10).toFixed(1)} kg</p>
    
    <h3 class=" text-gray-900 dark:text-white font-semibold mt-3">Habilidades:</h3>
    <ul class="text-gray-600 dark:text-gray-300 list-disc list-inside text-sm">${habilidadesHTML}</ul>

    <h3 class=" text-gray-900 dark:text-white font-semibold mt-3">Movimientos (5):</h3>
    <ul class="text-gray-600 dark:text-gray-300 list-disc list-inside text-sm">${movimientosHTML}</ul>

    <h3 class=" text-gray-900 dark:text-white font-semibold mt-3">Estadísticas:</h3>
    <div class="text-gray-600 dark:text-gray-300 text-sm space-y-1">${statsHTML}</div>
  `;

  document.getElementById("card-detallada").classList.remove("hidden");
}

function cerrarDetalle() {
  document.getElementById("card-detallada").classList.add("hidden");
}
