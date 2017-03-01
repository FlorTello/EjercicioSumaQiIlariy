

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
		case("raiz"): resultado = Math.pow(num1,(1/num2));break;
		default: resultado = "Operación no registrada";
	}

	//Imprimir resultado
	document.getElementById('numero1').value = resultado;


function continuar(operar){
		
		if(confirm("Si")){
			return document.getElementById('number1').value;
		}
		else{
			return document.getElementById('limpiar')
		}
	

}

