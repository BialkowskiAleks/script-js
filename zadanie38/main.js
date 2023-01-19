function calculate(num1, num2) {
	let addResult = num1 + num2;
	if (addResult >= 0) {
		console.log(`Wynik dodawania wynosi ${addResult}`);
	} else {
		console.log("Wynik jest nieprawidłowy");
	}

	let subtractResult = num1 - num2;
	if (subtractResult >= 0) {
		console.log(`Wynik odejmowania wynosi ${subtractResult}`);
	} else {
		console.log("Wynik jest nieprawidłowy");
	}
	let multiplyResult = num1 * num2;
	if (multiplyResult >= 0) {
		console.log(`Wynik mnożenia wynosi ${multiplyResult}`);
	} else {
		console.log("Wynik jest nieprawidłowy");
	}
}
calculate(10, 6);
