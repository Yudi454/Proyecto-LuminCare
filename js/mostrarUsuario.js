const usuariosLogeado = JSON.parse(localStorage.getItem("login_success"))

const dropUsuario = document.getElementById("dropdown-usuario")
const dropNombre = document.getElementById("drop-nombre")
const dropEmail = document.getElementById("drop-correo")
const botonRegistro = document.getElementById("boton-registro")
const botonIngreso = document.getElementById("boton-ingreso")
const liAdministracion = document.getElementById("li-Administracion")

 if(usuariosLogeado) {
    usuariosLogeado.forEach(() => {
    
        botonIngreso.style.display = 'none'
        botonRegistro.style.display = 'none'
        dropUsuario.style.display = 'block';
        
            dropNombre.textContent = usuariosLogeado[0].nombre;
            dropEmail.textContent = usuariosLogeado[0].email;
    
      });
      
    }