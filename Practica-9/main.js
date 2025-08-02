// ===Inicio===
const startScreen = document.getElementById("start-screen");
const gameBoard = document.getElementById("game-board");

const pickXBtn = document.getElementById("pick-x");
const pickOBtn = document.getElementById("pick-o");

const vsCpuBtn = document.getElementById("vs-cpu");
const vsPlayerBtn = document.getElementById("vs-player");

let playerMark = "X";

// === Actualiza visualmente el botón seleccionado ===
function updateMarkSelection() {
  if (playerMark === "X") {
    pickXBtn.classList.add("bg-[#A8BFC933]");
    pickOBtn.classList.remove("bg-[#A8BFC933]");
  } else {
    pickOBtn.classList.add("bg-[#A8BFC933]");
    pickXBtn.classList.remove("bg-[#A8BFC933]");
  }
}

// === Eventos de selección de marca ===
pickXBtn.addEventListener("click", () => {
  playerMark = "X";
  updateMarkSelection();
});

pickOBtn.addEventListener("click", () => {
  playerMark = "O";
  updateMarkSelection();
});

// === Iniciar juego vs Player ===
vsPlayerBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameBoard.classList.remove("hidden");
  currentPlayer = "X"; // X siempre inicia
  resetGame();
});

// === Iniciar juego vs CPU (no implementado aún) ===
vsCpuBtn.addEventListener("click", () => {
  alert("Modo CPU aún no implementado.");
});

// ===Juego===
const boardCells = document.querySelectorAll("main > div");
const turnIndicator = document.getElementById("turn");

const retryModal = document.getElementById("retryModal");
const nextRoundModal = document.getElementById("nextRoundModal");

const cancelRetryBtn = document.getElementById("cancelRetry");
const confirmRetryBtn = document.getElementById("confirmRetry");
const nextRoundBtn = document.getElementById("nextRoundBtn");
const endMessage = document.getElementById("endMessage");

const retryBtn = document.getElementById("retryBtn");

const scoreXEl = document.querySelector("#score-x span");
const scoreOEl = document.querySelector("#score-o span");
const scoreTieEl = document.querySelector("#score-tie span");

let currentPlayer = "X";
let board = Array(9).fill(null);
let gameOver = false;
let score = { X: 0, O: 0, TIE: 0 };

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleClick(e, index) {
  if (board[index] || gameOver) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWinner()) {
    showEndMessage(`${currentPlayer} Wins!`);
    gameOver = true;
    return;
  }

  if (board.every((cell) => cell)) {
    showEndMessage("It’s a Tie!");
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  turnIndicator.textContent = currentPlayer;
}

function checkWinner() {
  return winCombos.some((combo) => combo.every((i) => board[i] === currentPlayer));
}

function showEndMessage(message) {
  endMessage.textContent = message;
  nextRoundModal.classList.remove("hidden");

  if (message.includes("X")) {
    score.X++;
    scoreXEl.textContent = score.X;
  } else if (message.includes("O")) {
    score.O++;
    scoreOEl.textContent = score.O;
  } else {
    score.TIE++;
    scoreTieEl.textContent = score.TIE;
  }
}

function resetGame() {
  board = Array(9).fill(null);
  gameOver = false;
  currentPlayer = "X";
  turnIndicator.textContent = currentPlayer;
  boardCells.forEach((cell) => (cell.textContent = ""));
}

// Eventos del tablero
boardCells.forEach((cell, i) => {
  cell.addEventListener("click", (e) => handleClick(e, i));
});

// Retry modal
retryBtn.addEventListener("click", () => {
  if (!board.some((cell) => cell)) return;
  retryModal.classList.remove("hidden");
});

cancelRetryBtn.addEventListener("click", () => {
  retryModal.classList.add("hidden");
});

// confirmRetryBtn.addEventListener("click", () => {
//   resetGame();
//   retryModal.classList.add("hidden");
// });

confirmRetryBtn.addEventListener("click", () => {
  resetGame();

  // Reiniciar marcador también
  score = { X: 0, O: 0, TIE: 0 };
  scoreXEl.textContent = 0;
  scoreOEl.textContent = 0;
  scoreTieEl.textContent = 0;

  retryModal.classList.add("hidden");
});

// Next round modal
nextRoundBtn.addEventListener("click", () => {
  resetGame();
  nextRoundModal.classList.add("hidden");
});
