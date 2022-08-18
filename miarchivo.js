class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

let productos = [];

function cargarProductos() {
  productos.push(new Producto(1, "Agua micelar", 1200, "images/amicelar.jpg"));
  productos.push(new Producto(2, "Limpiador", 1400, "images/limpieza.jpg"));
  productos.push(new Producto(3, "Exfoliante", 1400, "images/exfoliante.jpg"));
  productos.push(new Producto(4, "Contorno ojos", 1400, "images/contorno.jpg"));
  productos.push(new Producto(5, "Tonico", 1000, "images/niacinamida.jpg"));
  productos.push(new Producto(6, "Escencia", 1200, "images/niacinamida.jpg"));
  productos.push(new Producto(7, "Serum", 1800, "images/hidratante.jpg"));
  productos.push(new Producto(8, "Hidratante", 1400, "images/hidratante.jpg"));
  productos.push(
    new Producto(9, "Protector solar", 1200, "images/pantalla solar.jpg")
  );
  productos.push(new Producto(10, "Balsamo labial", 1400, "images/labial.jpg"));
}

cargarProductos();

function renderizarProductos() {
  productos.forEach(function (prod) {
    document.querySelector("#productos").insertAdjacentHTML(
      "beforeend",
      `
        <div class="card" style="width: 18rem">
          <img
            src="${prod.imagen}"
            class="card-img-top"
            alt="${prod.nombre}"
          />
          <div class="card-body">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="card-text">$${prod.precio}</p>
            <a href="#" id="producto${prod.id}" class="btn btn-primary">Comprar</a>
          </div>
        </div>
         `
    );
  });
}
renderizarProductos();

document.addEventListener("keyup", function (e) {
  let palabra = e.target.value;
  if (palabra.trim() == "") {
    productos = [];
    cargarProductos();
    renderizarProductos();
  } else {
    filtrarProductos();
  }
});

function buscarProductoXID(id) {
  return productos.find((prod) => prod.id === id);
}

function vaciarListadoProductos() {
  document.getElementById("productos").innerHTML = "";
}

function filtrarProductos() {
  console.log("filtrarProductos");
  let nombre = document.getElementById("buscador").value.toLowerCase();
  if (nombre.trim() === "") {
    document.getElementById("warning").innerHTML =
      "Por favor ingrese un nombre de producto valido";
    return;
  }

  let filtrados = productos.filter(function (prod) {
    return prod.nombre.toLowerCase() == nombre;
  });

  if (filtrados.length > 0) {
    productos = filtrados;
    vaciarListadoProductos();
    renderizarProductos();
  }
}

let carrito = [];

function agregarAlCarrito(idProd) {
  let productoElegido = productos.find(function (prod) {
    return prod.id === idProd;
  });

  if (carrito.some((producto) => producto.id == idProd)) {
    let prod = carrito.find((producto) => producto.id == idProd);
    prod.cantidad++;
  } else {
    productoElegido.cantidad = 1;
    carrito.push(productoElegido);
  }
}

agregarAlCarrito(4);
agregarAlCarrito(7);
agregarAlCarrito(4);

function eliminarDelCarrito(idProd) {
  let prod = carrito.find((producto) => producto.id === idProd);
  if (prod) {
    if(prod.cantidad > 1){
        prod.cantidad--
    }else{
      let posicion = carrito.findIndex(p => p.id == idProd)
      if (posicion != -1){
       carrito.splice(posicion,1)
      }
    }
  }
}