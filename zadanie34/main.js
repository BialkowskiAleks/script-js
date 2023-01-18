var string1 = "Uwielbiam JavaScript";
var string2 = "Jestem świetnym programistą";

function compareStrings(str1, str2) {
	if (str1.length > str2.length) {
		return str1;
	} else {
		return str2;
	}
}

console.log(compareStrings(string1, string2));
