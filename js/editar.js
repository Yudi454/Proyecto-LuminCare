const obtenerproductos = localStorage.getItem("productos");

const cartas = document.getElementById("cartas");

JSON.parse(obtenerproductos).forEach((producto) => {
  const carta = `
    <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 productos-item ${producto.categoria}" data-item="${producto.categoria}"style="width: 18rem;">
    <div class="card d-flex align-items-center">
        <div class="contenedorImg">
            <img class="productosImg img-fluid" src="${producto.url}" alt="">
            <img class="productosImg img-fluid" src="${producto.url2}" alt="">                        
        </div>
        <div class="card-body">
                <h5 class="card-title" id="productos-item-name">${producto.nombre}</h5>
                <p class="card-text">HolaMundo</p>
                <h5 class="productos-item-value">$<strong id="productos-item-price" class="font-weight-bold">${producto.precio}</strong></h5>
            <div class="contenedorBtnComprar">
            <button href="#" data-filter="${producto.categoria}" data-id="${producto.codigo}" class="btn btn-dark botonAgregar">Producto Deseado</button>
                <a href="./html/404.html"
                class="btn btn-outline-dark mt-2" style="width: 13em;"
                data-filter="${producto.categoria}">Añadir al Carrito</a>
            </div>
        </div>
    </div>
</div>
    `;
  cartas.innerHTML += carta;
 
});
(function () {
  const botones = document.querySelectorAll('.btn-filter')/*Selecciona todas las clases con el nombre btn*/
  const storeItems = document.querySelectorAll('.productos-item')/*Selecciona todas las clases con el nombre productos-item seria el contenedor de las cards*/
  
  botones.forEach((boton) => {
      boton.addEventListener('click', (e) => {
          e.preventDefault()
          const filter = e.target.dataset.filter

          storeItems.forEach((item) => {
              if (filter === 'all') {
                  item.style.display = 'block'
              }
              else {
                  if(item.classList.contains(filter)){item.style.display = 'block'}
                  else{item.style.display = 'none'}
              }
          })
      })
  })
})();

(function () {
  const searchBox = document.querySelector('#search-item')
  const storeItems = document.querySelectorAll('.productos-item')

  searchBox.addEventListener('keyup', (e) =>{
      
      const searchFilter = e.target.value.toLowerCase().trim()


      storeItems.forEach((item) =>{
          
          if (item.textContent.includes(searchFilter)){
              item.style.display = 'block'
          } else {
              item.style.display = 'none'
          }
      })
  })
})();