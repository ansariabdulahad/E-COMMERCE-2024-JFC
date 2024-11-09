// show header crousel coding
const createCarouselFunc = () => {
    const allHeaderShowcase = getAllData("allHeaderShowcase");
    let textAlign = "";
    let carouselInner = document.querySelector(".carousel-inner");

    if (allHeaderShowcase.length > 0) {
        for (let data of allHeaderShowcase) {

            if (data.h_align == "center") {
                textAlign = "text-start";
            } else {
                textAlign = "text-start";
            }

            carouselInner.innerHTML += `
                <div class="carousel-item">
                    <img src="${data.titleImage}" alt="${data.titleText}" class="d-block" style="width:100%">
                    <div class="carousel-caption d-flex h-100 ${textAlign}" 
                        style="justify-content:${data.h_align}; align-items:${data.v_align}">
                        <div>
                            <h1 style="color: ${data.titleColor}; font-size: ${data.titleSize}">${data.titleText}</h1>
                            <h4 style="color: ${data.subTitleColor}; font-size: ${data.subTitleSize}">${data.subTitleText}</h4>
                            <div>
                                ${data.button}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        carouselInner.innerHTML += `
            <!-- Left and right controls/icons -->
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        `;

        document.querySelector(".carousel-item").classList.add("active");
    }
}

createCarouselFunc();

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
                <img src="${bottomRightImage}" alt="${bottomRightLabel}">
            </div>
        </div>
    `;
}
showCategory();