import Piece from './piece';

export default class King extends Piece {
	constructor(row, col, color) {
		const img = (color === 'white') ? '2654' : '265A';
		super(row, col, color, img);
	}
}
