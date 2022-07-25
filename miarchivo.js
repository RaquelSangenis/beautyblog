
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

 

