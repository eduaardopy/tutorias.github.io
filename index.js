const form = document.querySelector('#loginForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = form.username.value;
  const password = form.password.value;


  if (username === "eduardopy" && password === "1") {
    window.location.replace("paginaPrincipal.html");
  }
});


