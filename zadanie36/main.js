function checkNumbers(num1, num2) {
	if (num1 === 20 || num2 === 20 || num1 + num2 <= 20) {
		return true;
	} else {
		return false;
	}
}

console.log(checkNumbers(10, 10)); //  true
console.log(checkNumbers(25, 5)); //  false
