
const inputNombre = document.getElementById("name");
const inputApellido = document.getElementById("surname");
const inputEmail = document.getElementById("email");
const inputContraseña = document.getElementById("password");
const form = document.querySelector("form")
const usuarioRechazado = document.getElementById("usuarioRechazado")

const admin = {
    nombre: "admin",
    apellido: "admin",
    email: "admin@admin.com",
    contraseña: "Admin123",
}

let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
arrayUsuarios[0] = admin;
localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios));


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valorNombre = inputNombre.value;
    let valorApellido = inputApellido.value;
    let valorEmail = inputEmail.value;
    let valorContraseña = inputContraseña.value;

    const usuario = {
        nombre: valorNombre.toLowerCase(),
        apellido: valorApellido.toLowerCase(),
        email: valorEmail.toLowerCase(),
        contraseña: valorContraseña,
    }

    if (valorNombre.trim().length > 2 && valorNombre.trim().length < 21
        && valorApellido.trim().length > 2 && valorApellido.trim().length < 21) {
        let bandera = false;    
        for (let i = 1; i < arrayUsuarios.length; i++) {
            if ((usuario.nombre == arrayUsuarios[i].nombre) && (usuario.apellido == arrayUsuarios[i].apellido)
                && (usuario.email == arrayUsuarios[i].email)) {
                alert("El Usuario ya está registrado");
                form.reset();
                bandera = true;
                break;
            }
        } if (bandera === false){
            arrayUsuarios.push(usuario);
            localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios));
            form.reset();
            alert("Usuario creado correctamente");
        }
    } else {
        usuarioRechazado.innerHTML = "<p>El usuario ya existe o alguno de los campos es incorrecto. Intente nuevamente</p>";
        form.reset();
    }
    console.log(usuario);
});