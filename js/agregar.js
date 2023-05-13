const obtenerproductos = localStorage.getItem("productos");

const cartas = document.getElementById("cartas");

JSON.parse(obtenerproductos).forEach((producto) => {
  const carta = `
    <div class="container-fluid col-md-4 col-lg-4 col-sm-6" data-item="${producto.categoria}">
    <div class="card">
      <img src="${producto.url}" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h2 class="card-title">${producto.nombre}</h2>
        <p>${producto.categoria}</p>
        <p class="card-text">${producto.descripcion}</p>
        <h2 href="#" class="">$${producto.precio}</h2>
        <a href="#" id="${producto.codigo}" class="btn btn-primary btn-productosDeseados">Producto Deseado</a>
      </div>
    </div>
    `;
  cartas.innerHTML += carta;
});
