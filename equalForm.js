var string = "4+5*9";
var stringSpl = string.split('');

calc = '';
arr = [];
total = null;

for (var i = 0; i<stringSpl.length; i++) {
    if (stringSpl[i].match(/[\d\.]/)) {
        calc = calc + stringSpl[i];
        if (i === (stringSpl.length - 1)) {
            arr.push(parseInt(calc));
            calc = '';
        }
    }
    else if (stringSpl[i].match(/[*+\-/()]/)) {
        arr.push(parseInt(calc));
        calc = '';
        arr.push(stringSpl[i]);
    }
};

// Equaling Function w/ Order of Operations

var equalingFunction = function () {
while (arr.length > 1) {
  for (var i = 0; i<arr.length; i++) {
  	console.log(arr[i]);

    // Multiplication & Division Pass

    if (arr[i] === '*' || arr[i] === '/') {
      if (arr[i] === '*') {
        arr[i] = arr[i-1] * arr[i+1];
        arr.splice(i+1, 1);
        arr.splice(i-1, 1);
      }
      else if (arr[i] === '/') {
        arr[i] = arr[i-1] / arr[i+1];
        arr.splice(i+1, 1);
        arr.splice(i-1, 1);
      }
    }

    // Addition & Subtraction Pass

    if (arr.indexOf('*') < 0 && arr.indexOf('/') < 0) {

      if (arr[i] === '+' || arr[i] === '-') {
        if (arr[i] === '+') {
          arr[i] = arr[i-1] + arr[i+1];
          arr.splice(i+1,1);
          arr.splice(i-1,1);
        }
        else if (arr[i] === '-') {
          arr[i] = arr[i-1] - arr[i+1];
          arr.splice(i+1,1);
          arr.splice(i-1,1);
        }
      }
    }
  }
  if (arr.length === 1) {
    total = arr[0].toString();
    $('.display').html(total);
  }
}
};
