alert ("Hi Beauty! Bienvenida a Todo Beauty!")


/*function horasSueno(){
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

tipoPiel()*/


class Product{
    constructor(name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const prod1 = new Product("Agua micelar", 1800 , "img1");
const prod2 = new Product("Limpiador", 1500, "img2" );
const prod3 = new Product("Exfoliante", 1400, "img3" );
const prod4 = new Product("Contorno ojos", 1400, "img4" );
const prod5 = new Product("Tonico", 1000, "img5" );
const prod6 = new Product("Escencia", 1200, "img6" );
const prod7 = new Product("Serum", 1800, "img7" );
const prod8 = new Product("Hidratante", 1400, "img8");
const prod9 = new Product("Protector solar",1200, "img9");
const prod10 = new Product("Balsamo labial", 1400, "img10");
    
let products = [prod1,prod2,prod3,prod4,prod5,prod6,prod7,prod8,prod9,prod10];

console.log("Productos disponibles");
console.log(products);