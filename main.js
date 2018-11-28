$('.quadrato').click(function() {
  var controllo = $(this).hasClass('r');
  console.log(controllo);
  if (controllo == true) {
    $(this).css('background-color','red');
  }
  else {
  $(this).css('background-color','green');
  }
});
