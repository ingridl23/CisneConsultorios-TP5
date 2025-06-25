document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.querySelector(".btn_menu");
    const menuList = document.querySelector(".lista-container-nav");

    btnMenu.addEventListener("click", () => {
        menuList.classList.toggle("show");
    });

    const formulario = document.querySelector(".form");
    const submitBtn = formulario.querySelector("#btn");
    const errorMsg = formulario.querySelector(".error-msg");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
       
        const inputOculto = document.getElementById("oculto").value.trim();

        submitBtn.classList.remove("click", "error");
        errorMsg.classList.remove("show");


    // Validar si el campo oculto fue completado (posible bot)
    if (inputOculto !== "") {
        console.warn("Posible bot detectado. Envío cancelado.");
        return; // Cancela el envío silenciosamente
    }



        if (telefono === "" || email === "" ) {
            // Mostrar cruz roja y mensaje de error
            submitBtn.classList.add("error");
            errorMsg.classList.add("show");
        } else {

        
            // Mostrar tilde verde
            submitBtn.classList.add("click");
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.classList.remove("click");
                submitBtn.disabled = false;
                formulario.reset();
            }, 2000);


        }
    });
});
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



  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2  // se activa cuando el 20% del elemento está en pantalla
    });

    // Observa títulos y iconos
    document.querySelectorAll('.section-tittle')
      .forEach(el => observer.observe(el));

      document.querySelectorAll('.prof-card')
          .forEach(card => observer.observe(card));

           document.querySelectorAll('.card')
          .forEach(card => observer.observe(card));
  });

