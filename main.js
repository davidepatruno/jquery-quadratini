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
      if (contatorerosso > 15) {
        document.getElementById('rossi').innerHTML = "15";
      }
      else {
        document.getElementById('rossi').innerHTML = contatorerosso;
      }
  }
  else {
    $(this).css('background-color','green');
    contatoreverde++;
    if (contatoreverde > 49) {
      document.getElementById('verdi').innerHTML = "49";
    }
    else {
      document.getElementById('verdi').innerHTML = contatoreverde;
    }
  }
  if ((contatorerosso >= 15) && (contatoreverde >= 49)) {
    alert('HAI COMPLETATO IL GIOCO');
  };
});
