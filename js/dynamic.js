setTimeout(() => {
    dynamicNavbarFunc();
    dynamicFooterFunc();
}, 500);

// get branding data
const brandingData = getAllData("allBrandingData");
console.log(brandingData);

// creating dynamic navbar
const dynamicNavbarFunc = () => {
    let allCategoryData = getAllData("allCategoryData");
    let dynamicNavbarBox = document.querySelector(".dynamic-navbar-box");
    let brandLogo = document.querySelector(".brand-logo");
    let brandName = document.querySelector(".brand-name");

    // show dynamic navbar menu items
    if (allCategoryData && allCategoryData.length > 0) {

        brandLogo.src = brandingData[0].brandingLogo;
        brandName.innerHTML = brandingData[0].brandingName;

        dynamicNavbarBox.innerHTML = `
            <li class="nav-item">
                <a href="http://localhost/e-commerce-2024-jfc/"
                    class="nav-link text-dark fw-bold btn-outline-light text-center">Home</a>
            </li>
        `;
        for (let category of allCategoryData) {
            dynamicNavbarBox.innerHTML += `
                <li class="nav-item">
                    <a href="#" class="nav-link text-dark fw-bold btn-outline-light text-center">${category.category}</a>
                </li>
            `;
        }
    }
    dynamicNavbarBox.innerHTML += `
        <div class="btn-group d-grid d-md-flex">
            <button class="btn rounded-circle">
                <i class="fa fa-shopping-cart shadow-sm"></i>
            </button>
            <button class="btn rounded-circle">
                <i class="fa fa-search shadow-sm"></i>
            </button>

            <div class="dropdown">
                <button class="btn dropdown-toggle rounded-circle" data-bs-toggle="dropdown">
                    <i class="fa fa-user shadow-sm"></i>
                </button>

                <ul class="dropdown-menu">
                    <li>
                        <a href="http://localhost/e-commerce-2024-jfc/pages/signup.html" class="dropdown-item">
                            <i class="fa fa-user"></i>
                            Signup
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost/e-commerce-2024-jfc/pages/login.html" class="dropdown-item">
                            <i class="fa fa-right-from-bracket"></i>
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `;

}

// creating dynamic footer
const dynamicFooterFunc = () => {
    let allCategoryData = getAllData("allCategoryData");
    let footerCategoryBox = document.querySelector(".footer-category-box");
    let addressEl = document.querySelector(".address");
    let emailEl = document.querySelector(".email");
    let contactEl = document.querySelector(".contact");
    let websiteEl = document.querySelector(".website");
    let socialBoxEl = document.querySelector('.social-box');
    let allATagEl = socialBoxEl.querySelectorAll('a[href="#"]');

    // show dynamic navbar menu items
    if (allCategoryData && allCategoryData.length > 0) {
        for (let category of allCategoryData) {
            // show dynamic footer category items
            footerCategoryBox.innerHTML += `
                <li class="mb-2">
                    <a href="#" class="text-white-50 btn-outline-success p-1 rounded">${category.category}</a>
                </li>
            `;
        }
    }

    // social
    allATagEl[0].href = brandingData[0].brandingFacebook;
    allATagEl[1].href = brandingData[0].brandingTwitter;
    allATagEl[2].href = "tel:" + brandingData[0].brandingMobile;
    // allATagEl[2].innerHTML = brandingData[0].brandingMobile;
    allATagEl[3].href = brandingData[0].brandingInstagram;

    // footer
    addressEl.href = "https://www.google.com/maps/search/?api=1&query=" + brandingData[0].brandingAddress;
    addressEl.innerHTML = brandingData[0].brandingAddress;
    emailEl.href = "mailto:" + brandingData[0].brandingEmail;
    emailEl.innerHTML = brandingData[0].brandingEmail;
    contactEl.href = "tel:" + brandingData[0].brandingMobile;
    contactEl.innerHTML = brandingData[0].brandingMobile;
    websiteEl.href = brandingData[0].brandingDomain;
    // websiteEl.innerHTML = brandingData[0].brandingDomain;
}

// dynamic request handlers for pages
const dynamicRequest = (element, pageRequest) => {
    const ajax = new XMLHttpRequest();

    ajax.open('POST', pageRequest, true);
    ajax.send();

    // get response
    ajax.onload = () => {
        element.innerHTML = ajax.response;
    }
}