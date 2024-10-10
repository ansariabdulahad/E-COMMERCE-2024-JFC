// read localstorage data of branding details
// allBrandingData = getAllData("allBrandingData");

// start branding code
const createBrandingFunc = (link) => {
    dynamic_link = link;

    let brandingForm = document.querySelector(".branding-form");
    let allInputs = brandingForm.querySelectorAll("input");
    let allTextareas = brandingForm.querySelectorAll("textarea");
    let lengthCountTextareas = brandingForm.querySelectorAll(".textarea");
    let allBtns = brandingForm.querySelectorAll("button");
    let editBrandingBtn = document.querySelector(".edit-branding-btn");

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

        insertBrandingFunc();
        readbrandingFunc();
    }

    // reading branding details data only one branding detailes can be stored
    const readbrandingFunc = () => {
        let brandingData = getAllData("allBrandingData");

        if (brandingData && brandingData.length > 0) {
            const { brandingName, brandingDomain, brandingEmail, brandingFacebook,
                brandingTwitter, brandingInstagram, brandingMobile, brandingAddress, brandingAboutUs,
                brandingPrivatePolicy, brandingCookiePolicy, brandingTermsAndConditions
            } = brandingData[0];

            // store data in fields
            allInputs[0].value = brandingName;
            brandingLogo = brandingData[0].brandingLogo;
            allInputs[2].value = brandingDomain;
            allInputs[3].value = brandingEmail;
            allInputs[4].value = brandingFacebook;
            allInputs[5].value = brandingTwitter;
            allInputs[6].value = brandingInstagram;
            allInputs[7].value = brandingMobile;
            allTextareas[0].value = brandingAddress;
            allTextareas[1].value = brandingAboutUs;
            allTextareas[2].value = brandingPrivatePolicy;
            allTextareas[3].value = brandingCookiePolicy;
            allTextareas[4].value = brandingTermsAndConditions;

            // disabled all input fields and textareas
            for (let input of allInputs) {
                input.disabled = true;
            }
            for (let textarea of allTextareas) {
                textarea.disabled = true;
            }

            allBtns[0].classList.add("d-none");
            allBtns[1].classList.remove("d-none");
            editBrandingBtn.classList.remove("d-none");

            editBrandingBtn.onclick = () => {

                // enabled all input fields and textareas
                for (let input of allInputs) {
                    input.disabled = false;
                }
                for (let textarea of allTextareas) {
                    textarea.disabled = false;
                }

                editBrandingBtn.classList.add("d-none");
                allBtns[1].disabled = false;
            }
            allBtns[1].disabled = true;
        }
    }
    readbrandingFunc();

    // inserting branding data
    const insertBrandingFunc = () => {
        allBrandingData.push({
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

        insertData("allBrandingData", allBrandingData);
        insertMessage();
    }
}