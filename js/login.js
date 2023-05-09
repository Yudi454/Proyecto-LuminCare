
const inputNombre = document.getElementById("name");
const inputApellido = document.getElementById("surname");
const inputEmail = document.getElementById("email");
const inputContraseña = document.getElementById("password");
const form = document.querySelector("form")
const usuarioRechazado = document.getElementById("usuarioRechazado")

let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let valorNombre = inputNombre.value;
    let valorApellido = inputApellido.value;
    let valorEmail = inputEmail.value;
    let valorContraseña = inputContraseña.value;

    const usuario={
        nombre: valorNombre.toLowerCase(),
        apellido: valorApellido.toLowerCase(),
        email: valorEmail.toLowerCase(),
        contraseña: valorContraseña,
    }

    if(valorNombre.trim().length > 2 && valorNombre.trim().length < 21 
    && valorApellido.trim().length > 2 && valorApellido.trim().length < 21){
        arrayUsuarios.push(usuario); 
        localStorage.setItem("usuarios",JSON.stringify(arrayUsuarios));
        form.reset();
        alert("usuario creado correctamente");       
    } else{
        usuarioRechazado.innerHTML = "<p>El usuario ya existe o alguno de los campos es incorrecto. Intente nuevamente</p>";
        form.reset();
    }
    console.log(usuario);
});