$(document).ready(function(){

  $('.objeto-1').click(function(){
    ChangeText('Objeto 1', 'lorem');
  });



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
    }, 150);
  }
});
