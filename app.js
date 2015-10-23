$(document).ready(function () {
alert("document ready")
var display = '0';
var input1 = null;
var input2 = null;
var operation = '';

$('.display').html(display);

var concatNumber = function (a) {
  // alert("function!");
  display = display + a;
  pushDisplay();
};

var functPress = function (a) {
  input1 = display;
  display = a;
}

var initialOperation = function (a) {
  input1 = parseInt(display);
  // alert("idCall = " + a);
  // alert("input = " + input1);
  display = a;
  operation = a;
  pushDisplay();
}

var operationRun = function (a, b){
  if (operation === '%') {
    input1 = parseInt(display);
    input1 = input1 * 100;
    display = operation + input1.toString();
    pushDisplay();
  }
}

// var secondaryOperation = function () {
//
// }

var pushDisplay = function () {
  $('.display').html(display);
}

$('.number-button').on('click', function () {
  var idCall = $(this).find('a').attr('id');
  var displayInt = parseInt(display);
  // alert(displayInt);
  // alert(displayInt.type() );
  var negative = function () {
    displayInt = dispNum * -1;
    display = dispNum.toString();
    pushDisplay();
  }

  if (display === "0") {
    display = "0";
    // alert('first if');
    display = idCall;
    pushDisplay();
  } else if (idCall === "-/+") {
    if (display.indexOf('-') > 0) {
      return;

    } else {
      // alert('negative else');
      negative();
    }
  } else if (idCall === ".") {
      if (display.indexOf('.') > 0) {
        return;
      } else {
        concatNumber(idCall);
      }
  } else if (isNaN(displayInt)) {
      display = idCall;
      pushDisplay();
  }
  else {
    concatNumber(idCall);
  }
});

$('.operation-btn').click(function () {
  var idCall = $(this).find('a').attr('id');

  switch(idCall) {

    case 'clear':
    display = "0";
    input1 = null;
    pushDisplay();
    break;
    case '=':

    if (input2.length) {
    input2 = parseInt(display);
    } else {
      return;
    }
    break;

    case '%':
    input1 = parseInt(display);
    input1 = input1 * 100;
    display = operation + input1.toString();
    pushDisplay();
    default:
    // alert('default');
    initialOperation(idCall);
    break;

  }
});





});
