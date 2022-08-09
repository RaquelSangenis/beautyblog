alert("Hi Beauty! Bienvenida a Todo Beauty!");

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

horasSueno()*/

function tipoPiel() {
  let tipoPiel = prompt(
    "Cual es tu tipo de piel? \n normal \n mixta \n grasa \n sensible"
  ).toLowerCase();

  switch (tipoPiel) {
    case "normal":
      alert("Tienes muchos productos para elegir");
      break;
    case "mixta":
      alert("Hay varios productos para tu tipo de piel");
      break;
    case "grasa":
      alert("Deberias elegir productos ligeros y sin aceites");
      break;
    case "sensible":
      alert("Deberias elegir productos libres de alcohol y fragancia");
      break;
    default:
      alert("Debes identificar tu tipo de piel");
      break;
  }
}

//tipoPiel();

class Producto {
  constructor(nombre, precio, img) {
    this.name = nombre;
    this.price = precio;
    this.image = img;
  }
}

const productos = [];
function agregarProductos() {
  productos.push(new Producto("Agua micelar", 1200, "img1"));
  productos.push(new Producto("Limpiador", 1400, "img2"));
  productos.push(new Producto("Exfoliante", 1400, "img3"));
  productos.push(new Producto("Contorno ojos", 1400, "img4"));
  productos.push(new Producto("Tonico", 1000, "img5"));
  productos.push(new Producto("Escencia", 1200, "img6"));
  productos.push(new Producto("Serum", 1800, "img7"));
  productos.push(new Producto("Hidratante", 1400, "img8"));
  productos.push(new Producto("Protector solar", 1200, "img9"));
  productos.push(new Producto("Balsamo labial", 1400, "img10"));

  console.log("Productos disponibles");
  console.log(productos);
}

agregarProductos();
