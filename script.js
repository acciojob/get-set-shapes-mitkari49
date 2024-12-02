//complete this code
class Rectangle {
	constructor (width, height){
		this.height = height;
		this.length = width;
	}
	getArea () {
		console.log (this.length*this.height);
	}
}

class Square extends Rectangle {
	constructor (sides) {
        super(sides, sides);
		this.sidesOfSquare = sides;
	}
	getPerimeter() {
		console.log(this.sidesOfSquare*4);
	}
}

const rectangle = new Rectangle (5,10);
rectangle.getArea();
const square = new Square (7);
square.getPerimeter();
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;