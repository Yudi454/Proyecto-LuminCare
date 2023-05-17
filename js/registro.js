const inputNombre = document.getElementById("nombreusuario");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("correo");
const inputContraseña = document.getElementById("contraseña");
const inputContraseña2 = document.getElementById("contraseña2");
const form = document.querySelector("form");
const usuarioRechazado = document.getElementById("usuarioRechazado");
const contrasenaRepetida = document.getElementById("contrasenaRepetida")
 

form.addEventListener("input", function(){
  const valorNombre = inputNombre.value.trim()
  const valorApellido = inputApellido.value.trim()
  const valorCorreo = inputEmail.value.trim()
  const valorContraseña = inputContraseña.value.trim()
  const valorContraseña2 = inputContraseña2.value.trim()
  const patronCorreo = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const patronContraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
  const patronLetras = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
  inputContraseña.setAttribute("type" , "password")

  if(valorNombre.length <2 || valorNombre.length > 20 || !patronLetras.test(valorNombre)){
    inputNombre.setCustomValidity("El valor ingresado debe de ser mayor a 2, menor a 20 y debe de contener solo letras")
  } else {
    inputNombre.setCustomValidity("")
  }
  if(valorApellido.length <2 || valorApellido.length >20 || !patronLetras.test(valorApellido)){
    inputApellido.setCustomValidity("El valor ingresado debe de ser mayor a 2, menor a 20 y debe de contener solo letras")
  } else{
    inputApellido.setCustomValidity("")
  }
  if(valorCorreo < 3 || valorCorreo > 30 || !patronCorreo.test(valorCorreo)){
     inputEmail.setCustomValidity("El valor ingresado debe de ser mayor a 3, menor a 30 y debe de contener un @ con una direccion de correo electronico");
  } else {
     inputEmail.setCustomValidity("");
  }
  if(valorContraseña.length < 8 || valorContraseña.length > 16 || !(patronContraseña.test(valorContraseña)) ){
     inputContraseña.setCustomValidity("La contraseña ingresada debe de ser mayor a 8, menor a 16 y debe de contener por lo menos una letra mayuscula, una minuscula y un numero")
  } else {
     inputContraseña.setCustomValidity("")
  }
  if(valorContraseña2.length < 8 || valorContraseña2.length > 16 || !(patronContraseña.test(valorContraseña2)) ){
     inputContraseña2.setCustomValidity("La contraseña ingresada debe de ser mayor a 8, menor a 16 y debe de contener por lo menos una letra mayuscula, una minuscula y un numero")
  } else {
     inputContraseña2.setCustomValidity("")
  }
 }
  
 )

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
  } 
  console.log(usuario);
 
}});
