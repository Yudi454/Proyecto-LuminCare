//Inicio script de bootstrap para validar el formulario
(() => {
    'use strict'
    
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          document.getElementById("id-form").addEventListener("submit", function(event) {
            event.preventDefault(); 
          });
          
        } else{
          //Inicio alerta de sweet alert
          swal({ 
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
          vaciardatos()
          //Fin alerta de sweet alert
        }
        
        form.classList.add('was-validated')
      }, false)
    })
  })()
  //Inicio script de bootstrap para validar el formulario
  
  
      function vaciardatos () {
      let codigoInput = document.getElementById("codigo")
      codigoInput.value = "" 
      let codigoNombre = document.getElementById("name")
      codigoNombre.value = ""
      let codigoDescripcion = document.getElementById("descripcion")
      codigoDescripcion.value = ""
      let codigoURL = document.getElementById("url")
      codigoURL.value = ""
      }