
const inputEmail = document.getElementById("correo");
const inputContraseña = document.getElementById("password");
const form = document.querySelector("form");
const usuarioRechazado = document.getElementById("usuarioRechazado");
const divIngreso = document.querySelector('#btn-ingreso')
const divRegistro =  document.querySelector('#btn-registro')
const liAdministracion = document.getElementById('#li-Administracion')
const dropUsuario = document.getElementById("dropdown-usuario")
const dropNombre = document.getElementById("drop-nombre")
const dropEmail = document.getElementById("drop-correo")


let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let i = 0;
    let valorEmail = inputEmail.value;
    let valorContraseña = inputContraseña.value;
    let bandera = false;

    for( i = 0 ; i < arrayUsuarios.length ; i++){
        if (valorEmail === arrayUsuarios[i].email && valorContraseña === arrayUsuarios[i].contraseña){
            bandera = true;            
            break;
        }
    }    
    
    if (bandera === true){
        form.reset();
         alert("USUARIO ENCONTRADO");
        dropUsuario.style.display = 'block';
        dropNombre.textContent = arrayUsuarios[i].nombre;
        dropEmail.textContent = arrayUsuarios[i].email;
        usuarioRechazado.innerHTML = "";
        localStorage.setItem('login_success', JSON.stringify(arrayUsuarios))
        window.location.href = '../index.html'
       

    } else{
        usuarioRechazado.innerHTML = "<p>Contraseña incorrecta</p>";
    }
    if ( valorEmail === arrayUsuarios[0].email && valorContraseña === arrayUsuarios[0].contraseña) {
        
        window.location.href = './Administracion.html'
        
    } 

    
});
