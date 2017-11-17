import Piece from './piece';

export default class Pawn extends Piece {
	constructor(row, col, color) {
		const img = (color === 'white') ? '2659' : '265F';
		super(row, col, color, img);
	}
}
