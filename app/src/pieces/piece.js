export default class Piece {
	constructor(row, col, color, img) {
		this.row = row;
		this.col = col;
		this.color = color;
		this.img = String.fromCharCode(parseInt(img, 16));
	}
}
