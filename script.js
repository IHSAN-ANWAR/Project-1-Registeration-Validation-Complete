// 




document.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;

    const fullnameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(currentelement => {
        currentelement.textContent = "";
    });

    let isValid = true;

    if (!fullnameRegex.test(fullname)) {
        document.getElementById("fullnameerror").textContent = "*Enter a valid full name ";
        isValid = false;
    }

    if (!usernameRegex.test(username)) {
        document.getElementById("usernameerror").textContent = "*Enter a valid username (3-20 characters)";
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById("emailerror").textContent = "*Enter a valid email address";
        isValid = false;
    }

    if (!passwordRegex.test(password)) {
        document.getElementById("passworderror").textContent = "*Enter a strong password (min 8 characters, uppercase, lowercase, number, special character)";
        isValid = false;
    }

    if (password !== confirmpassword) {
        document.getElementById("confirmpassworderror").textContent = "*Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        let userData = [];
        let form = document.querySelectorAll("form input");
        Array.from(form).forEach(currentelement => userData.push(currentelement.value));
        Array.from(form).forEach(currentelement => { currentelement.value = ""; });
        alert("Registered Successfully!");
    }
});