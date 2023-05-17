
const inputEmail = document.getElementById("correo");
const inputContraseña = document.getElementById("password");
const form = document.getElementById("formulario-login")
const usuarioRechazado = document.getElementById("usuarioRechazado");
const divIngreso = document.querySelector('#btn-ingreso')
const divRegistro =  document.querySelector('#btn-registro')




let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

let arrayUsuario = []



form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valorEmail = inputEmail.value;
    let valorContraseña = inputContraseña.value;
    let bandera = false;

    let usuarioEncontrado = 0
    
    for(let i = 0 ; i < arrayUsuarios.length ; i++){
        if (valorEmail === arrayUsuarios[i].email && valorContraseña === arrayUsuarios[i].contraseña){
            usuarioEncontrado = arrayUsuarios[i] 
            bandera = true;            
            break;
        }
    }    

    if (bandera === true){
        arrayUsuario.push(usuarioEncontrado)
        form.reset();
         alert("USUARIO ENCONTRADO");
        
        localStorage.setItem('login_success', JSON.stringify(arrayUsuario))
        window.location.href = '../index.html'
       

    } else{
        usuarioRechazado.innerHTML = "<p>Contraseña incorrecta</p>";
        
    }
    
});

