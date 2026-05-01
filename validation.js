function validateForm()
{
	var name = document.getElementById("name").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var mobile = document.getElementById("mobile").value.trim();
    var address = document.getElementById("address").value.trim();
    var country = document.getElementById("country").value;
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var errBox = document.getElementById("errorMsg");

    errBox.innerHTML = "";

    // (a) None of the fields should be empty
    if (name === "" || !gender || mobile === "" || address === "" || country === "" || email === "" || password === "")
	{
        errBox.innerHTML = "All fields are required.";
        return false;
    }

    // (b) Mobile number should be a 10-digit valid mobile number
    var mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile))
	{
        errBox.innerHTML = "Enter a valid 10-digit mobile number.";
        return false;
    }

    // (c) Email should have a valid format
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email))
	{
        errBox.innerHTML = "Enter a valid email address.";
        return false;
    }

    // (d) Password length must be between 6–15
    if (password.length < 6 || password.length > 15)
	{
        errBox.innerHTML = "Password length must be between 6 and 15 characters.";
        return false;
    }

    alert("Form submitted successfully!!");
    return true;
}