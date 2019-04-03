/*
	Desafio: Formatando datas
	Criar uma função que recebe uma data no formato DD/MM/AAAA.
	A função deve devolver data no formato AAAA/MM/DD.
	Utilizar expressões regulares.
*/

function formatDate(date){
	// Expressão regular para testar o argumento passado
	let regex = /\d{2}\/\d{2}\/\d{4}/;

	// Teste da expressão regular
	if (regex.test(date)) {
		let day = date.slice(0, 2); // Guardando o dia
		let month = date.slice(3, 5); // Guardando o mês
		let year = date.slice(6); // Guardando o ano

		// Retorna a data no formato AAAA/MM/DD
		return `${year}/${month}/${day}`;
	}else
		console.log('A data não estava no formato correto');
}