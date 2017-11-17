import Piece from './piece';

export default class Queen extends Piece {
	constructor(row, col, color) {
		const img = (color === 'white') ? '2655' : '265B';
		super(row, col, color, img);
	}
}
