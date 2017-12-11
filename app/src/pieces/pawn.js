import Piece from './piece';
import BoardState from '../boardstate';

export default class Pawn extends Piece {
	constructor(row, col, color) {
		const img = (color === 'white') ? '2659' : '265F';
		super(row, col, color, img);
	}

	getTargets() {
		const targets = [];
		const piece = BoardState.state;
		// if at og starting place, can move +2 ahead
		if (this.row === 1 && this.color === 'black' && !piece[this.row + 1][this.col]) {
			targets.push(`${this.row + 1}${this.col}`);
			if (!piece[this.row + 2][this.col]) {
				targets.push(`${this.row + 2}${this.col}`);
			}
		}

		if (this.row === 6 && this.color === 'white' && !piece[this.row - 1][this.col]) {
			targets.push(`${this.row - 1}${this.col}`);
			if (!piece[this.row - 2][this.col]) {
				targets.push(`${this.row - 2}${this.col}`);
			}
		}
		// moves 1 space forward (accounts for both colors)
		if (!piece[this.row + 1][this.col] || this.color === 'black') {
			targets.push(`${this.row + 1}${this.col}`);
		}

		if (!piece[this.row - 1][this.col] || piece[this.row][this.col].color === 'white') {
			targets.push(`${this.row - 1}${this.col}`);
		}

		// if enemy is in a diagonal square, can move there
		return targets;
	}

}
