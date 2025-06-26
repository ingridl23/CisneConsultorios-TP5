document.addEventListener('DOMContentLoaded', () => {
  // Simula una comprobación de sesión:
  const isLoggedIn = sessionStorage.getItem('isAdmin') === 'true';
  if (!isLoggedIn) {
    // Si no está autenticado, volver al home
    window.location.replace('index.html');
    return;
  }

  // Botón de logout
  const btnLogout = document.getElementById('btn-logout');
  btnLogout.addEventListener('click', () => {
    sessionStorage.removeItem('isAdmin');
    window.location.replace('index.html');
  });
});
