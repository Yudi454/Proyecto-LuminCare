// tabla

const tablaProductos = document.getElementById("tabla-productos");
const tbody = tablaProductos.querySelector("tbody");

cargarProductos();

function cargarProductos() {
  tbody.innerHTML = "";

  const productos = JSON.parse(localStorage.getItem("productosDeseados")) || [];

  productos.forEach((producto, indice) => {
    const fila = document.createElement("tr");

    const columnaImagen = document.createElement("td");
    const imagen = document.createElement("img");
    imagen.src = producto.url;
    imagen.alt = producto.nombre;
    imagen.style.width = "100px";
    columnaImagen.appendChild(imagen);
    fila.appendChild(columnaImagen);

    const columnaNombre = document.createElement("td");
    columnaNombre.textContent = producto.nombre;
    fila.appendChild(columnaNombre);

    const columnaPrecio = document.createElement("td");
    columnaPrecio.textContent = producto.precio;
    fila.appendChild(columnaPrecio);

    // const columnaDescripcion = document.createElement("td");
    // columnaDescripcion.textContent = producto.descripcion;
    // fila.appendChild(columnaDescripcion);

    const columnaAcciones = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => {
      eliminarProducto(indice);
      cargarProductos(); // Recargar la tabla después de eliminar el producto
    });
    columnaAcciones.appendChild(botonEliminar);
    fila.appendChild(columnaAcciones);

    tbody.appendChild(fila);
  });
}

// Paso 4: Función para eliminar un producto del localStorage
function eliminarProducto(indice) {
  // Obtener los productos del localStorage
  const productos = JSON.parse(localStorage.getItem("productosDeseados")) || [];

  // Eliminar el producto del arreglo por su índice
  productos.splice(indice, 1);

  // Actualizar el localStorage con el arreglo actualizado
  localStorage.setItem("productosDeseados", JSON.stringify(productos));
}

//
let productos = JSON.parse(localStorage.getItem("productos"));
// console.log(productos);
let productosDeseados = [];

let cartaProducto = document.getElementById("cartas");
cartaProducto.addEventListener("click", (e) => {
  if (e.target.classList.contains("botonAgregar")) {
    const id = e.target.dataset.id;
    console.log(id);

    const productoDeseado = productos.find(
      (producto) => producto.codigo === id
    );
    console.log(productoDeseado);

    productosDeseados.push(productoDeseado);

    localStorage.setItem(
      "productosDeseados",
      JSON.stringify(productosDeseados)
    ); //
    cargarProductos();
  }
});
