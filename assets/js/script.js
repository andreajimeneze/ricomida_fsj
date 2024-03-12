// Ingredientes y Preparación: color rojo al hacer dobleclick

$("h5").on("dblclick", function () {
  $(this).css("color", "red");
});

// Alert enviar correo

$("#enviarCorreo").on("click", function () {
  alert("Correo enviado exitosamente");
});

// card text desaparece y aparece

  $(".card-text").on("click", function () {
    $(this).toggle("slow");
  });

  // Inicialización de tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

