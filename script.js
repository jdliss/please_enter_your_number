$(document).ready(function() {
  $('#number').text(generate());

  $('#yes').on('click', function() {
    $('#prompt').html("<h3>Thank You.</h3>");
  });
    
  $('#no').on('click', function() {
    $('#number').text(generate());
  });

});

function randomThree() {
  return Math.floor(Math.random() * (999 - 100 + 1) + 100);  
}

function randomFour() {
  return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);  
}

function generate() {
  return randomThree() + "-" + randomThree() + "-" + randomFour()
}

