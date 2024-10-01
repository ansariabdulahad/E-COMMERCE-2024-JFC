// start creating dynamic brand page coding

// start creating dynamic brand 
const createBrandFunc = () => {
    let brandForm = document.querySelector(".brand-form");
    let brandSelect = brandForm.querySelector("select");
    let categorySelectList = document.querySelector(".category-list-select");

    // show the brands in the brand page
    for (let data of allCategoryData) {
        brandSelect.innerHTML += `
            <option>${data.category}</option>
        `;
        categorySelectList.innerHTML += `
            <option>${data.category}</option>
        `;
    }

}