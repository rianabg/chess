import Piece from './piece';
import BoardState from '../boardstate';


export default class Queen extends Piece {
	constructor(row, col, color) {
		const img = (color === 'white') ? '2655' : '265B';
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

		for (let o = this.row - 1; o > -1; o--) {
			if (!BoardState.state[o][this.col]) {
				targets.push(`${o}${this.col}`);
			} else if (BoardState.state[o][this.col].color !== this.color) {
				targets.push(`${o}${this.col}`);
				break;
			} else {
				break;
			}
		}

		for (let p = this.col + 1; p < 8; p++) {
			if (!BoardState.state[this.row][p]) {
				targets.push(`${this.row}${p}`);
			} else if (BoardState.state[this.row][p].color !== this.color) {
				targets.push(`${this.row}${p}`);
				break;
			} else {
				break;
			}
		}

		for (let q = this.row + 1; q < 8; q++) {
			if (!BoardState.state[q][this.col]) {
				targets.push(`${q}${this.col}`);
			} else if (BoardState.state[q][this.col].color !== this.color) {
				targets.push(`${q}${this.col}`);
				break;
			} else {
				break;
			}
		}

		for (let r = this.col - 1; r > -1; r--) {
			if (!BoardState.state[this.row][r]) {
				targets.push(`${this.row}${r}`);
			} else if (BoardState.state[this.row][r].color !== this.color) {
				targets.push(`${this.row}${r}`);
				break;
			} else {
				break;
			}
		}

		return targets;
	}

}
