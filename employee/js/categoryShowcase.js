// create showcase category coding
const createCategoryShowcaseFunc = (link) => {
    dynamic_link = link;

    let allCategoryShowcase = [];
    allCategoryShowcase = getAllData("allCategoryShowcase");

    let showcaseCategory = document.querySelector(".showcase-category");
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