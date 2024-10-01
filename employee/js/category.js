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

// start delete list category coding
const deleteListCategory = (allDelBtn) => {
    for (let btn of allDelBtn) {
        btn.onclick = (e) => {
            const tr = e.target.parentElement.parentElement.parentElement;
            const index = tr.getAttribute("index");
            allCategoryData.splice(index, 1);
            localStorage.setItem("allCategoryData", JSON.stringify(allCategoryData));
            readCategoryData();
        }
    }
}

// start edit list category coding
const editListCategory = (allEditBtn) => {
    for (let btn of allEditBtn) {
        btn.onclick = () => {
            let parent = btn.parentElement.parentElement;
            let index = parent.getAttribute("index");
            let allTd = parent.querySelectorAll("td");
            let saveBtn = parent.querySelector(".save-btn")

            allTd[1].contentEditable = true;
            allTd[1].focus();
            btn.classList.add("d-none");
            saveBtn.classList.remove("d-none");

            // save the edit button data
            saveBtn.onclick = () => {
                let category = allTd[1].innerHTML;
                allCategoryData[index] = { category }; // allCategoryData.splice(index, 1, { category })
                localStorage.setItem("allCategoryData", JSON.stringify(allCategoryData));
                saveBtn.classList.add("d-none");
                btn.classList.remove("d-none");
                // readCategoryData();
            }
        }
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
                    <button class="btn btn-primary p-1 px-2 edit-btn">
                        <i class="fa fa-edit"></i>
                    </button>
                    <button class="btn btn-warning p-1 px-2 d-none save-btn">
                        <i class="fa fa-save"></i>
                    </button>
                    <button class="btn btn-danger p-1 px-2 del-btn">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    })

    // start delete list category coding
    let allDelBtn = categoryList.querySelectorAll(".del-btn");
    deleteListCategory(allDelBtn);

    // start edit list category coding
    let allEditBtn = categoryList.querySelectorAll(".edit-btn");
    editListCategory(allEditBtn);
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