// read the product data from localstorage before adding new data
allProductData = getAllData("allProductData");

// common image file reader function
const imageFileReader = (inputIndex, imageVariable) => {
    let productForm = document.querySelector(".product-form");
    let allInputs = productForm.querySelectorAll("input");
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
            case "brandingLogo": brandingLogo = e.target.result;
                break;
            default: null;
        }
    }
}

// delete dynamic product list from tbale
const deleteDynamicProductList = (allDelBtns, filteredProducts) => {
    for (let btn of allDelBtns) {
        btn.onclick = () => {
            let parent = btn.parentElement.parentElement;
            let id = parent.id;
            let index = parent.getAttribute("index");

            let currentProductIdIndex = allProductData.findIndex((product) => product.id == id);

            allProductData.splice(currentProductIdIndex, 1);
            filteredProducts.splice(index, 1);
            deleteAndUpdateMessageFunc(
                "allProductData",
                allProductData,
                dynamic_link,
                "delete",
                filteredProducts
            );
            // parent.remove();
        }
    }
}

// edit product coding
const editDynamicProductList = (allEditBtns, filteredProducts) => {
    let productForm = document.querySelector(".product-form");
    let allSelect = productForm.querySelectorAll("select");
    let option = allSelect[1].querySelector("option");
    let textAreaEl = productForm.querySelector("textarea");
    let allInputs = productForm.querySelectorAll("input");
    let allBtns = productForm.querySelectorAll("button");

    for (let btn of allEditBtns) {
        btn.onclick = () => {
            let parent = btn.parentElement.parentElement;
            let allTds = parent.querySelectorAll("td");
            let allImgs = parent.querySelectorAll("img");
            let id = parent.id;
            let index = parent.getAttribute("index");

            let category = allTds[1].innerHTML;
            let brand = allTds[2].innerHTML;
            let name = allTds[3].innerHTML;
            let description = allTds[4].innerHTML;
            let price = allTds[5].innerHTML;
            let quantity = allTds[6].innerHTML;

            thumbnail = allImgs[0].src;
            front = allImgs[1].src;
            back = allImgs[2].src;
            right = allImgs[3].src;
            left = allImgs[4].src;

            // assign the values
            allSelect[0].value = category;
            allSelect[0].disabled = true;
            option.value = brand;
            option.innerHTML = brand;
            allSelect[1].disabled = true;
            allInputs[0].value = name;
            textAreaEl.value = description;
            allInputs[1].value = price;
            allInputs[2].value = quantity;
            allBtns[0].classList.add("d-none");
            allBtns[1].classList.remove("d-none");

            // update coding
            allBtns[1].onclick = () => {
                let currentProductIndex = allProductData.findIndex((product) => product.id == id)

                allProductData[currentProductIndex] = {
                    id: id,
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
                };

                filteredProducts[index] = {
                    id: id,
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
                };

                let isUpdated = deleteAndUpdateMessageFunc(
                    "allProductData",
                    allProductData,
                    dynamic_link,
                    "update",
                    filteredProducts
                );

                // if (isUpdated) {
                // reset all things
                thumbnail = "";
                front = "";
                back = "";
                right = "";
                left = "";

                // assign the values
                allSelect[0].value = "choose category";
                allSelect[0].disabled = false;
                option.value = "choose brand";
                option.innerHTML = "Choose Brand";
                allSelect[1].disabled = false;
                allInputs[0].value = "";
                textAreaEl.value = "";
                allInputs[1].value = "";
                allInputs[2].value = "";
                allBtns[0].classList.remove("d-none");
                allBtns[1].classList.add("d-none");
                // }
            }
        }
    }
}

// dynamic reading of products
const readProductData = (filteredProducts) => {
    let productListTBodyEl = document.querySelector(".product-list");

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
                        <button class="btn btn-primary px-1 py-1 edit-btn">
                            <i class="fa fa-edit"></i>
                        </button>
                        <button class="btn btn-danger px-1 py-1 del-btn">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        });

        // start delete coding
        let allDelBtns = productListTBodyEl.querySelectorAll(".del-btn");
        deleteDynamicProductList(allDelBtns, filteredProducts);

        // start edit coding
        let allEditBtns = productListTBodyEl.querySelectorAll(".edit-btn");
        editDynamicProductList(allEditBtns, filteredProducts);

    } else {
        productListTBodyEl.innerHTML = "There are no products available!";
        Swal.fire({
            title: "No Data",
            text: `There is no data available for this brand, 
            create product or choose another brand!`,
            icon: "warning"
        });
    }
}

// start creating product coding
const createProductFunc = (link) => {
    dynamic_link = link;

    let productForm = document.querySelector(".product-form");
    let allSelect = productForm.querySelectorAll("select");
    let textAreaEl = productForm.querySelector("textarea");
    let allInputs = productForm.querySelectorAll("input");
    let categoryListSelect = document.querySelector(".category-list-select");
    let brandListSelect = document.querySelector(".brand-list-select");

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
                id: Math.floor(Math.random(10) * Date.now()),
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
            productForm.reset('');
            thumbnail = "";
            front = "";
            back = "";
            right = "";
            left = "";

        } else {

            Swal.fire({
                title: "Failed",
                text: "Please choose a brand to proceed",
                icon: "warning"
            });
        }
    }

    // read the stored product data in product list table
    brandListSelect.onchange = () => {
        let filteredProducts = [];
        // let id = 0;

        allProductData.filter((product) => {
            if (product.category == categoryListSelect.value &&
                product.brand == brandListSelect.value
            ) {
                // product["id"] = id;
                filteredProducts.push(product);
            }
            // id++;
        })

        // read the stored product
        readProductData(filteredProducts);
    }
}