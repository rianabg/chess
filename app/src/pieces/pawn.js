import Piece from './piece';
import BoardState from '../boardstate';

export default class Pawn extends Piece {
	constructor(row, col, color) {
		const img = (color === 'white') ? '2659' : '265F';
		super(row, col, color, img);
	}

	getTargets() {
		const targets = [];
		const board = BoardState.state;
		// moves 1 space forward (accounts for both colors & also starting spot)
		if (this.color === 'black' && !board[this.row + 1][this.col]) {
			// check if in OG starting position
			if (this.row === 1) {
				// pushes coordinates of cell to targets arr
				targets.push(`${this.row + 1}${this.col}`);
				// check if next vertical spot is empty
				if (!board[this.row + 2][this.col]) {
					targets.push(`${this.row + 2}${this.col}`);
				}
			} else {
				targets.push(`${this.row + 1}${this.col}`);
			}
		}

		if (this.color === 'white' && !board[this.row - 1][this.col]) {
			if (this.row === 6) {
				targets.push(`${this.row - 1}${this.col}`);
				if (!board[this.row - 2][this.col]) {
					targets.push(`${this.row - 2}${this.col}`);
				}
			} else {
				targets.push(`${this.row - 1}${this.col}`);
			}
		}

		// if enemy is in a diagonal square, highlight (accounts for 2 adjacent diagonals and color)
		// why tf u not workin tho
		if (board[this.row + 1][this.col - 1].color !== this.color) {
			console.log(board[this.row + 1][this.col + 1]);
			targets.push(`${this.row + 1}${this.col - 1}`);
		}

		if (board[this.row + 1][this.col + 1].color !== this.color) {
			targets.push(`${this.row + 1}${this.col + 1}`);
		}

		if (board[this.row - 1][this.col - 1].color !== this.color) {
			targets.push(`${this.row - 1}${this.col - 1}`);
		}

		if (board[this.row - 1][this.col + 1].color !== this.color) {
			targets.push(`${this.row - 1}${this.col + 1}`);
		}

		return targets;
	}
}
