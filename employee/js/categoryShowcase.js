// create showcase category coding
const createCategoryShowcaseFunc = (link) => {
    dynamic_link = link;

    let allCategoryShowcase = [];
    allCategoryShowcase = getAllData("allCategoryShowcase");

    let showcaseCategory = document.querySelector(".showcase-category");

    // reading showcase from localstorage
    if (allCategoryShowcase.length > 0) {

        // const allCategoryShowcase = getAllData("allCategoryShowcase");
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

        showcaseCategory.innerHTML = `
            <div class="col-md-4">
                <div class="position-relative mb-3">
                    <div class="d-none shadow-sm p-1 d-flex position-absolute mx-3" style="top: 0;">
                        <button class="btn btn-dark">
                            <i class="fa fa-upload"></i>
                            <input type="file" class="form-control position-absolute upload-btn"
                                style="width: 50px; height: 50px; top: 0; left: 0; opacity: 0;">
                        </button>
                        <input type="text" value="${topLeftLabel}" class="form-control mx-2 shadow-sm" placeholder="Enter title">
                        <button class="btn btn-dark set-btn" img-dir="top-left">
                            Set
                        </button>
                    </div>
                    <img src="${topLeftImage}" alt="${topLeftLabel}">
                </div>
                <div class="position-relative mb-3">
                    <div class="d-none shadow-sm p-1 d-flex position-absolute mx-3" style="top: 0;">
                        <button class="btn btn-dark">
                            <i class="fa fa-upload"></i>
                            <input type="file" class="form-control position-absolute upload-btn"
                                style="width: 50px; height: 50px; top: 0; left: 0; opacity: 0;">
                        </button>
                        <input type="text" value="${bottomLeftLabel}" class="form-control mx-2 shadow-sm" placeholder="Enter title">
                        <button class="btn btn-dark set-btn" img-dir="bottom-left">
                            Set
                        </button>
                    </div>
                    <img src="${bottomLeftImage}" alt="${bottomLeftLabel}">
                </div>
            </div>
            <div class="col-md-4">
                <div class="position-relative mb-3">
                    <div class="d-none shadow-sm p-1 d-flex position-absolute mx-3" style="top: 0;">
                        <button class="btn btn-dark">
                            <i class="fa fa-upload"></i>
                            <input type="file" class="form-control position-absolute upload-btn"
                                style="width: 50px; height: 50px; top: 0; left: 0; opacity: 0;">
                        </button>
                        <input type="text" value="${centerLabel}" class="form-control mx-2 shadow-sm" placeholder="Enter title">
                        <button class="btn btn-dark set-btn" img-dir="center">
                            Set
                        </button>
                    </div>
                    <img src="${centerImage}" alt="${centerLabel}">
                </div>
            </div>
            <div class="col-md-4">
                <div class="position-relative mb-3">
                    <div class="d-none shadow-sm p-1 d-flex position-absolute mx-3" style="top: 0;">
                        <button class="btn btn-dark">
                            <i class="fa fa-upload"></i>
                            <input type="file" class="form-control position-absolute upload-btn"
                                style="width: 50px; height: 50px; top: 0; left: 0; opacity: 0;">
                        </button>
                        <input type="text" value="${topRightLabel}" class="form-control mx-2 shadow-sm" placeholder="Enter title">
                        <button class="btn btn-dark set-btn" img-dir="top-right">
                            Set
                        </button>
                    </div>
                    <img src="${topRightImage}" alt="${topRightLabel}">
                </div>
                <div class="position-relative mb-3">
                    <div class="d-none shadow-sm p-1 d-flex position-absolute mx-3" style="top: 0;">
                        <button class="btn btn-dark">
                            <i class="fa fa-upload"></i>
                            <input type="file" class="form-control position-absolute upload-btn"
                                style="width: 50px; height: 50px; top: 0; left: 0; opacity: 0;">
                        </button>
                        <input type="text" value="${bottomRightLabel}" class="form-control mx-2 shadow-sm" placeholder="Enter title">
                        <button class="btn btn-dark set-btn" img-dir="bottom-right">
                            Set
                        </button>
                    </div>
                    <img src="${bottomRightImage}" alt="${bottomRightLabel}">
                </div>
            </div>
        `;
    } else {
        showcaseCategory.innerHTML = `
            <div class="col-md-4">
                <div class="position-relative mb-3">
                    <div class="shadow-sm p-1 d-flex position-absolute mx-3" style="top: 0;">
                        <button class="btn btn-dark">
                            <i class="fa fa-upload"></i>
                            <input type="file" class="form-control position-absolute upload-btn"
                                style="width: 50px; height: 50px; top: 0; left: 0; opacity: 0;">
                        </button>
                        <input type="text" class="form-control mx-2 shadow-sm" placeholder="Enter title">
                        <button class="btn btn-dark set-btn" img-dir="top-left">
                            Set
                        </button>
                    </div>
                    <img src="..//common/images/small.png" alt="small-img">
                </div>
                <div class="position-relative mb-3">
                    <div class="shadow-sm p-1 d-flex position-absolute mx-3" style="top: 0;">
                        <button class="btn btn-dark">
                            <i class="fa fa-upload"></i>
                            <input type="file" class="form-control position-absolute upload-btn"
                                style="width: 50px; height: 50px; top: 0; left: 0; opacity: 0;">
                        </button>
                        <input type="text" class="form-control mx-2 shadow-sm" placeholder="Enter title">
                        <button class="btn btn-dark set-btn" img-dir="bottom-left">
                            Set
                        </button>
                    </div>
                    <img src="..//common/images/small.png" alt="small-img">
                </div>
            </div>
            <div class="col-md-4">
                <div class="position-relative mb-3">
                    <div class="shadow-sm p-1 d-flex position-absolute mx-3" style="top: 0;">
                        <button class="btn btn-dark">
                            <i class="fa fa-upload"></i>
                            <input type="file" class="form-control position-absolute upload-btn"
                                style="width: 50px; height: 50px; top: 0; left: 0; opacity: 0;">
                        </button>
                        <input type="text" class="form-control mx-2 shadow-sm" placeholder="Enter title">
                        <button class="btn btn-dark set-btn" img-dir="center">
                            Set
                        </button>
                    </div>
                    <img src="..//common/images/large.png" alt="large-img">
                </div>
            </div>
            <div class="col-md-4">
                <div class="position-relative mb-3">
                    <div class="shadow-sm p-1 d-flex position-absolute mx-3" style="top: 0;">
                        <button class="btn btn-dark">
                            <i class="fa fa-upload"></i>
                            <input type="file" class="form-control position-absolute upload-btn"
                                style="width: 50px; height: 50px; top: 0; left: 0; opacity: 0;">
                        </button>
                        <input type="text" class="form-control mx-2 shadow-sm" placeholder="Enter title">
                        <button class="btn btn-dark set-btn" img-dir="top-right">
                            Set
                        </button>
                    </div>
                    <img src="..//common/images/small.png" alt="small-img">
                </div>
                <div class="position-relative mb-3">
                    <div class="shadow-sm p-1 d-flex position-absolute mx-3" style="top: 0;">
                        <button class="btn btn-dark">
                            <i class="fa fa-upload"></i>
                            <input type="file" class="form-control position-absolute upload-btn"
                                style="width: 50px; height: 50px; top: 0; left: 0; opacity: 0;">
                        </button>
                        <input type="text" class="form-control mx-2 shadow-sm" placeholder="Enter title">
                        <button class="btn btn-dark set-btn" img-dir="bottom-right">
                            Set
                        </button>
                    </div>
                    <img src="..//common/images/small.png" alt="small-img">
                </div>
            </div>
        `;
    }

    let allUploadBtn = showcaseCategory.querySelectorAll(".upload-btn");
    let allImgTag = showcaseCategory.querySelectorAll("img");

    // dynamic reading of uploaded photo
    for (let upload of allUploadBtn) {
        upload.onchange = () => {
            let uploadedUrl = "";
            let parent = upload.parentElement.parentElement.parentElement;
            let imgTag = parent.querySelector("img");
            let setBtn = parent.querySelector(".set-btn");
            let inputEl = parent.querySelectorAll("input")[1];
            let displayPicWidth = imgTag.naturalWidth;
            let displayPicHeight = imgTag.naturalHeight;

            let fileReader = new FileReader();

            fileReader.readAsDataURL(upload.files[0]);
            fileReader.onload = (e) => {
                uploadedUrl = e.target.result;

                let image = new Image();
                image.src = uploadedUrl;

                image.onload = () => {
                    let originalWidth = image.width;
                    let originalHeight = image.height;

                    if (originalWidth === displayPicWidth && originalHeight === displayPicHeight) {
                        imgTag.src = uploadedUrl;

                        setBtn.onclick = () => {
                            let imgDirection = setBtn.getAttribute("img-dir");
                            if (inputEl.value !== "") {
                                let direction = allCategoryShowcase.find((category) => category.direction == imgDirection);

                                if (direction == undefined) {
                                    allCategoryShowcase.push({
                                        image: uploadedUrl,
                                        direction: imgDirection,
                                        label: inputEl.value.trim()
                                    });

                                    insertData("allCategoryShowcase", allCategoryShowcase);
                                    insertMessage();
                                } else {
                                    let indexNo = allCategoryShowcase.findIndex((category) => category.direction == imgDirection);

                                    allCategoryShowcase[indexNo] = {
                                        image: uploadedUrl,
                                        direction: imgDirection,
                                        label: inputEl.value.trim()
                                    }
                                    insertData("allCategoryShowcase", allCategoryShowcase);
                                    Swal.fire({
                                        title: "UPDATED!",
                                        text: `Your image file has been updated!`,
                                        icon: "success"
                                    })
                                }

                                setBtn.parentElement.classList.add("d-none");
                            } else {
                                Swal.fire({
                                    title: "FAILED!",
                                    text: `Title is required, title field is empty!`,
                                    icon: "warning"
                                })
                            }
                        }
                    } else {
                        Swal.fire({
                            title: "FAILED!",
                            text: `Image width : ${displayPicWidth} and height : ${displayPicHeight} is required!`,
                            icon: "warning"
                        });
                    }
                }
            }
        }
    }

    // control upload hide and show buttons
    for (let img of allImgTag) {
        img.ondblclick = () => {
            let parent = img.parentElement;
            let element = parent.querySelector(".shadow-sm");

            element.classList.toggle("d-none");
        }
    }
}