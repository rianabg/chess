import Piece from './piece';
import BoardState from '../boardstate';


export default class Bishop extends Piece {
	constructor(row, col, color) {
		const img = (color === 'white') ? '2657' : '265D';
		super(row, col, color, img);
	}
	getTargets() {
		const targets = [];

		for (let k = 1; k < 8; k++) {
			if (!BoardState.state[this.row - k][this.col + k]) {
				targets.push(`${this.row - k}${this.col + k}`);
			} else if (BoardState.state[this.row - k][this.col + k].color !== this.color) {
				targets.push(`${this.row - k}${this.col + k}`);
				break;
			} else {
				break;
			}
		}

		for (let l = 1; l < 8; l++) {
			if (!BoardState.state[this.row + l][this.col + l]) {
				targets.push(`${this.row + l}${this.col + l}`);
			} else if (BoardState.state[this.row + l][this.col + l].color !== this.color) {
				targets.push(`${this.row + l}${this.col + l}`);
				break;
			} else {
				break;
			}
		}

		for (let m = 1; m < 8 && m > -1; m++) {
			if (!BoardState.state[this.row + m][this.col - m]) {
				targets.push(`${this.row + m}${this.col - m}`);
			} else if (BoardState.state[this.row + m][this.col - m].color !== this.color) {
				targets.push(`${this.row + m}${this.col - m}`);
				break;
			} else {
				break;
			}
		}

		for (let n = 1; n > -1; n++) {
			if (!BoardState.state[this.row - n][this.col - n]) {
				targets.push(`${this.row - n}${this.col - n}`);
			} else if (BoardState.state[this.row - n][this.col - n].color !== this.color) {
				targets.push(`${this.row - n}${this.col - n}`);
				break;
			} else {
				break;
			}
		}

		return targets;
	}
}

