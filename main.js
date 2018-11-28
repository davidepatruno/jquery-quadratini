var contatorerosso = 0;
var contatoreverde = 0;
document.getElementById('rossi').innerHTML = contatorerosso;
document.getElementById('verdi').innerHTML = contatoreverde;

$('.quadrato').click(function() {
  var controllo = $(this).hasClass('r');
  console.log(controllo);
  if (controllo == true) {
    $(this).css('background-color','red');
    contatorerosso++;
    document.getElementById('rossi').innerHTML = contatorerosso;
  }
  else {
    $(this).css('background-color','green');
    contatoreverde++;
    document.getElementById('verdi').innerHTML = contatoreverde;
  }
});
