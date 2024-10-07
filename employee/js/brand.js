// start creating dynamic brand page coding

// get data from storage before saving
allBrandData = getAllData("allBrandData");

// delete the dynamic fields
const deleteDynamicBrandFields = (allDelBtns) => {
    for (let btn of allDelBtns) {
        btn.onclick = () => {
            btn.parentElement.remove();
        }
    }

};

// delete the dynamically listed brands & categories
const deleteDynamicBrandList = (allDelBtns, filteredBrandList) => {
    for (let btn of allDelBtns) {
        btn.onclick = () => {
            let parent = btn.parentElement.parentElement;
            let index = parent.getAttribute("index");
            let id = parent.getAttribute("id");

            let CurrentBrandIndex = allBrandData.findIndex((data) => data.id == id);

            allBrandData.splice(CurrentBrandIndex, 1);
            filteredBrandList.splice(index, 1);

            deleteAndUpdateMessageFunc(
                "allBrandData",
                allBrandData,
                dynamic_link,
                "delete",
                filteredBrandList
            );
        }
    }
};

// edit the dynamically listed brands & categories
const editDynamicBrandList = (allEditBtns, filteredBrandList) => {
    for (let btn of allEditBtns) {
        btn.onclick = () => {
            let parent = btn.parentElement.parentElement;
            let id = parent.id;
            let index = parent.getAttribute("index");
            let allTds = parent.querySelectorAll("td");
            let allBtns = allTds[3].querySelectorAll("button");

            allBtns[1].classList.remove("d-none");
            allBtns[0].classList.add("d-none");

            allTds[2].contentEditable = true;
            allTds[2].focus();

            // save the edited data when clicked on savebtn
            allBtns[1].onclick = () => {

                allBrandData[id].brand = allTds[2].innerHTML;
                filteredBrandList[index].brand = allTds[2].innerHTML;

                allBtns[1].classList.add("d-none");
                allBtns[0].classList.remove("d-none");

                deleteAndUpdateMessageFunc(
                    "allBrandData",
                    allBrandData,
                    dynamic_link,
                    "update",
                    filteredBrandList
                )
            }
        }
    }
};

// read dynamic brand list
const readBrandData = (filteredBrandList) => {
    let brandListTBodyEl = document.querySelector(".brand-list");
    let dataCount = 0;

    brandListTBodyEl.innerHTML = '';
    for (let brandData of filteredBrandList) {
        brandListTBodyEl.innerHTML += `
            <tr id=${brandData.id} index=${dataCount}>
                <td>${dataCount + 1}</td>
                <td>${brandData.category}</td>
                <td>${brandData.brand}</td>
                <td>
                    <button class="btn btn-primary p-1 px-2 edit-btn">
                        <i class="fa fa-edit"></i>
                    </button>
                    <button class="btn btn-primary p-1 px-2 save-btn bg-warning d-none">
                        <i class="fa fa-save"></i>
                    </button>
                    <button class="btn btn-danger p-1 px-2 del-btn">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
        dataCount++;
    }

    // delete the dynamically listed brands & categories
    let allDelBtns = brandListTBodyEl.querySelectorAll(".del-btn");
    deleteDynamicBrandList(allDelBtns, filteredBrandList);

    // edit the dynamically listed brands & categories
    let allEditBtns = brandListTBodyEl.querySelectorAll(".edit-btn");
    editDynamicBrandList(allEditBtns, filteredBrandList);

}

// start creating dynamic brand 
const createBrandFunc = (link) => {
    dynamic_link = link;
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

    // show the category brands list
    categorySelectList.onchange = () => {
        let filteredBrandList = [];
        let id = 0;

        for (let brandData of allBrandData) {
            if (brandData.category === categorySelectList.value) {
                brandData["id"] = id;
                filteredBrandList.push(brandData);
            }
            id++;
        }

        // show the brand list
        readBrandData(filteredBrandList);
    }
}