// read the product data from localstorage before adding new data
allProductData = getAllData("allProductData");

// start creating product coding
const createProductFunc = (link) => {
    dynamic_link = link;

    let productForm = document.querySelector(".product-form");
    let allSelect = productForm.querySelectorAll("select");
    let allInputs = productForm.querySelectorAll("input");
    let textAreaEl = productForm.querySelector("textarea");
    let categoryListSelect = document.querySelector(".category-list-select");
    let brandListSelect = document.querySelector(".brand-list-select");
    let productListTBodyEl = document.querySelector(".product-list");

    // show category & brand in select tag
    for (let categoryItem of allCategoryData) {
        allSelect[0].innerHTML += `
            <option value=${categoryItem.category}>${categoryItem.category}</option>
        `;

        categoryListSelect.innerHTML += `
            <option value=${categoryItem.category}>${categoryItem.category}</option>
        `;
    }

    // for product creation handle
    allSelect[0].onchange = () => {
        let currentcategory = allSelect[0].value;
        let filteredBrandList = allBrandData.filter((brand) => brand.category == currentcategory && brand.brand != "");

        if (currentcategory != "choose category") {
            if (filteredBrandList && filteredBrandList.length > 0) {
                allSelect[1].innerHTML = `
                    <option value="choose brand">Choose Brand</option>
                `;

                for (let brandItem of filteredBrandList) {

                    if (brandItem.brand !== "") {

                        allSelect[1].innerHTML += `
                            <option value=${brandItem.brand}>${brandItem.brand}</option>
                        `;

                        // brandListSelect.innerHTML += `
                        //     <option value=${brandItem.brand}>${brandItem.brand}</option>
                        // `;
                    }
                }
            } else {
                allSelect[1].innerHTML = `
                    <option value="no brand found">There is no brand, First create brand</option>
                `;
            }
        } else {
            allSelect[1].innerHTML = `
                <option value="choose brand">Choose Brand</option>
            `;
        }
    }

    // for product list handle
    categoryListSelect.onchange = () => {
        let currentcategory = categoryListSelect.value;
        let filteredBrandList = allBrandData.filter((brand) => brand.category == currentcategory && brand.brand != "");

        if (categoryListSelect.value != "choose category") {
            if (filteredBrandList && filteredBrandList.length > 0) {
                brandListSelect.innerHTML = `
                    <option value="choose brand">Choose Brand</option>
                `;

                for (let brandItem of filteredBrandList) {

                    if (brandItem.brand !== "") {

                        brandListSelect.innerHTML += `
                            <option value=${brandItem.brand}>${brandItem.brand}</option>
                        `;
                    }
                }
            } else {
                brandListSelect.innerHTML = `
                    <option value="no brand found">There is no brand, First create brand</option>
                `;
            }
        } else {
            brandListSelect.innerHTML = `
                <option value="choose brand">Choose Brand</option>
            `;
        }
    }

    // read image binary and update in global variable
    let imagesArray = ["thumbnail", "front", "back", "right", "left"];
    // common image file reader function
    const imageFileReader = (inputIndex, imageVariable) => {
        let fileReader = new FileReader();

        fileReader.readAsDataURL(allInputs[inputIndex].files[0]);
        fileReader.onload = (e) => {
            switch (imageVariable) {
                case "thumbnail": thumbnail = e.target.result;
                    break;
                case "front": front = e.target.result;
                    break;
                case "back": back = e.target.result;
                    break;
                case "right": right = e.target.result;
                    break;
                case "left": left = e.target.result;
                    break;
                default: null;
            }
        }
    }

    imagesArray.forEach((imageVar, index) => {
        allInputs[index + 3].onchange = () => imageFileReader(index + 3, imageVar);
    });

    // let fileReader = new FileReader();
    // get thumbnail
    // allInputs[3].onchange = () => {
    //     fileReader.readAsDataURL(allInputs[3].files[0]);
    //     fileReader.onload = (e) => {
    //         thumbnail = e.target.result;
    //     }
    // }

    // // get front
    // allInputs[4].onchange = () => {
    //     fileReader.readAsDataURL(allInputs[4].files[0]);
    //     fileReader.onload = (e) => {
    //         front = e.target.result;
    //     }
    // }

    // // get back
    // allInputs[5].onchange = () => {
    //     fileReader.readAsDataURL(allInputs[5].files[0]);
    //     fileReader.onload = (e) => {
    //         back = e.target.result;
    //     }
    // }

    // // get right
    // allInputs[6].onchange = () => {
    //     fileReader.readAsDataURL(allInputs[6].files[0]);
    //     fileReader.onload = (e) => {
    //         right = e.target.result;
    //     }
    // }

    // // get right
    // allInputs[7].onchange = () => {
    //     fileReader.readAsDataURL(allInputs[7].files[0]);
    //     fileReader.onload = (e) => {
    //         left = e.target.result;
    //     }
    // }

    // craete product while data submitted to loaclstorage
    productForm.onsubmit = (e) => {
        e.preventDefault();

        if (allSelect[1].value !== "choose brand") {

            allProductData.push({
                category: allSelect[0].value,
                brand: allSelect[1].value,
                title: allInputs[0].value,
                description: textAreaEl.value,
                price: allInputs[1].value,
                quantity: allInputs[2].value,
                thumbnail: thumbnail || "http://localhost/e-commerce-2024-jfc/common/images/avatar.jpeg",
                front: front || "http://localhost/e-commerce-2024-jfc/common/images/avatar.jpeg",
                back: back || "http://localhost/e-commerce-2024-jfc/common/images/avatar.jpeg",
                right: right || "http://localhost/e-commerce-2024-jfc/common/images/avatar.jpeg",
                left: left || "http://localhost/e-commerce-2024-jfc/common/images/avatar.jpeg"
            });

            insertData("allProductData", allProductData);
            insertMessage();
            productForm.reset();

        } else {

            Swal.fire({
                title: "Failed",
                text: "Please choose a brand to proceed",
                icon: "warning"
            });
        }
    }

    // dynamic reading of products
    const readProductData = (filteredProducts) => {
        if (filteredProducts && filteredProducts.length > 0) {

            productListTBodyEl.innerHTML = "";
            filteredProducts.map((product, index) => {
                productListTBodyEl.innerHTML += `
                    <tr index=${index} id=${product.id}>
                        <td>${index + 1}</td>
                        <td>${product.category}</td>
                        <td>${product.brand}</td>
                        <td>${product.title}</td>
                        <td>${product.description}</td>
                        <td>${product.price}</td>
                        <td>${product.quantity}</td>
                        <td>
                            <img src=${product.thumbnail}
                                alt="thumb-img" width="50">
                        </td>
                        <td>
                            <img src=${product.front}
                                alt="front-img" width="50">
                        </td>
                        <td>
                            <img src=${product.back}
                                alt="back-img" width="50">
                        </td>
                        <td>
                            <img src=${product.right}
                                alt="right-img" width="50">
                        </td>
                        <td>
                            <img src=${product.left}
                                alt="left-img" width="50">
                        </td>
                        <td>
                            <button class="btn btn-primary px-1 py-1">
                                <i class="fa fa-edit"></i>
                            </button>
                            <button class="btn btn-danger px-1 py-1">
                                <i class="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `;
            })
        } else {
            productListTBodyEl.innerHTML = "There are no products available!";
            Swal.fire({
                title: "No Data",
                text: `There is no data available for ${brandListSelect.value} brand, 
                create product or choose another brand!`,
                icon: "warning"
            });
        }
    }

    // read the stored product data in product list table
    brandListSelect.onchange = () => {
        let filteredProducts = [];

        allProductData.filter((product, index) => {
            if (product.category == categoryListSelect.value &&
                product.brand == brandListSelect.value
            ) {
                product["id"] = index
                filteredProducts.push(product);
            }
        })

        // read the stored product
        readProductData(filteredProducts);
    }
}