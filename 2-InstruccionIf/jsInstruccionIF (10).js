function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	// MICOMENTARIOFEDERICO

	var numero;

	numero = (Math.floor(Math.random)) * 10 + 1;

	if (numero >= 9)
	{
		alert("9-10 / Excelente");
	}
	else if (numero > 4)
	{
		alert("5-8 / Aprobò");
	}
	else
	{
		alert("1-4 / Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN