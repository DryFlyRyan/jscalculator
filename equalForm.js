var string = "4+5*9";
var stringSpl = string.split('');

input = '';
arr = [];

for (var i = 0; i<stringSpl.length; i++) {
    if (stringSpl[i].match(/[\d\.]/)) {
        input = input + stringSpl[i];
        if (i === (stringSpl.length - 1)) {
            arr.push(parseInt(input));
            input = '';
        }
    }
    else if (stringSpl[i].match(/[*+\-/()]/)) {
        arr.push(parseInt(input));
        input = '';
        arr.push(stringSpl[i]);
    }
};

while (arr.length > 1) {
for (var i = 0; i<arr.length; i++) {
	console.log(arr[i]);
	/*var operation = function (o) {
    arr[i] = arr[i-1] o arr[i+1];
    arr.splice(i-1, 1);
    arr.splice(i+1, 1);
	}*/
    if (arr[i] === '*' | arr[i] === '/') {
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

    else if (arr[i] === '+' | arr[i] === '-') {
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

console.log(arr);
