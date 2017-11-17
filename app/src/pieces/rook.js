import Piece from './piece';
import BoardState from '../boardstate';

const $ = require('jquery');

export default class Rook extends Piece {
	constructor(row, col, color) {
		const img = (color === 'white') ? '2656' : '265C';
		super(row, col, color, img);
	}

	getTargets() {
		const targets = [];
		// north for loop

		for (let k = this.row - 1; k > -1; k--) {
			if (!BoardState.state[k][this.col]) {
				targets.push(`${k}${this.col}`);
			} else if (BoardState.state[k][this.col].color !== this.color) {
				targets.push(`${k}${this.col}`);
				break;
			} else {
				break;
			}
		}

		for (let l = this.col + 1; l < 8; l++) {
			if (!BoardState.state[this.row][l]) {
				targets.push(`${this.row}${l}`);
			} else if (BoardState.state[this.row][l].color !== this.color) {
				targets.push(`${this.row}${l}`);
				break;
			} else {
				break;
			}
		}

		for (let m = this.row + 1; m < 8; m++) {
			if (!BoardState.state[m][this.col]) {
				targets.push(`${m}${this.col}`);
			} else if (BoardState.state[m][this.col].color !== this.color) {
				targets.push(`${m}${this.col}`);
				break;
			} else {
				break;
			}
		}

		for (let n = this.col - 1; n > -1; n--) {
			if (!BoardState.state[this.row][n]) {
				targets.push(`${this.row}${n}`);
			} else if (BoardState.state[this.row][n].color !== this.color) {
				targets.push(`${this.row}${n}`);
				break;
			} else {
				break;
			}
		}

		return targets;
	}
}
