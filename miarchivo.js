alert("Hi Beauty! Bienvenida a Todo Beauty!");
debugger
class Producto {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = img;
  }
}


const productos = [];

function mostrarProductos() {
  productos.push(new Producto(1,"Agua micelar", 1200, "img1"));
  productos.push(new Producto(2, "Limpiador", 1400, "img2"));
  productos.push(new Producto(3,"Exfoliante", 1400, "img3"));
  productos.push(new Producto(4, "Contorno ojos", 1400, "img4"));
  productos.push(new Producto(5, "Tonico", 1000, "img5"));
  productos.push(new Producto(6, "Escencia", 1200, "img6"));
  productos.push(new Producto(7, "Serum", 1800, "img7"));
  productos.push(new Producto(8, "Hidratante", 1400, "img8"));
  productos.push(new Producto(9, "Protector solar", 1200, "img9"));
  productos.push(new Producto(10, "Balsamo labial", 1400, "img10"));
}

mostrarProductos();


let respuesta = confirm("Desea ver algun producto en especifico?");
if (respuesta == 1) {
  let nombreProducto = elegirProducto();
  let productosFiltrados = filtrarProductos(nombreProducto);
  console.log("Estos son los productos que quizas estes buscando")
  console.log(productosFiltrados)
}else{
  console.log("Ok, aqui tienes para elegir entre todos los productos que tenemos disponibles.")
  console.log(productos)
}


function elegirProducto() {
  let nombreProducto = prompt(
    "Genial, estas en el lugar indicado. Por favor ingresa el nombre del producto.");
  while (nombreProducto.trim() == "") {
    nombreProducto = prompt("Por favor ingresa un nombre de producto valido.");
  }
  return nombreProducto.toLowerCase();
}

elegirProducto();

function filtrarProductos(nombre) {
  let filtrados = productos.filter(function(prod){
    return prod.nombre.toLowerCase() == nombre
  });

  return filtrados;
}


let carrito = []; 

function agregarCarrito(id){
  let productoElegido = productos.find(function(prod){
    return prod.id === id
  });

  carrito.push(productoElegido);
  console.log("Tu carrito ahora tiene estos productos");
  console.log(carrito);

}

agregarCarrito(4);
agregarCarrito(7);


function sacarCarrito(id){
    const resultado = carrito.some(producto => producto.id === id)
    if (resultado){
      
    }
}







































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