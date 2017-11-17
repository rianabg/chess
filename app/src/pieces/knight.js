import Piece from './piece';

export default class Knight extends Piece {
	constructor(row, col, color) {
		const img = (color === 'white') ? '2658' : '265E';
		super(row, col, color, img);
	}
}
