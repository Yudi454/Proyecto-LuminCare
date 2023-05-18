const user = JSON.parse(localStorage.getItem("login_success")) || false;
if (user) {
    dropUsuario.style.display = "block";
    botonRegistro.style.display = "none";
    botonIngreso.style.display = "none";

}

const logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  localStorage.removeItem("login_success");
  dropUsuario.style.display = "none";
  botonIngreso.style.display = "block";
  botonRegistro.style.display = "block";
  liAdministracion.style.display = "none";

  const location = window.location.href;
  if (location == "./index.html") {
    window.location.href = "./login.html";
  } else {
    window.location.href = "../html/login.html";
  }
});
