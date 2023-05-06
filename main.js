//Inicio script de bootstrap para validar el formulario
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          document
            .getElementById("id-form")
            .addEventListener("submit", function (event) {
              event.preventDefault();
            });
        } else {
          event.preventDefault(); 
          //Inicio alerta de sweet alert
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
          crearproducto()
          agregarproducto()
          formularioproductos.reset()
          //Fin alerta de sweet alert
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
//Fin script de bootstrap para validar el formulario

let productos = []

const listaProductos = document.getElementById("listadeproductos");
let codigoInput = document.getElementById("codigo");
let codigocategoria = document.getElementById("categoria")
let codigoNombre = document.getElementById("name");
let codigoPrecio = document.getElementById("precio")
let codigoDescripcion = document.getElementById("descripcion");
let codigoURL = document.getElementById("url");
let formularioproductos = document.getElementById("id-form")


function crearproducto(){
  const nombre = codigoNombre.value
  const descripcion = codigoDescripcion.value
  const url = codigoURL.value
  const categoria = codigocategoria.value
  const codigo = codigoInput.value
  const precio = codigoPrecio.value

  const productos2 =  {codigo,nombre,precio,categoria,descripcion,url}

  console.log(productos2)

  productos.push(productos2)

  console.log(productos)  

  
}



function agregarproducto() {
  listaProductos.querySelector("tbody").innerHTML = "";

  productos.forEach((producto) => {
    const tr = document.createElement("tr")
    tr.innerHTML = `
    <th scope="row">${producto.codigo}</th>
    <td>${producto.categoria}</td>
    <td>${producto.nombre}</td>
    <td>$${producto.precio}</td>
    <td>${producto.descripcion}</td>
    <td>${producto.url}</td>
    `;
    listaProductos.querySelector("tbody").appendChild(tr)
  });

  localStorage.setItem("productos", JSON.stringify(productos));
}

const obtenerProductos = localStorage.getItem("productos");

if (obtenerProductos) {
  productos = JSON.parse(obtenerProductos);
  agregarproducto();
}