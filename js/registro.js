const inputNombre = document.getElementById("name");
const inputApellido = document.getElementById("surname");
const inputEmail = document.getElementById("email");
const inputContraseña = document.getElementById("password");
const inputContraseña2 = document.getElementById("password2");
const form = document.querySelector("form");
const usuarioRechazado = document.getElementById("usuarioRechazado");
const contrasenaRepetida = document.getElementById("contrasenaRepetida")
 

const admin = {
  nombre: "admin",
  apellido: "admin",
  email: "admin@admin.com",
  contraseña: "Admin123",
};

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
  };

  if (
    valorNombre.trim().length > 2 &&
    valorNombre.trim().length < 21 &&
    valorApellido.trim().length > 2 &&
    valorApellido.trim().length < 21
  )
  
  
  {
    let bandera = false;
    
    if(inputContraseña2.value !== inputContraseña.value){
      bandera = true
      contrasenaRepetida.innerHTML =
      "<p>La contraseñas no coinciden</p>"
      } 
      else{
      for (let i = 1; i < arrayUsuarios.length; i++) {
        if (usuario.email === arrayUsuarios[i].email) {
        form.reset();
        bandera = true;
        usuarioRechazado.innerHTML =
        "<p>El usuario ya se encuentra registrado. Intente nuevamente</p>";
        break;
      }
    }
    if (bandera === false) {
      alert("Usuario creado correctamente");
      arrayUsuarios.push(usuario);
      localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios));
      form.reset();
    }
  } if (bandera){
    form.reset()
  }
  console.log(usuario);
 
}});
