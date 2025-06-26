
document.addEventListener('DOMContentLoaded', () => {
  const resetForm = document.getElementById('reset-form');
  const resetBtn  = document.getElementById('btn-reset');

  resetForm.addEventListener('submit', e => {
    e.preventDefault();

    // Validación simple: campo email y password no vacíos
    const email    = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Limpiar estados previos
    resetBtn.classList.remove('click', 'error');

    if (!email || !password) {
      // Error: muestra la X
      resetBtn.classList.add('error');
      setTimeout(() => {
        resetBtn.classList.remove('error');
      }, 2000);
    } else {
      // Éxito: muestra el ✓
      resetBtn.classList.add('click');
      setTimeout(() => {
        resetBtn.classList.remove('click');
        resetForm.reset();
        // Aquí rediriges o muestras un mensaje
      }, 2000);
    }
  });
});


