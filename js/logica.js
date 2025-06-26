/* logica.js unificado: menú, formularios, modales y observers
   Basado en tu logica.js original */

document.addEventListener("DOMContentLoaded", () => {
  // 1) Toggle del menú burger
  const btnMenu = document.querySelector(".btn_menu");
  const menuList = document.querySelector(".lista-container-nav");
  btnMenu.addEventListener("click", () => {
    menuList.classList.toggle("show");
  });

  // 1.1) Cerrar nav al hacer clic en cualquier opción del menú
  const navLinks = document.querySelectorAll(".lista-container-nav li a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuList.classList.remove("show");
    });
  });

  // 2) Formulario de contacto
  const contactForm = document.querySelector("#modal .form");
  const contactSubmit = contactForm.querySelector("#btn");
  const contactError = contactForm.querySelector(".error-msg");
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const oculto = document.getElementById("oculto").value.trim();

    // restablecer estados
    contactSubmit.classList.remove("click", "error");
    contactError.classList.remove("show");

    // defensa contra bots
    if (oculto !== "") return;

    // validación
    if (!telefono || !email) {
      contactSubmit.classList.add("error");
      contactError.classList.add("show");
    } else {
      contactSubmit.classList.add("click");
      contactSubmit.disabled = true;
      setTimeout(() => {
        contactSubmit.classList.remove("click");
        contactSubmit.disabled = false;
        contactForm.reset();
      }, 2000);
    }
  });

  // 3) Abrir/cerrar modal de contacto
  document.querySelector(".btn-contact").addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("modal").classList.add("open");
    document.getElementById("overlay").classList.add("open");
  });
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("open");
    document.getElementById("overlay").classList.remove("open");
  });
  document.getElementById("overlay").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("open");
    document.getElementById("overlay").classList.remove("open");
  });

  // 4) Formulario de login ADMIN
  const adminForm = document.getElementById("form-admin");
  const adminSubmit = document.getElementById("btn-admin-send");
  const adminError = adminForm.querySelector(".error-msg");
  adminForm.addEventListener("submit", e => {
    e.preventDefault();
    const email2 = document.getElementById("email2").value.trim();
    const password = document.getElementById("password").value.trim();
    const oculto2 = document.getElementById("oculto2").value.trim();

    // restablecer estados
    adminSubmit.classList.remove("click", "error");
    adminError.classList.remove("show");

    // defensa contra bots
    if (oculto2 !== "") return;

    // validación
    if (!email2 || !password) {
      adminSubmit.classList.add("error");
      adminError.classList.add("show");
    } else {
      adminSubmit.classList.add("click");
      adminSubmit.disabled = true;
      setTimeout(() => {
        // Dentro del submit de adminForm, cuando sea válido:
         sessionStorage.setItem('isAdmin', 'true');


        window.location.href = "indexadmin.html";
      }, 800);
    }
  });

  // 5) Abrir/cerrar modal de admin
  document.querySelector(".btn-admin").addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("modal-admin").classList.add("open");
    document.getElementById("overlay-admin").classList.add("open");
  });
  document.getElementById("close-admin").addEventListener("click", () => {
    document.getElementById("modal-admin").classList.remove("open");
    document.getElementById("overlay-admin").classList.remove("open");
  });
  document.getElementById("overlay-admin").addEventListener("click", () => {
    document.getElementById("modal-admin").classList.remove("open");
    document.getElementById("overlay-admin").classList.remove("open");
  });

  // 6) Intersection Observer para animaciones
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.section-tittle, .prof-card, .card')
    .forEach(el => observer.observe(el));
});
