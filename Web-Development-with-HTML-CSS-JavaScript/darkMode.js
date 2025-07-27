document.getElementById('dayBtn').addEventListener('click', lightMode);
document.getElementById('nightBtn').addEventListener('click', darkMode);

function lightMode() {
  document.body.classList.remove('dark');
}

function darkMode() {
  document.body.classList.add('dark');
}