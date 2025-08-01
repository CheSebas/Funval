const boardCells = document.querySelectorAll("main > div");
const turnIndicator = document.getElementById("turn");
const modal = document.getElementById("restartModal");
const retryBtn = document.getElementById("retryBtn");
const cancelBtn = modal.querySelector("button:first-child");
const confirmBtn = modal.querySelector("button:last-child");

let currentPlayer = "X";
let board = Array(9).fill(null);
let gameOver = false;
let score = { X: 0, O: 0, TIE: 0 };

const scoreXEl = document.querySelector("#score-x span");
const scoreOEl = document.querySelector("#score-o span");
const scoreTieEl = document.querySelector("#score-tie span");

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // filas
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columnas
  [0, 4, 8],
  [2, 4, 6], // diagonales
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
  modal.classList.remove('hidden');
  modal.querySelector('p').textContent = message;
  confirmBtn.textContent = 'Next Round';

  if (message.includes('X')) {
    score.X++;
    scoreXEl.textContent = score.X;
  } else if (message.includes('O')) {
    score.O++;
    scoreOEl.textContent = score.O;
  } else if (message.includes('Tie')) {
    score.TIE++;
    scoreTieEl.textContent = score.TIE;
  }
}

function resetGame() {
  board = Array(9).fill(null);
  gameOver = false;
  currentPlayer = 'X';
  turnIndicator.textContent = currentPlayer;
  boardCells.forEach(cell => (cell.textContent = ''));
}

// Eventos del tablero
boardCells.forEach((cell, i) => {
  cell.addEventListener("click", (e) => handleClick(e, i));
});

// Abrir modal
retryBtn.addEventListener("click", () => {
  if (!board.some((cell) => cell)) return;
  modal.classList.remove("hidden");
  modal.querySelector("p").textContent = "Restart Game?";
  confirmBtn.textContent = "Next Round";
});

// Botones del modal
cancelBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

confirmBtn.addEventListener('click', () => {
  resetGame();
  modal.classList.add('hidden');
});
