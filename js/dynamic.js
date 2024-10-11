// creating dynamic navbar
const dynamicNavbarFunc = () => {
    let allCategoryData = getAllData("allCategoryData");
    let dynamicNavbarBox = document.querySelector(".dynamic-navbar-box");
    let footerCategoryBox = document.querySelector(".footer-category-box");

    // show dynamic navbar menu items
    if (allCategoryData && allCategoryData.length > 0) {
        for (let category of allCategoryData) {
            dynamicNavbarBox.innerHTML += `
                <li class="nav-item">
                    <a href="#" class="nav-link text-dark fw-bold btn-outline-light text-center">${category.category}</a>
                </li>
            `;

            // show dynamic footer category items
            footerCategoryBox.innerHTML += `
                <li class="mb-2">
                    <a href="#" class="text-white-50 btn-outline-success p-1 rounded">${category.category}</a>
                </li>
            `;
        }
    }
    dynamicNavbarBox.innerHTML += `
        <div class="btn-group d-grid d-md-flex">
            <button class="btn">
                <i class="fa fa-shopping-cart shadow-sm"></i>
            </button>
            <button class="btn">
                <i class="fa fa-search shadow-sm"></i>
            </button>
            <button class="btn">
                <i class="fa fa-user shadow-sm"></i>
            </button>
        </div>
    `;

}

dynamicNavbarFunc();