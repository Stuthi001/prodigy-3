let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

cells.forEach((cell, index) => {
	cell.addEventListener('click', () => {
		if (gameOver) return;
		if (gameBoard[index] !== '') return;

		gameBoard[index] = currentPlayer;
		cell.textContent = currentPlayer;

		if (checkWin()) {
			gameOver = true;
			alert(`Player ${currentPlayer} wins!`);
		} else if (checkDraw()) {
			gameOver = true;
			alert('It\'s a draw!');
		} else {
			currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}
	});
});

resetButton.addEventListener('click', () => {
	gameBoard = ['', '', '', '', '', '', '', '', ''];
	currentPlayer = 'X';
	gameOver = false;

	cells.forEach(cell => {
		cell.textContent = '';
	});
});

function checkWin() {
	const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (const condition of winConditions) {
		if (gameBoard[condition[0]] !== '' &&
			gameBoard[condition[0]] === gameBoard[condition[1]] &&
			gameBoard[condition[0]] === gameBoard[condition[2]]) {
			return true;
		}
	}

	return false;
}

function checkDraw() {
	return gameBoard.every(cell => cell !== '');
}