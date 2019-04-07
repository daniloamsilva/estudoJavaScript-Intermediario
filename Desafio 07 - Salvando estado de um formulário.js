/*
	Desafio: Salvando estado de um formulário
	Crie um formulário com um input de texto, combobox e um checkbox.
	Crie também dois botões: Save e Load.
	Clicando em Save, um arquivo txt será baixo com os informações
	passadas no formulário.
	Clicando em Load, você poderá selecionar o arquivo txt
	e o formulário será carregado com as informações contidas nele.

	HTML

	<html>
	<body>

	<input type="text" id="input">
	<select id="select">
		<option value="1" id="a">A</option>
		<option value="2" id="b">B</option>
		<option value="3" id="c">C</option>
	</select>
	<input type="checkbox" id="checkbox">

	<button onclick="save()">Save</button>
	<button onclick="load()">Load</button>

	<script src="./scripts.js"></script>
	</body>
	</html>

*/
// Primeiro guardei o conteúdo da tela em variáveis
let input = document.querySelector('#input'),
	select = document.querySelector('#select'),
	checkbox = document.querySelector('#checkbox');

// Função que salva o formulário
function save(){
	// Primeiro é criado um elemento de ancora,
	let element = document.createElement('a'),
		// e uma string com a informações do formulário
		content = 'Input:' + input.value + '/' +
				  ' Select:' + select.selectedIndex + '/' +
				  ' Checkbox:' + checkbox.checked;

	// Adiciono atributos para salvar content em um txt
	element.setAttribute('href', 'data:plain/text;charset=utf-8,'+ encodeURIComponent(content));
	// Adiciono um atributo para ativar o download
	element.setAttribute('download', 'myNewFile.txt');
	// Simulo um click no elemento para iniciar o download
	element.click();
}

// Função que carregado informações no formulário
function load(){
	// Crio o elemento de input do tipo "file"
	let element = document.createElement('input');
	element.setAttribute('id', 'fileSelect');
	element.setAttribute('type', 'file');
	element.setAttribute('accept', '.txt');
	element.onchange = function(){
		let reader = new FileReader();

		/* Esta função quebra o texto carregado em substrings
			dentro de arrays.
			Utilizo o método split para separar os conteúdos
			e passa-los para cada elemento.
			*/
		reader.onload = function(){
			let content = reader.result;
			input.value = content.split('/')[0].split(':')[1];
			select.selectedIndex = content.split('/')[1].split(':')[1];
			checkbox.checked = content.split('/')[2].split(':')[1];
		}

		reader.readAsText(element.files[0]);
	}
	element.click();
}