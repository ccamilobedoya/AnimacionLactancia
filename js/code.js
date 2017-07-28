$(document).ready(function(){

  $('.alveolos').click(function(){
    ChangeText(
      'Alveolos',
      'La leche se produce en los alveolos y se fabrica a partir de los nutrientes y el suero que obtienen de la sangre. Los alveolos contienen receptores de prolactina, la cual se produce cuando la mama es estimulada (bien por la succión del bebé o la extracción de la leche por parte de la madre). Esos receptores, a su vez, desencadenan la producción de la leche. Cada alveolo está rodeado de una banda de células mioepliteliales que se contraen en respuesta a la producción de oxitocina durante la succión. El sistema de los alveolos y los ductos se dice que es similar a un “racimo de uvas”, donde los alveolos son las uvas y los ductos son los tallos. Los “racimos” o grupos se llaman lóbulos.'
    );
  });

  $('.adiposo').click(function(){
    ChangeText(
      'Tejido Adiposo o Cubierta Grasa del Pectoral',
      'El tejido adiposo rodea todo el sistema de conductos de la leche y las glándulas. Cuanto más suave son los pechos, más grasa contienen. Por otra parte los pechos de las mujeres jóvenes suelen ser más firmes porque contienen sobre todo tejido glandular (glándulas de producción de la leche). La función de la grasa es la de proteger contra golpes y determinan el tamaño y la forma de la mama pero no tiene ninguna influencia en la calidad o cantidad de leche que se produce.'
    );
  });

  $('.areola').click(function(){
    ChangeText(
      'Areola',
      'La areola se oscurece durante el embarazo. Se cree que esto sucede para ayudar al recién nacido a localizar la zona donde debe agarrarse al pecho puesto que su vista no está totalmente desarrollada al nacer. Cuando el bebé se alimenta inserta el pezón y la areola en su boca. El pezón de la madre se alarga hasta aproximadamente el doble de su longitud normal y (con la areola) es comprimido entre la lengua y el paladar, lo que estimula la liberación de prolactina (que estimula la producción de leche) y oxitocina (que estimula la eyección de la leche).'
    );
  });

  $('.ligamentos').click(function(){
    ChangeText(
      'Ligamentos Suspensorios',
      'La mama se mantiene en su posición por el ligamento suspensorio de Cooper, que es una fascia fibrosa que discurre entre la piel hasta la aponeurosis del pectoral mayor transversalmente proporcionando un armazón fibroso que sostiene a los lóbulos mamarios.'
    );
  });

  $('#ConductosRelleno').click(function(){
    ChangeText(
      'Ducto Lácteo',
      'La mama esta rodeada de estos conductos que finalizan en el pezón, y tienen como función llevar la leche materna, estos solo están activos durante el embarazo y lactancia.'
    );
  });

  $('.musculo').click(function(){
    ChangeText(
      'Músculo Pectoral Principal',
      'Las mamas se ubican sobre el músculo pectoral mayor y por lo general se extienden verticalmente desde el nivel de la segunda costilla, hasta la sexta o séptima.5​ En sentido horizontal, se extiende desde el borde del hueso esternón hasta una línea media, imaginaria, de la axila. A nivel del extremo anterior más distal del tórax, a la altura del tercer espacio intercostal, la piel se especializa para formar la areola y el pezón.'
    );
  });

  Animate();

});

function Animate () {
  anime({
    targets: '.alveolos',
    scale: [
      {value: 1.05, duration: 3000, elasticity: 0, easing: 'easeInSine'},
      {value: 1, duration: 3000, elasticity: 0, easing: 'easeOutSine'}
    ],
    translateX: [
      {value: -8, duration: 3000, elasticity: 0, easing: 'easeInSine'},
      {value: 0, duration: 3000, elasticity: 0, easing: 'easeOutSine'}
    ],
    translateY: [
      {value: -12, duration: 3000, elasticity: 0, easing: 'easeInSine'},
      {value: 0, duration: 3000, elasticity: 0, easing: 'easeOutSine'}
    ],
    loop: true
  });
  setTimeout(function(){
    AnimateConductores();
  }, 3000);
}

function AnimateConductores () {
  $('#ConductosRelleno').addClass('conductos-leche');

  setTimeout(function(){
    $('#ConductosRelleno').removeClass('conductos-leche');
  }, 3500);

  setTimeout(function(){
    AnimateConductores();
  }, 6000);
}

function ChangeText (subtitle, paragraph) {
  // Animation for paragraph
  anime({
    targets: '#text-frame .larget',
    opacity: [
      {value: 0, duration: 150, delay: 0, easing: 'easeInOutQuad'},
      {value: 1, dutation: 700, delay: 800, easing: 'easeInOutQuad'}
    ]
  });
  // Animation for subtitle
  anime({
    targets: '#text-frame .subt',
    opacity: [
      {value: 0, duration: 200, delay: 0, easing: 'easeInOutQuad'},
      {value: 1, dutation: 500, delay: 200, easing: 'easeInOutQuad'}
    ]
  });
  // Animation for the hr bar
  anime({
    targets: '#text-frame hr',
    opacity: [
      {value: 0, duration: 150, delay: 0, easing: 'easeInOutQuad'},
      {value: 1, dutation: 700, delay: 200, easing: 'easeInOutQuad'}
    ]
  });
  // When transparent, change the text
  setTimeout(function(){
    $('.subt').text(subtitle);
    $('.larget').text(paragraph);
  }, 175);
}
