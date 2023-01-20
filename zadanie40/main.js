function displayData() {
	let name = document.getElementById("name").value;
	let surname = document.getElementById("surname").value;
	let phone = document.getElementById("phone").value;

	document.getElementById("name-output").innerHTML = name;
	document.getElementById("surname-output").innerHTML = surname;
	document.getElementById("phone-output").innerHTML = phone;
}
