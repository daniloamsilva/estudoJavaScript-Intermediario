/*
	Desafio: Evitando atribuição de valores
	Crie um objeto que só aceite atribuir
	valores pares. Caso contrário, é lançado um erro.
*/

let myObj = {
	_a: 0,

	get a(){
		return this._a;
	},
	set a(value){
		// Condição: Se o resto da divisão por 2 for 1 (impar)
		// 			 ou tipo do valor não seja um number.
		if (value % 2 === 1 || typeof(value) != 'number')
			// um erro é lançado
			throw Error();
		else
			// se não, o valor é atribuido.
			this._a = value;
	}
}