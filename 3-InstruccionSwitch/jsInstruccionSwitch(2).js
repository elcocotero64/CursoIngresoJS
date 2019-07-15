function mostrar() {
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case ("Enero"):
        case ("Febrero"):
        case ("Marzo"):
        case ("Abril"):
        case ("Mayo"):
        case ("Junio"):
            alert("Aun no llego el invierno");
            break;
        case ("Septiembre"):
        case ("Octubre"):
        case ("Noviembre"):
        case ("Diciembre"):
            alert("Ya pasó el invierno");
            break;
        default:
            alert("Abrigate que hace frío");
    }


    // alert (mesDelAño);




}//FIN DE LA FUNCIÓN