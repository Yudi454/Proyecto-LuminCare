// tabla

const tablaProductos = document.getElementById("tabla-productos");
const tbody = tablaProductos.querySelector("tbody");
const botonAgregar = document.querySelector(".botonAgregar");
const iconoEstrella = botonAgregar.querySelector("i.fa-star");

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

    const columnaAcciones = document.createElement("td");
    const botonEliminar = document.createElement("button");
    botonEliminar.classList = "btn btn-outline-secondary"
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () => {
      swal({
        title: "Está seguro de que desea borrar este producto?",
        text: "Una vez borrado no puede recuperarlo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          
          eliminarProducto(indice);
          cargarProductos(); // Recargar la tabla después de eliminar el producto
          swal("El producto fue eliminado exitosamente", {
            icon: "success",
          });
        } else {
          swal("El producto no fue eliminado");
        }
      });
    });
    columnaAcciones.appendChild(botonEliminar);
    fila.appendChild(columnaAcciones);

    tbody.appendChild(fila);
  });
}

// Función para eliminar un producto del localStorage
function eliminarProducto(indice) {
  const productos = JSON.parse(localStorage.getItem("productosDeseados")) || [];

  productos.splice(indice, 1);

  localStorage.setItem("productosDeseados", JSON.stringify(productos));
}

//
let productos = JSON.parse(localStorage.getItem("productos"));
let productosDeseados = [];

let cartaProducto = document.getElementById("cartas");
cartaProducto.addEventListener("click", (e) => {
  if (e.target.classList.contains("botonAgregar")) {
    const id = e.target.dataset.id;

    const productoDeseado = productos.find(
      (producto) => producto.codigo === id
    );

    productosDeseados.push(productoDeseado);

    localStorage.setItem(
      "productosDeseados",
      JSON.stringify(productosDeseados)
    );
    cargarProductos();
  }
});

iconoEstrella.addEventListener("click" , (event) => {
    
  const botonPadre = event.currentTarget.closest(".botonAgregar");
  botonPadre.click();

})