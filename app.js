$(document).ready(function () {
alert("document ready")
var display = "0";
var input1 = null;

$('.display').html(display);

var concatNumber = function (a) {
  // alert("function!");
  display = display + a;
  $('.display').html(display);
};

var functPress = function (a) {
  input1 = display;
  display = a;

}

$('.number-button').on('click', function () {
  var idCall = $(this).find('a').attr('id');
  var negative = function () {
    var dispNum = parseInt(display);
    dispNum = dispNum * -1;
    display = dispNum.toString();
    $('.display').html(display);
  }

  if (display === "0") {
    display = "";
    display = idCall;
    $('.display').html(display);
  } else if (idCall === "-") {
    if (display.indexOf('-') > 0) {
      negative();

    } else {
      display = idCall + display;
    }
  } else if (idCall === ".") {
      if (display.indexOf('.') > 0) {
        return;
      } else {
        concatNumber(idCall);
      }
  }  else {
    concatNumber(idCall);
  }
});

//     switch (idCall) {
//
//       case '2':
//         display = display + '2';
//         break;
//       case '3':
//         display = display + '3';
//         break;
//       case '4':
//         display = display + '4';
//         break;
//       case '5':
//         display = display + '5';
//         break;
//       case '6':
//         display = display + '6';
//         break;
//       case '7':
//         display = display + '7';
//         break;
//       case '8':
//         display = display + '8';
//         break;
//       case '9':
//         display = display + '9';
//         break;
//       case '0':
//         display = display + '0';
//         break;
//       case '.':
//         display = display + '.';
//         break;
//       case '-':
//         display = '-' + display;
//         break;
//       default:
//         break;
//       }
//     } else {
//       switch (idCall) {
//         case '1':
//           $(display).append('1');
//           break;
//         case '2':
//           display = display + '2';
//           break;
//         case '3':
//           display = display + '3';
//           break;
//         case '4':
//           display = display + '4';
//           break;
//         case '5':
//           display = display + '5';
//           break;
//         case '6':
//           display = display + '6';
//           break;
//         case '7':
//           display = display + '7';
//           break;
//         case '8':
//           display = display + '8';
//           break;
//         case '9':
//           display = display + '9';
//           break;
//         case '0':
//           display = display + '0';
//           break;
//         case '.':
//           display = display + '.';
//           break;
//         case '-':
//           display = '-' + display;
//           break;
//         default:
//           break;
//         }
//       }
//   $('.display').update(display);
// });




});
