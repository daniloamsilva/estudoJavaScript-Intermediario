class Rect{
	constructor(base, height){
		this.base = base;
		this.height = height;
	}

	area(){
		return this.base * this.height;
	}
}

class Square extends Rect{
	constructor(base){
		super(base, base);
	}
}

let mySquare = new Square(5);
console.log(mySquare.area());