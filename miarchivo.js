class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

let productos = [];
let carrito = [];

fetch('http://localhost:3000/productos')
.then(response=>{
  if (response.ok) {
    return response.json();
  }
  throw new Error('');
})
.then(data=>{ 
  productos = data
})
.then(()=>renderizarProductos())
.catch( (error) => {
  Swal.fire({
    position: 'top-center',
    icon: 'error',
    title: 'No se pudieron cargar los productos, intente refrescar la pagina',
    showConfirmButton: false,
    timer: 3000
  })
})
.finally(()=> document.getElementsByClassName('spinner-border')[0].style.display = 'none')

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
            <p class="card-text">$ ${prod.precio}</p>
            <a href="#!" id="producto-${prod.id}" onclick="agregarAlCarrito(this)" class="btn btn-primary comprarBtn">Comprar</a>
          </div>
        </div>
         `
    );
  });
}

function cargarCarrito(){
  let items = localStorage.getItem("carrito")
  if (items){
    carrito = JSON.parse(items)
  }
}
cargarCarrito()
dibujarCarrito()

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

function vaciarListadoProductos() {
  document.getElementById("productos").innerHTML = "";
}

function filtrarProductos() {
  let nombre = document.getElementById("buscador").value.toLowerCase();
  if (nombre.trim() === "") {
    document.getElementById("warning").innerHTML =
      "Por favor ingrese un nombre de producto valido";
    return;
  }

  let filtrados = productos.filter(function (prod) {
    return prod.nombre.toLowerCase().includes(nombre);
  });

  if (filtrados.length > 0) {
    productos = filtrados;
    vaciarListadoProductos();
    renderizarProductos();
  }
}

function agregarAlCarrito(btn) {
  let idProd = parseInt(btn.getAttribute("id").split("-")[1])

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

  dibujarCarrito()
  guardarLocalStorage()
  mensajeCompra()
}

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
  dibujarCarrito()
  guardarLocalStorage()
}

function calcularCarrito() {
  return carrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0)
}

function dibujarCarrito() {
  const carritoContainer = document.getElementById("carritoFilas")
  carritoContainer.innerHTML = ""

  if (carrito.length) {
    document.getElementById('vaciarCarritoBtn').style.display = 'block'
  }else {
    document.getElementById('vaciarCarritoBtn').style.display = 'none'
  }
  carrito.forEach(producto => {
    carritoContainer.innerHTML += `
                          <tr>
                              <td>${producto.id}</td>
                              <td>${producto.nombre}</td>
                              <td>${producto.cantidad}</td>
                              <td>$ ${producto.precio}</td>
                              <td>$ ${producto.precio * producto.cantidad}</td>
                              <td><button type="button" onclick="advertenciaEliminar(${producto.id})" class="btn btn-danger">Eliminar</button>
                              </td>
                          </tr>`
  })

  if (carrito.length){
    carritoContainer.innerHTML += `
                          <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td>$ ${calcularCarrito()}</td>
                              <td></td>
                          </tr>`
  }
}

function mostrarCarrito() {
  document.getElementById('carrito').style.display = 'block'
}

function guardarLocalStorage(){
  localStorage.setItem("carrito", JSON.stringify(carrito))
}

function vaciarCarrito(){
  carrito = []
  dibujarCarrito()
  localStorage.removeItem("carrito");
}

const mensajeCompra = ()=> {
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Se ha agregado este producto a tu carrito',
    showConfirmButton: false,
    timer: 1500
  })
  }

  const advertenciaEliminar = (idProducto)=> {
    Swal.fire({
      title: 'Estas segura que quieres eliminar este producto de tu carrito?',
      text: "Todavia puedes comprarlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero eliminarlo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarDelCarrito(idProducto)
        Swal.fire(
          'Eliminado!',
          'Tu producto ha sido eliminado del carrito.',
          'success'
        )
      }
    })
  }