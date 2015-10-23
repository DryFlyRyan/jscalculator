$(document).ready(function () {

var display = "0";

$('.display').html(display);

$('.num-input').click(function () {
  var idCall = $(this).attr('id');
  if (display === "0") {
    // alert(idCall);
    display = "";

    if (idCall === "1") {
      $(display).concat("1");
      // $('.display').text("not changing");
      alert('if stmt');
    }

    switch (idCall) {

      case '2':
        display = display + '2';
        break;
      case '3':
        display = display + '3';
        break;
      case '4':
        display = display + '4';
        break;
      case '5':
        display = display + '5';
        break;
      case '6':
        display = display + '6';
        break;
      case '7':
        display = display + '7';
        break;
      case '8':
        display = display + '8';
        break;
      case '9':
        display = display + '9';
        break;
      case '0':
        display = display + '0';
        break;
      case '.':
        display = display + '.';
        break;
      case '-':
        display = '-' + display;
        break;
      default:
        break;
      }
    } else {
      switch (idCall) {
        case '1':
          $(display).append('1');
          break;
        case '2':
          display = display + '2';
          break;
        case '3':
          display = display + '3';
          break;
        case '4':
          display = display + '4';
          break;
        case '5':
          display = display + '5';
          break;
        case '6':
          display = display + '6';
          break;
        case '7':
          display = display + '7';
          break;
        case '8':
          display = display + '8';
          break;
        case '9':
          display = display + '9';
          break;
        case '0':
          display = display + '0';
          break;
        case '.':
          display = display + '.';
          break;
        case '-':
          display = '-' + display;
          break;
        default:
          break;
        }
      }
  $('.display').update(display);
});




});
