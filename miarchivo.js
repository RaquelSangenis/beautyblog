function horasSueno(){
    let horasSueno = prompt ("Cuantas horas duermes al dia?")
    while (horasSueno == '' || isNaN(horasSueno)) {
        horasSueno = prompt ("Por favor ingrese un numero, cuantas horas duermes al dia?")
    }

    horasSueno = parseInt(horasSueno)
    switch (true) {
        case (horasSueno >= 24):
            console.warn("No se puede dormir todo un dia")
            break
        case (horasSueno > 10):
            console.warn("Estas durmiendo demasiado, visita a tu medico")
            break
        case (horasSueno < 6):
            console.warn("Estas durmiendo muy poco, visita a tu medico")
            break
        default:
            console.log("Estas durmiendo bien")
            break
    }
}

horasSueno()

function tipoPiel(){
    let tipoPiel1 = "normal"
    let tipoPiel2 = "mixta"
    let tipoPiel3 = "grasa"
    let tipoPiel4 = "sensible"

    alert ("Hi Beauty! Bienvenida a Beauty Blog!")
    let tipoPiel = prompt ("Cual es tu tipo de piel?")
    tipoPiel = tipoPiel.toLowerCase()

    if (tipoPiel == tipoPiel1) {
        alert("Tienes muchos productos para elegir")
    }else if(tipoPiel == tipoPiel2) {
        alert("Hay varios productos para tu tipo de piel")
    }else if(tipoPiel == tipoPiel3){
        alert("Deberias elegir productos ligeros y sin aceites")
    }
    else if(tipoPiel == tipoPiel4){
        alert("Deberias elegir prodcutos libres de alcohol y fragancias")
    }
    else{
        alert("Debes identificar tu tipo de piel")
    }
}

tipoPiel()
 

