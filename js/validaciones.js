document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Validar Nombre (solo letras y espacios)
        const nombre = document.getElementById("nombre").value.trim();
        const nombreRegex = /^[a-zA-Z\s]+$/;
        if (!nombreRegex.test(nombre)) {
            alert("El nombre solo puede contener letras y espacios.");
            valid = false;
        }

        // Validar Correo Electrónico
        const email = document.getElementById("email").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert("Ingrese un correo electrónico válido.");
            valid = false;
        }

        // Validar Mensaje (no vacío)
        const mensaje = document.getElementById("mensaje").value.trim();
        if (mensaje === "") {
            alert("El mensaje no puede estar vacío.");
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Evita que se envíe el formulario si hay errores
        }
    });
});
