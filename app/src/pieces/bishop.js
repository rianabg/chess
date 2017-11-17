import Piece from './piece';

export default class Bishop extends Piece {
	constructor(row, col, color) {
		const img = (color === 'white') ? '2657' : '265D';
		super(row, col, color, img);
	}
}
