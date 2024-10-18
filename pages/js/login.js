let loginForm = document.querySelector(".login-form");
let allInputs = loginForm.querySelectorAll("input");
let loginBtn = loginForm.querySelector("button");

const allRegistrationData = getAllData("allRegistrationData");

loginForm.onsubmit = (e) => {
    e.preventDefault();

    let isUserExists = allRegistrationData.filter((data) => data.email == allInputs[0].value &&
        data.password == btoa(allInputs[1].value));

    if (isUserExists.length === 0) {
        return Swal.fire({
            title: 'Login Failed',
            text: "Invalid credentials, Please register first!",
            icon: "warning"
        });
    } else {
        insertData("__au__", allInputs[0].value);
        loginBtn.disabled = true;
        loginBtn.innerHTML = "Logging in...";
        loginForm.reset();
        setTimeout(() => {
            window.location = "../index.html";
            loginBtn.disabled = false;
            loginBtn.innerHTML = "Login Now";
        }, 400);
    }
}