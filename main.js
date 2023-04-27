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
          //Inicio alerta de sweet alert
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
          vaciardatos();
          //Fin alerta de sweet alert
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
//Fin script de bootstrap para validar el formulario

//Inicio funcion para borrar datos luego de enviar el formulario
function vaciardatos() {
  let codigoInput = document.getElementById("codigo");
  codigoInput.value = "";
  let codigoNombre = document.getElementById("name");
  codigoNombre.value = "";
  let codigoDescripcion = document.getElementById("descripcion");
  codigoDescripcion.value = "";
  let codigoURL = document.getElementById("url");
  codigoURL.value = "";
}
//Fin funcion para borrar datos luego de enviar el formulario


//Inicio generador de numero random
const numerosGenerados = []

function numerorandom() {
  let numerorandom = Math.floor(Math.random() * 999999)

  while (numerosGenerados.includes(numerorandom)) {
    numerorandom = Math.floor(Math.random() * 999999)
  }

  numerosGenerados.push(numerorandom)
  return numerorandom
}

numerorandom()
numerorandom()

console.log(numerosGenerados)
//Fin generador de numero random
