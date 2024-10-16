let allRegistrationData = [];

const signupForm = document.querySelector(".signup-form");
const allInputs = signupForm.querySelectorAll("input");
const textareaEl = signupForm.querySelector("textarea");

allRegistrationData = getAllData("allRegistrationData");

// signup coding
signupForm.onsubmit = (e) => {
    e.preventDefault();

    // check email duplicate email
    const isUserExists = allRegistrationData.filter(({ email, mobile }) => email == allInputs[1].value ||
        mobile == allInputs[3].value);

    if (isUserExists && isUserExists.length > 0) return Swal.fire({
        title: "User Already Exists",
        text: "Email and mobile should be unique, or try login again!",
        icon: "warning"
    });

    allRegistrationData.push({
        fullName: allInputs[0].value,
        email: allInputs[1].value,
        password: btoa(allInputs[2].value),
        mobile: allInputs[3].value,
        address: textareaEl.value,
        state: allInputs[4].value,
        country: allInputs[5].value,
        pincode: allInputs[6].value
    });

    // insert data in localstorage
    insertData("allRegistrationData", allRegistrationData);
    Swal.fire({
        title: "Registration done successfully",
        text: "Login now...",
        icon: "success"
    });
}