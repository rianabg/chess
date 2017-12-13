import Piece from './piece';
import BoardState from '../boardstate';

export default class Knight extends Piece {
	constructor(row, col, color) {
		const img = (color === 'white') ? '2658' : '265E';
		super(row, col, color, img);
	}

// this needs to be finished
	getTargets() {
		const targets = [];
		const piece = BoardState.state;
		if (!piece[this.row - 2][this.col + 1]) {
			targets.push(`${this.row - 2}${this.col + 1}`);
		} else if (piece[this.row - 2][this.col + 1].color !== this.color) {
			targets.push(`${this.row - 2}${this.col + 1}`);
		}

		if (!piece[this.row - 2][this.col - 1]) {
			targets.push(`${this.row - 2}${this.col - 1}`);
		} else if (piece[this.row - 2][this.col - 1].color !== this.color) {
			targets.push(`${this.row - 2}${this.col - 1}`);
		}

		if (!piece[this.row + 1][this.col + 2]) {
			targets.push(`${this.row + 1}${this.col + 2}`);
		} else if (piece[this.row + 1][this.col + 2].color !== this.color) {
			targets.push(`${this.row + 1}${this.col + 2}`);
		}

		if (!piece[this.row - 1][this.col + 2]) {
			targets.push(`${this.row - 1}${this.col + 2}`);
		} else if (piece[this.row - 1][this.col + 2].color !== this.color) {
			targets.push(`${this.row - 1}${this.col + 2}`);
		}

		if (!piece[this.row + 2][this.col - 1]) {
			targets.push(`${this.row + 2}${this.col - 1}`);
		} else if (piece[this.row + 2][this.col - 1].color !== this.color) {
			targets.push(`${this.row + 2}${this.col - 1}`);
		}

		if (!piece[this.row + 2][this.col + 1]) {
			targets.push(`${this.row + 2}${this.col + 1}`);
		} else if (piece[this.row + 2][this.col + 1].color !== this.color) {
			targets.push(`${this.row + 2}${this.col + 1}`);
		}

		if (!piece[this.row - 1][this.col - 2]) {
			targets.push(`${this.row - 1}${this.col - 2}`);
		} else if (piece[this.row - 1][this.col - 2].color !== this.color) {
			targets.push(`${this.row - 1}${this.col - 2}`);
		}

		if (!piece[this.row + 1][this.col - 2]) {
			targets.push(`${this.row + 1}${this.col - 2}`);
		} else if (piece[this.row + 1][this.col - 2].color !== this.color) {
			targets.push(`${this.row + 1}${this.col - 2}`);
		}

		return targets;
	}

}
