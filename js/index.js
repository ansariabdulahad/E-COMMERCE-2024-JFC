// tranding product listing
const showProduct = () => {
    const allProductData = getAllData("allProductData");
    let productListEl = document.querySelector(".product-list");

    allProductData.forEach((product, index) => {
        productListEl.innerHTML += `
            <div class="col-md-3 my-3 rounded-5 p-2 animate__animated animate__bounce" align="center">
                <img src=${product.thumbnail} alt=${product.title} class="w-100">
                <span class="fw-bold">${product.brand}</span>
                <br>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <i class="fa-regular fa-star text-warning"></i>
                <br>
                <span class="fw-semibold">${product.title}</span>
                <br>
                <span class="fw-bold">
                    <i class="fa fa-indian-rupee-sign"></i>
                    ${product.price}
                </span>
                <br>
                <button class="btn btn-warning mt-3 w-100 shadow-sm" index="${index}" product-id="${index}">
                    <i class="fa fa-shopping-cart"></i>
                    Add To Cart
                </button>
                <button class="btn btn-success mt-3 w-100 shadow-sm" index="${index}" product-id="${index}">
                    <i class="fa fa-shopping-bag"></i>
                    Buy Now
                </button>
            </div>
        `;
    })
}

showProduct();

// trending category showcase listing
const showCategory = () => {
    const allCategoryShowcase = getAllData("allCategoryShowcase");
    let categoryListEl = document.querySelector(".category-list");

    let topLeftImage = "common/images/small.png";
    let topLeftLabel = "";

    let bottomLeftImage = "common/images/small.png";
    let bottomLeftLabel = "";

    let centerImage = "common/images/large.png";
    let centerLabel = "";

    let topRightImage = "common/images/small.png";
    let topRightLabel = "";

    let bottomRightImage = "common/images/small.png";
    let bottomRightLabel = "";

    for (let i = 0; i < allCategoryShowcase.length; i++) {
        if (allCategoryShowcase[i].direction == "top-left") {
            topLeftImage = allCategoryShowcase[i].image;
            topLeftLabel = allCategoryShowcase[i].label;
        } else if (allCategoryShowcase[i].direction == "bottom-left") {
            bottomLeftImage = allCategoryShowcase[i].image;
            bottomLeftLabel = allCategoryShowcase[i].label;
        } else if (allCategoryShowcase[i].direction == "center") {
            centerImage = allCategoryShowcase[i].image;
            centerLabel = allCategoryShowcase[i].label;
        } else if (allCategoryShowcase[i].direction == "top-right") {
            topRightImage = allCategoryShowcase[i].image;
            topRightLabel = allCategoryShowcase[i].label;
        } else if (allCategoryShowcase[i].direction == "bottom-right") {
            bottomRightImage = allCategoryShowcase[i].image;
            bottomRightLabel = allCategoryShowcase[i].label;
        }
    }

    categoryListEl.innerHTML += `
        <div class="col-md-4 my-3 rounded-5 p-2 animate__animated animate__bounce">
            <div class="position-relative">
                <button class="btn border p-2 bg-white shadow fw-semibold" style="position: absolute; top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                ">Click Me</button>
                <img src="${topLeftImage}" alt="${topLeftLabel}">
            </div>

            <div class="position-relative mt-2">
                <button class="btn border p-2 bg-white shadow fw-semibold" style="position: absolute; top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                ">Click Me</button>
                <img src="${bottomLeftImage}" alt="${bottomLeftLabel}">
            </div>
        </div>

        <div class="col-md-4 my-3 rounded-5 p-2 animate__animated animate__bounce">
            <div class="position-relative">
                <button class="btn border p-2 bg-white shadow fw-semibold" style="position: absolute; top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                ">Click Me</button>
                <img src="${centerImage}" alt="${centerLabel}">
            </div>
        </div>

        <div class="col-md-4 my-3 rounded-5 p-2 animate__animated animate__bounce">
            <div class="position-relative">
                <button class="btn border p-2 bg-white shadow fw-semibold" style="position: absolute; top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                ">Click Me</button>
                <img src="${topRightImage}" alt="${topRightLabel}">
            </div>

            <div class="position-relative mt-2">
                <button class="btn border p-2 bg-white shadow fw-semibold" style="position: absolute; top: 50%; left: 50%;
                transform: translate(-50%, -50%);
                ">Click Me</button>
                <img src="${topLeftImage}" alt="${topLeftLabel}">
            </div>
        </div>
    `;
}

showCategory();