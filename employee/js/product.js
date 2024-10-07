// start creating product coding
const createProductFunc = (link) => {
    dynamic_link = link;

    let productForm = document.querySelector(".product-form");
    let allSelect = productForm.querySelectorAll("select");
    let categoryListSelect = document.querySelector(".category-list-select");
    let brandListSelect = document.querySelector(".brand-list-select");
    let allInputs = productForm.querySelectorAll("input");

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
    let fileReader = new FileReader();
    // get thumbnail
    allInputs[3].onchange = () => {
        fileReader.readAsDataURL(allInputs[3].files[0]);
        fileReader.onload = (e) => {
            thumbnail = e.target.result;
        }
    }

    // get front
    allInputs[4].onchange = () => {
        fileReader.readAsDataURL(allInputs[4].files[0]);
        fileReader.onload = (e) => {
            front = e.target.result;
        }
    }

    // get back
    allInputs[5].onchange = () => {
        fileReader.readAsDataURL(allInputs[5].files[0]);
        fileReader.onload = (e) => {
            back = e.target.result;
        }
    }

    // get right
    allInputs[6].onchange = () => {
        fileReader.readAsDataURL(allInputs[6].files[0]);
        fileReader.onload = (e) => {
            right = e.target.result;
        }
    }

    // get right
    allInputs[7].onchange = () => {
        fileReader.readAsDataURL(allInputs[7].files[0]);
        fileReader.onload = (e) => {
            left = e.target.result;
        }
    }
}