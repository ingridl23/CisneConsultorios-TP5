// Toggler de avatar dropdown + logout
const avatarDropdown = document.querySelector('.admin-avatar-dropdown');
const avatarImg      = document.getElementById('admin-avatar');
const logoutLink     = document.getElementById('btn-logout');

avatarImg.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();               // que no cierre al clicar fuera inmediatamente
  avatarDropdown.classList.toggle('open');
});

// Cerrar al clicar fuera
document.addEventListener('click', () => {
  avatarDropdown.classList.remove('open');
});

// Logout (dentro del sub-nav)
logoutLink.addEventListener('click', () => {
  sessionStorage.removeItem('isAdmin');
  window.location.replace('index.html');
});
