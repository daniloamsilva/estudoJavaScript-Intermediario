function Rect (base, height){
	this.base = base;
	this.height = height;

	this.area = function(){
		return this.base * this.height;
	}
}

function Square (base){
	this.base = base;
	this.height = base;
}

Square.prototype = new Rect();
let mySquare = new Square(5);
console.log(mySquare.area());