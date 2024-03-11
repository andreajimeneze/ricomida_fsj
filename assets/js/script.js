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


