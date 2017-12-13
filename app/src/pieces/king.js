import Piece from './piece';
import BoardState from '../boardstate';


export default class King extends Piece {
	constructor(row, col, color) {
		const img = (color === 'white') ? '2654' : '265A';
		super(row, col, color, img);
	}
	getTargets() {
		const targets = [];
		const board = BoardState.state;

		if (!board[this.row - 1][this.col - 1]) {
			targets.push(`${this.row - 1}${this.col - 1}`);
		} else if (board[this.row - 1][this.col - 1].color !== this.color) {
			targets.push(`${this.row - 1}${this.col - 1}`);
		}

		if (!board[this.row - 1][this.col]) {
			targets.push(`${this.row - 1}${this.col}`);
		} else if (board[this.row - 1][this.col].color !== this.color) {
			targets.push(`${this.row - 1}${this.col}`);
		}

		if (!board[this.row - 1][this.col + 1]) {
			targets.push(`${this.row - 1}${this.col + 1}`);
		} else if (board[this.row - 1][this.col + 1].color !== this.color) {
			targets.push(`${this.row - 1}${this.col + 1}`);
		}

		if (!board[this.row][this.col - 1]) {
			targets.push(`${this.row}${this.col - 1}`);
		} else if (board[this.row][this.col - 1].color !== this.color) {
			targets.push(`${this.row}${this.col - 1}`);
		}

		if (!board[this.row][this.col + 1]) {
			targets.push(`${this.row}${this.col + 1}`);
		} else if (board[this.row][this.col + 1].color !== this.color) {
			targets.push(`${this.row}${this.col + 1}`);
		}

		if (!board[this.row + 1][this.col - 1]) {
			targets.push(`${this.row + 1}${this.col - 1}`);
		} else if (board[this.row + 1][this.col - 1].color !== this.color) {
			targets.push(`${this.row + 1}${this.col - 1}`);
		}

		if (!board[this.row + 1][this.col]) {
			targets.push(`${this.row + 1}${this.col}`);
		} else if (board[this.row + 1][this.col].color !== this.color) {
			targets.push(`${this.row + 1}${this.col}`);
		}

		if (!board[this.row + 1][this.col + 1]) {
			targets.push(`${this.row + 1}${this.col + 1}`);
		} else if (board[this.row + 1][this.col + 1].color !== this.color) {
			targets.push(`${this.row + 1}${this.col + 1}`);
		}

		return targets;
	}
}

