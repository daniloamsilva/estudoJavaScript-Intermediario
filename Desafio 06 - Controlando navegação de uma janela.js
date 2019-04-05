/*
	Desafio: Controlando navegação de uma janela
	Crie um input e um botão.
	Digitando o endereço de um site e clicando no botão,
	uma janela será aberta com o site.
	Se já existir uma janela aberta, o site será alterado somente.
*/
var myWindow = null,
	urlElement = document.querySelector('#myURL');

function go(){
	var url = 'http://' + urlElement.value;
	if(myWindow && myWindow.closed){
		myWindow.location.href = url;
	}else{
		myWindow = window.open(url, 'My Window', 'width=300, height=200');
	}
}

/* html

<!DOCTYPE html>
<html>
<body>

	<input type="url" id="myURL" />
	<button onclick="go()" >GO</button>

<script src="./scripts.js" ></script>
</body>
</html>

*/