// start creating dynamic category page coding

// global variables
let allCategoryData = [];

// get data from storage before saving
if (localStorage.getItem("allCategoryData") !== null) {
    allCategoryData = JSON.parse(localStorage.getItem("allCategoryData"));
}

// add the category field 
const addCategoryFieldFuncCall = () => {
    let addFieldBtn = document.querySelector(".add-field-btn");
    let inputBoxEl = document.querySelector(".input-box");

    addFieldBtn.onclick = () => {

        inputBoxEl.innerHTML += `
            <div>
                <i style="cursor: pointer" class="fa fa-trash mb-2 float-end text-danger del-btn"></i>
                <input type="text" placeholder="Category" class="form-control mb-3" required>
            </div>
        `;

        // delete the category coding
        let allDelBtn = inputBoxEl.querySelectorAll(".del-btn");

        deleteCategoryFuncCall(allDelBtn);
    }
}

// delete the category coding
const deleteCategoryFuncCall = (allDelBtn) => {
    for (let btn of allDelBtn) {
        btn.onclick = (e) => {
            e.target.parentElement.remove();

            Swal.fire({
                text: "Category deleted successfully",
                icon: "success"
            });
        }
    }
}

// add new category form submit coding
const addNewCategoryFuncCall = () => {
    let categoryForm = document.querySelector(".category-form");

    categoryForm.onsubmit = (event) => {
        event.preventDefault();

        let allInputs = categoryForm.querySelectorAll("input");

        for (let input of allInputs) {
            allCategoryData.push({
                category: input.value
            });
        }

        localStorage.setItem("allCategoryData", JSON.stringify(allCategoryData));
        Swal.fire({
            text: "Category created successfully",
            icon: "success"
        });

        categoryForm.reset('');

        readCategoryData();
    }
}

// read category data from local storage and list in ui
const readCategoryData = () => {
    let categoryList = document.querySelector(".category-list");

    categoryList.innerHTML = "";

    allCategoryData.forEach((data, index) => {
        categoryList.innerHTML += `
            <tr index=${index}>
                <td>${index + 1}</td>
                <td>${data.category}</td>
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
    })
}

// start creating categories coding
const createCategoryFunc = () => {
    // add new fields and delete field controls
    addCategoryFieldFuncCall();

    // add new category form submit coding
    addNewCategoryFuncCall();

    // read category data from local storage and list in ui
    readCategoryData()
}