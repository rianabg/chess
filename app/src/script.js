// import Bishop from './pieces/bishop';
// import King from './pieces/king';
// import Knight from './pieces/knight';
// import Pawn from './pieces/pawn';
// import Queen from './pieces/queen';
// import Rook from './pieces/rook';
import BoardState from './boardstate';
// import Piece from './pieces/piece';

require('../styles/chess.css');
require('./pieces/piece');

const $ = require('jquery');

$(document).ready(() => {
	buildBoard();
	$('#board > div > div').click(handleClick);
});

function handleClick(event) {
	const coordinates = getCoordinates(event);
	const clickedPiece = BoardState.state[coordinates.row][coordinates.col];
	if (clickedPiece) {
		const targets = clickedPiece.getTargets();
		removeHighlights();
		highlightTargets(targets);
		const NEW_SPOT = $('.highlight').click(newSpot);
		// clear BoardState at clicked piece's OG spot
		// changes coordinates of clicked piece to new spot coordinates
		console.log(NEW_SPOT);
		// moves piece in boardstate to correct position
		// find spot in board state the holds this piece, switch it with clicked spot in board state
	}
}

function removeHighlights() {
	$('.highlight').removeClass('highlight');
}

function highlightTargets(ids) {
	for (let i = 0; i < ids.length; i++) {
		highlightTarget(ids[i]);
	}
}

function highlightTarget(id) {
	$(`#${id}`).addClass('highlight');
}

function newSpot(event) {
	const target = event.currentTarget.id;
	return {
		row: target[0],
		col: target[1]
	};
	// when one of targets square is clicked, move piece to that square
	// moving piece to that square means boardstate.state[place where piece is]
	// and boardstate.state[where square is] get swapped
	// but if enemy piece, piece moves to that square and og square is emptied
}

function getCoordinates(event) {
	const id = event.currentTarget.id;
	// return object with row and col of clicked piece
	return {
		row: id[0],
		col: id[1]
	};
}

function buildBoard() {
	const board = $('#board');
	for (let i = 0; i < 8; i++) {
		const row = $('<div>');
		for (let j = 0; j < 8; j++) {
			const cell = $('<div>', { id: `${i}${j}` });
			row.append(cell);
			if (BoardState.state[i][j]) {
				cell.text(BoardState.state[i][j].img);
			}
		}
		board.append(row);
	}
}

// 	changeTurn(){};
// }
