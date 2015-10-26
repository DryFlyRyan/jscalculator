$(document).ready(function () {
// console.log("document ready");
var display = '0';
var input1 = null;
var input2 = null;
var operation = '';
var totaled = false;

$('.display').html(display);

var concatNumberEnd = function (a) {
  // console.log("function!");
  display = display + a;
  pushDisplay();
};

var concatNumberStart = function (a) {
  // console.log("function!");
  display = a + display;
  pushDisplay();
};

var functPress = function (a) {
  input1 = display;
  display = a;
};

var initialOperation = function (a) {
  input1 = parseInt(display);
  // console.log("idCall = " + a);
  // console.log("input = " + input1);
  display = a;
  operation = a;
  pushDisplay();
};

var operationRun = function (a, b){
  if (operation === '+') {
    input2 = b.toString();
    input1, display = a + b;
    pushDisplay();
  } else if (operation === '-') {
    input2 = b.toString();
    input1, display = a - b;
    pushDisplay();
  } else if (operation === '*') {
    input2 = b.toString();
    input1, display = a * b;
    pushDisplay();
  } else if (operation === '/') {
    input2 = b.toString();
    input1, display = a / b;
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
  console.log('num-btn press');
  var idCall = $(this).find('a').attr('id');
  var displayInt = parseInt(display);
  // console.log(displayInt);
  // console.log(displayInt.type() );
  var negative = function () {
    displayInt = dispNum * -1;
    display = dispNum.toString();
    pushDisplay();
  }

  if (display === "0"
  // || (!(isNumeric(display)))
) {
    console.log('first if');
    display = idCall;
    pushDisplay();
  } else if (idCall === "-/+") {
    console.log('negative if');
    if (display.indexOf('-') > 0) {
      return;

    } else {
      console.log('negative else');
      negative();
    }
  } else if (idCall === ".") {
      if (display.indexOf('.') > 0) {
        return;
      } else {
        concatNumberEnd(idCall);
      }
  } else {
    console.log('num-button else');
    concatNumberEnd(idCall);
  }
});

$('.operation-btn').click(function () {
  var idCall = $(this).find('a').attr('id');
  // console.log(idCall);

  if (input1 === null) {
    switch(idCall) {

      case 'clear':
      display = "0";
      input1 = null;
      totaled = false;
      pushDisplay();
      break;
      case '=':
      return;
      break;

      case '%':
      if (input1 === null) {
        input1 = parseInt(display);
        input1 = input1 * 100;
        display = idCall + input1.toString();
        pushDisplay();
      } else {
        input2 = parseInt(display);
        input2 = input2 * 100;
        display = idCall + input2.toString();
        pushDisplay();
      }
      break;
      default:
      console.log('default');
      initialOperation(idCall);
      break;

    }
  } else {
    switch(idCall) {

      case 'clear':
      display = "0";
      operator = '';
      input1 = null;
      input2 = null;
      totaled = false;
      pushDisplay();
      break;

      default:
      break;


    }
  }
});





});
