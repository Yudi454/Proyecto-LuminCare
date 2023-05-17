const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    // window.location.href = './login.html'
    
}
else{
    dropUsuario.style.display = 'block';
    // divIngreso.style.display = 'none';
    divRegistro.style.display = 'none'; 
    divIngreso.style.display = 'none';
    divRegistro.style.display = 'none';
    

}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    dropUsuario.style.display = 'none';
    // divIngreso.style.display = 'none';
    divRegistro.style.display = 'block';
    // window.location.href = './login.html'

})
