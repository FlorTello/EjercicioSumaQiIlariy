function operar(){
	//Obtener el valor seleccionado
	var formulario = document.getElementById('formulario');
	var operaciones = document.getElementById('operacion');
	var operacion = operaciones[operaciones.selectedIndex].value;

	//Obetener los dos numeros
	var num1 = document.getElementById('numero1').value;
	var num2 = document.getElementById('numero2').value;
	var resultado;

	//Realizar operacion
	switch(operacion){
		case("sumar"): resultado = num1 + num2; break;
		case("restar"): resultado = num1 - num2; break;
		case("multiplicar"): resultado = num1 * num2; break;
		case("dividir"): resultado = num1 / num2; break;
		case("potencia"): resultado = Math.pow(num1,num2); break;
		case("raiz"): resultado = Math.sqrt(num1);break;
	}

	//Imprimir resultado
	document.getElementById('numero1').value = resultado;

}