const tekst = document.getElementById("tekst");
const dodaj = document.getElementById("dodaj");
const usun = document.getElementById("usun");

function addText() {
	tekst.innerHTML = "Przykładowy tekst";
}

function removeText() {
	tekst.innerHTML = "";
}

dodaj.addEventListener("click", addText);
usun.addEventListener("click", removeText);
