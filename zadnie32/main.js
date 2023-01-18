let number1 = 2;
let number2 = 5;

function greaterNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
let result = greaterNumber(number1, number2);

console.log(result);
