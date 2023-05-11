
const inputEmail = document.getElementById("email");
const inputContraseña = document.getElementById("password");
const form = document.querySelector("form");
const usuarioRechazado = document.getElementById("usuarioRechazado");

let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
   
    let valorEmail = inputEmail.value;
    let valorContraseña = inputContraseña.value;
    let bandera = false;

    for(let i = 0 ; i < arrayUsuarios.length ; i++){
        if (valorEmail === arrayUsuarios[i].email && valorContraseña === arrayUsuarios[i].contraseña){
            bandera = true;            
            break;
        }
    }    
    if (bandera === true){
        form.reset();
        alert("USUARIO ENCONTRADO");
        usuarioRechazado.innerHTML = "";
    } else{
        usuarioRechazado.innerHTML = "<p>Contraseña incorrecta</p>";
    }

});
