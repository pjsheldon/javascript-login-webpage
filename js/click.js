function clicker() {
	
	var firstName = document.getElementById('firstName');
	var lastName = document.getElementById('lastName');
	var school = document.getElementById('school');

	var firstLetter = firstName.substring(0, 1);
	var secondLetter = lastName.substring(0, 1);
	var schoolWord = school.split(' ')[0];

	var newusername = firstLetter.value + secondLetter.value + schoolWord.value;
	
	window.alert("welcome!/nYour user name is: " + newusername.value);
	
}