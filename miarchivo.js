alert ("Hi Beauty! Bienvenida a Beauty Blog!")

function horasSueno(){
    let horasSueno = prompt ("Cuantas horas duermes al dia?")
    while (horasSueno == '' || isNaN(horasSueno)) {
        horasSueno = prompt ("Por favor ingresa un numero, cuantas horas duermes al dia?")
    }
    
    horasSueno = parseInt(horasSueno)
    switch (true) {
        case (horasSueno >= 24):
            alert("No se puede dormir todo un dia")
            break
        case (horasSueno > 10):
            alert("Estas durmiendo demasiado, visita a tu medico")
            break
        case (horasSueno < 6):
            alert("Estas durmiendo muy poco, visita a tu medico")
            break
        default:
            alert("Estas durmiendo bien")
            break
    }
}

horasSueno()

function tipoPiel(){
    let tipoPiel = prompt ("Cual es tu tipo de piel? \n normal \n mixta \n grasa \n sensible").toLowerCase()

    switch (tipoPiel){
        case "normal":
            alert("Tienes muchos productos para elegir")
            break
        case "mixta":
            alert("Hay varios productos para tu tipo de piel")
            break
        case "grasa":
            alert("Deberias elegir productos ligeros y sin aceites")
            break
        case "sensible":
            alert("Deberias elegir productos libres de alcohol y fragancia")
            break
        default:
        alert("Debes identificar tu tipo de piel")
        break
    }
}

tipoPiel()
 

