/*
	Criar uma função para somar dois números.
	Sua chamada deve ser desta forma: sum(2)(10);
*/
function sum(number1){
	return function(number2){
		return number1 + number2;
	}
}