const obtenerproductos = localStorage.getItem("productos")

const cartas = document.getElementById("cartas")
console.log("Hola Mundo")
console.log(obtenerproductos)

JSON.parse(obtenerproductos).forEach((producto) => {
    const carta = `
    <div class="container-fluid col-md-4">
    <div class="card">
      <img src="${producto.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p>${producto.categoria}</p>
        <p class="card-text">${producto.descripcion}</p>
        <a href="#" class="btn btn-primary">${producto.precio}</a>
        <a href="#" class="btn btn-primary">Producto Deseado</a>
      </div>
    </div>
    `;
    cartas.innerHTML += carta
})