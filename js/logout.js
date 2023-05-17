


const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    // window.location.href = './login.html'

}
else{
    dropUsuario.style.display = 'block';
    botonRegistro.style.display = 'none'; 
    botonIngreso.style.display = 'none';
    liAdministracion.style.display = 'block';

}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    dropUsuario.style.display = 'none';
    botonIngreso.style.display = 'block';
    botonRegistro.style.display = 'block';
    liAdministracion.style.display = 'none';

})
