const obtenerproductos = localStorage.getItem("productos");

const cartas = document.getElementById("cartas");

JSON.parse(obtenerproductos).forEach((producto) => {
  const carta = `
    <div class="container-fluid col-md-4 col-lg-4 col-sm-6 productos-item ${producto.categoria}" data-item="${producto.categoria}">
    <div class="card">
      <img src="${producto.url}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h2 class="card-title" id="productos-item -name">${producto.nombre}</h2>
        <p>${producto.categoria}</p>
        <p class="card-text">${producto.descripcion}</p>
        <h2 class="productos-item -value">$${producto.precio}</h2>
        <button href="#" data-filter="${producto.categoria}" data-id="${producto.codigo}" class="btn btn-primary botonAgregar">Producto Deseado</button>
      </div>
    </div>
    `;
  cartas.innerHTML += carta;
});
