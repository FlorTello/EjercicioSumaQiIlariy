
var resultado = 10;
function calcular(){
	var number1 = document.getElementById("num1").value;
	var number2 = document.getElementById("num2").value;
	var opcion = document.getElementById("operacion").value;
	var continuar = prompt("desea continuar \n 0 = No  \ 1 = Si");	
	if(continuar == "1"){
		var limpiar = document.getElementById("limpiar").value;
		 document.getElementById("num1").value = resultado;	
		 document.getElementById("num2").value ="";
		 document.getElementById("operacion").value ="";
	}
	else{
		alert("El resultado total es : " + resultado);
	}
}

