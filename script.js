toggleDarkMode = () => {
  let body = document.body;
  body.classList.toggle("dark-mode");
  let btn = document.getElementById("moon");
  btn.innerText = body.classList.contains("dark-mode")? '🌕' : '🌑';
}