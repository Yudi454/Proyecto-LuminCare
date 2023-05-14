
const inputEmail = document.getElementById("email");
const inputContraseña = document.getElementById("password");
const form = document.querySelector("form");
const usuarioRechazado = document.getElementById("usuarioRechazado");
const divIngreso = document.getElementById("btn-ingreso")
const divRegistro =  document.getElementById("btn-registro")
const dropUsuario = document.getElementById("dropdown-usuario")
const dropNombre = document.getElementById("drop-nombre")
const dropEmail = document.getElementById("drop-email")


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
        // divIngreso.style.display = 'none';
        divRegistro.style.display = 'none';
        dropNombre.textContent = arrayUsuarios[i].nombre;
        dropEmail.textContent = arrayUsuarios[i].email;
        usuarioRechazado.innerHTML = "";

    } else{
        usuarioRechazado.innerHTML = "<p>Contraseña incorrecta</p>";
    }

});
