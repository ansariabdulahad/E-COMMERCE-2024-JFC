// start creating dynamic brand page coding

// get data from storage before saving
allBrandData = getAllData("allBrandData");
console.log(allBrandData);

// delete the dynamic fields
const deleteDynamicBrandFields = (allDelBtns) => {
    for (let btn of allDelBtns) {
        btn.onclick = () => {
            btn.parentElement.remove();
        }
    }

};

// start creating dynamic brand 
const createBrandFunc = () => {
    let brandForm = document.querySelector(".brand-form");
    let inputBox = brandForm.querySelector(".input-box");
    let allBtn = brandForm.querySelectorAll("button");
    let categorySelect = brandForm.querySelector("select");
    let categorySelectList = document.querySelector(".category-list-select");

    // show the brands in the brand page
    for (let data of allCategoryData) {
        categorySelect.innerHTML += `
            <option>${data.category}</option>
        `;
        categorySelectList.innerHTML += `
            <option>${data.category}</option>
        `;
    }

    // create a new dynamic fields to add multiple brands
    allBtn[0].onclick = () => {
        inputBox.innerHTML += `
            <div class="my-2">
                <i class="fa fa-trash mb-2 float-end text-danger del-btn"
                style="cursor: pointer"
                ></i>
                <input type="text" placeholder="Brand" class="form-control shadow-sm">
            </div>
        `;

        // delete the dynamic fields
        let allDelBtns = inputBox.querySelectorAll('.del-btn');
        deleteDynamicBrandFields(allDelBtns);
    }

    // create the brand and store in localstorage
    brandForm.onsubmit = (e) => {
        e.preventDefault();

        let allInputs = brandForm.querySelectorAll("input");

        if (categorySelect.value !== "choose category") {
            for (let input of allInputs) {
                if (input.value !== "") {
                    allBrandData.push({
                        category: categorySelect.value,
                        brand: input.value
                    });
                } else {
                    Swal.fire({
                        text: "Brand required!",
                        icon: "warning"
                    });
                }
            }
            insertData("allBrandData", allBrandData);
            insertMessage();
            brandForm.reset();
        } else {
            Swal.fire({
                text: "Select a category first!",
                icon: "warning"
            });
        }
    }

    // show the brand list
    categorySelectList.onchange = () => {
        let brandListTBodyEl = document.querySelector(".brand-list");
        let brandList = allBrandData.filter(({ category }) => category === categorySelectList.value);

        brandListTBodyEl.innerHTML = '';
        brandList.forEach((brand, index) => {
            brandListTBodyEl.innerHTML += `
                <tr index=${index}>
                    <td>${index + 1}</td>
                    <td>${brand.category}</td>
                    <td>${brand.brand}</td>
                    <td>
                        <button class="btn btn-primary p-1 px-2">
                            <i class="fa fa-edit"></i>
                        </button>
                        <button class="btn btn-danger p-1 px-2">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
    }
}