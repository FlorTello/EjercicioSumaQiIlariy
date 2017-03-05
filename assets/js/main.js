function operar(num1,num2,operacion){

	var resultado;

	//Realizar operacion
	switch(operacion){
		case("1"): resultado = parseInt(num1) + parseInt(num2); break;
		case("2"): resultado = num1 - num2; break;
		case("3"): resultado = num1 * num2; break;
		case("4"): resultado = (num1 / num2).toFixed(2); break;
		case("5"): resultado = Math.pow(num1,num2); break;
		case("6"): resultado = (Math.pow(num1,(1/num2))).toFixed(2);break;
		default: resultado = "Operación no registrada";
	}
	document.getElementById("num1").value = resultado;
	document.getElementById("num1").disabled = true;
	return resultado;
}


var result;
function calcular(){
	var number1 = document.getElementById("num1").value;
	var number2 = document.getElementById("num2").value;
	var opcion = document.getElementById("operacion").value;
	result = operar(number1,number2,opcion);
	var continuar = prompt("desea continuar \n 0 = No  \ 1 = Si");	
	if(continuar == "1"){
		 	
		 document.getElementById("num2").value ="";
		 document.getElementById("operacion").value ="";
	}
	else{
		alert("El resultado total es : " + result);
		var limpiar = document.getElementById("limpiar").value;
		limpiar();

	}

}