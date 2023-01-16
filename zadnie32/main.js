let num1 = 6;
let num2 = 10;

function GreaterNumber(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
}
let result = GreaterNumber(num1, num2);

console.log(result);
