const carousel = document.querySelector('#carouselExample'); // Selecciona el elemento del carrusel con la clase "#carouselExample"//
carousel.options = 1500; // Ajusta la velocidad del carrusel en 1.5 segundos //

$(document).ready(function() {

  $('#enviarCorreo').click(function() {
      alert('El correo fue enviado correctamente');
  });

  $('#agregarFav').click(function() {
    alert('Agrega esta receta a tus favoritos');
  });

  $(".txtIngred").dblclick(function() {
    $(this).css({
    "color": "red",
    });
  });

  $(".txtPrep").dblclick(function() {
    $(this).css({
    "color": "red",
    });
  });
  
  $(document).ready(function() {
    $('.card-title').on('click', function() {
        $(this).next('.card-text').toggle();
    });
  });

});
