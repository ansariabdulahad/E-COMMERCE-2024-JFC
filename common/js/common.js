const insertData = (table_name, data) => {
    localStorage.setItem(table_name, JSON.stringify(data));
}

const getAllData = (table_name) => {
    if (localStorage.getItem(table_name) != null) {
        const data = JSON.parse(localStorage.getItem(table_name));
        return data;
    } else {
        return [];
    }
}

const insertMessage = () => {
    Swal.fire({
        text: "Data created successfully",
        icon: "success"
    });
}

const deleteAndUpdateMessageFunc = (table_name, data, link, message, filterData) => {
    Swal.fire({
        title: "Are you sure?",
        text: `You won't to ${message} this!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes, ${message} it!`
    }).then((result) => {
        if (result.isConfirmed) {
            // let isUpdated = false;
            insertData(table_name, data);
            // check dynamic link
            if (link === "dynamic/category-design.html") {
                readCategoryData();
            } else if (link === "dynamic/brand-design.html") {
                readBrandData(filterData);
            } else if (link === "dynamic/product-design.html") {
                readProductData(filterData);
                // isUpdated = true;
                // return true;
            }

            Swal.fire({
                title: message.toUpperCase(),
                text: `Your file has been ${message}.`,
                icon: "success"
            });
            // return isUpdated;
        } else {
            Swal.fire({
                title: "SAVED",
                text: `Your file is not ${message}.`,
                icon: "success"
            });
        }
    });
}