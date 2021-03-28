function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');

	var coruser = "test"
	var corpass = "123"

	if(user.value == coruser) {

		if(pass.value == corpass){

			window.alert("You are logged in as " + user.value);
			window.open("https://www.wilmu.edu/mywilmu/index.aspx")
		}

		else {

			window.alert("Incorrect username or password! ");
		}

	}

	else {

		window.alert("Incorrect username or password! ");
	}
}