function operacion(){

	var resultado = document.getElementById("resultado");
	var operaciones = document.getElementById("operacion").value;

	switch (operaciones) {

	case "suma":
		resultado = document.getElementById("num1").value + document.getElementById("num2").value;
		break;

	case "resta":
		resultado = document.getElementById("num1").value - document.getElementById("num2").value;
		break;	

	case "multiplicacion":
		resultado = document.getElementById("num1").value * document.getElementById("num2").value;
		break;

	case "division":
		resultado = document.getElementById("num1").value / document.getElementById("num2").value;
		break;

	case "potencia":
		resultado = Math.pow(document.getElementById("num1").value , document.getElementById("num2").value);
		break;

	case "raiz":
		resultado = Math.pow(document.getElementById("num1").value , (1/document.getElementById("num2").value));	
		break;

	default:
		resultado = "Operación no registrada";

	}

}
