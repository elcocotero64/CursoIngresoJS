function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch(mesDelAño)
{
    case("Enero"):
        alert("que comiences bien el año!!!.");
        break;
    
    case("Marzo"):
        alert("a clases!!!");
        break;

    case("Mayo"):
        alert("se vienen las vacaciones!!!");
        break;
    
    case("Diciembre"):
        alert("felices fiestas!!!");
        break;    
    default: 
        alert("hola");
}
	



}//FIN DE LA FUNCIÓN