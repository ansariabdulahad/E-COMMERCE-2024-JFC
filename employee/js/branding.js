// read localstorage data of branding details
// allBrandingDetailsData = getAllData("allBrandingDetailsData");

// start branding code
const createBrandingFunc = (link) => {
    dynamic_link = link;

    let brandingForm = document.querySelector(".branding-form");
    let allInputs = brandingForm.querySelectorAll("input");
    let allTextareas = brandingForm.querySelectorAll("textarea");
    let lengthCountTextareas = brandingForm.querySelectorAll(".textarea");
    let allBtns = brandingForm.querySelectorAll("button");

    // count textarea value length and update label
    for (let textarea of lengthCountTextareas) {
        textarea.oninput = () => {
            let parent = textarea.parentElement;
            let span = parent.querySelector("span");
            let length = textarea.value.length;
            span.innerHTML = length;
        }
    }

    // image file blob base64 encoded string handling
    allInputs[1].onchange = (e) => {
        let fileReader = new FileReader();

        fileReader.readAsDataURL(e.target.files[0]);

        fileReader.onload = (e) => {
            brandingLogo = e.target.result;
        }
    }

    // start storing branding information details
    brandingForm.onsubmit = (e) => {
        e.preventDefault();

        allBrandingDetailsData.push({
            brandingName: allInputs[0].value,
            brandingLogo: brandingLogo,
            brandingDomain: allInputs[2].value,
            brandingEmail: allInputs[3].value,
            brandingFacebook: allInputs[4].value,
            brandingTwitter: allInputs[5].value,
            brandingInstagram: allInputs[6].value,
            brandingMobile: allInputs[7].value,
            brandingAddress: allTextareas[0].value,
            brandingAboutUs: allTextareas[1].value,
            brandingPrivatePolicy: allTextareas[2].value,
            brandingCookiePolicy: allTextareas[3].value,
            brandingTermsAndConditions: allTextareas[4].value
        });

        insertData("allBrandingDetailsData", allBrandingDetailsData);
        insertMessage();
    }

}