document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".toggle-button");
    const contactDetails = document.querySelector(".contact-details");

    button.addEventListener("click", function() {
        if (contactDetails.style.display === "none" || contactDetails.style.display === "") {
            contactDetails.style.display = "block";
            button.textContent = "Ocultar Contacto";
        } else {
            contactDetails.style.display = "none";
            button.textContent = "Mostrar Contacto";
        }
    });
});
