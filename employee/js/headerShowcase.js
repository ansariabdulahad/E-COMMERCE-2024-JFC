// header showcase creating coding
const createHeaderShowcaseFunc = (link) => {
    dynamic_link = link;

    // slect all elements
    let showcaseForm = document.querySelector('.showcase-form');
    let allInputEl = showcaseForm.querySelectorAll("input");
    let textareaEl = showcaseForm.querySelector('textarea');
    let maxLengthEl = showcaseForm.querySelectorAll('.max-length');
    let showcasePreview = document.querySelector('.showcase-preview');
    let titleBox = showcasePreview.querySelector('.title-box');
    let titleButtonBox = showcasePreview.querySelector(".title-button");
    let textColorEl = showcasePreview.querySelector(".text-color");
    let textSizeEl = showcasePreview.querySelector(".text-size");
    let btnTextEl = showcasePreview.querySelector(".btn-text");
    let btnUrlEl = showcasePreview.querySelector(".btn-url");
    let btnBgColorEl = showcasePreview.querySelector(".btn-bg-color");
    let btnTextColorEl = showcasePreview.querySelector(".btn-text-color");
    let btnSizeEl = showcasePreview.querySelector(".btn-size");
    let addBtn = showcasePreview.querySelector(".add-btn");
    let targetEl = showcasePreview.querySelectorAll(".target");
    let allAlignmentEl = showcasePreview.querySelectorAll(".alignment");

    // title onchange handler
    allInputEl[1].oninput = () => {
        maxLengthEl[0].innerHTML = allInputEl[1].value.length;
        targetEl[0].innerHTML = allInputEl[1].value;
    }

    // subtitle onchange handler
    textareaEl.oninput = () => {
        maxLengthEl[1].innerHTML = textareaEl.value.length;
        targetEl[1].innerHTML = textareaEl.value;
    }

    // adding color to title and subtitle
    for (let target of targetEl) {
        target.onclick = () => {

            for (let el of targetEl) {
                el.style.border = "inherit";
            }

            target.style.border = "3px solid red";

            // change the color
            textColorEl.oninput = () => {
                target.style.color = textColorEl.value;
            }

            // change the size
            textSizeEl.oninput = () => {
                target.style.fontSize = textSizeEl.value + "%";
            }
        }

        // remove selected one
        target.ondblclick = () => {
            target.style.border = "inherit";
        }
    }

    // adding buttons
    addBtn.onclick = () => {

        let btnLength = titleButtonBox.querySelectorAll("button").length;

        if (btnLength < 2) {
            if (btnTextEl.value !== "" && btnTextColorEl.value !== "#000000") {
                let button = document.createElement("button");
                button.className = "btn shadow-sm mx-2";
                button.style.backgroundColor = btnBgColorEl.value;

                let a = document.createElement("a");
                a.innerHTML = btnTextEl.value;
                a.href = btnUrlEl.value;
                a.style.color = btnTextColorEl.value;
                a.style.fontSize = btnSizeEl.value;
                a.style.textDecoration = "none";
                a.target = "_blank";

                button.append(a);
                titleButtonBox.append(button);
            } else {
                Swal.fire({
                    title: "Note",
                    text: "Button text and button color are required!",
                    icon: "warning"
                });
            }
        } else {
            Swal.fire({
                title: "Note",
                text: "Only two buttons are allowed to add!",
                icon: "warning"
            });
        }
    }

    // add header showcase image
    allInputEl[0].onchange = () => {
        let file = allInputEl[0].files[0];
        let fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        if (file.size < 200000) {
            fileReader.onload = (e) => {
                let url = e.target.result;
                let image = new Image();

                image.src = url;

                image.onload = () => {
                    let originalHeight = image.height;
                    let originalWidth = image.width;

                    if (originalHeight === 680 && originalWidth === 1920) {
                        image.style.width = "100%";
                        image.style.position = "absolute";
                        image.style.top = "0";
                        image.style.left = "0";

                        showcasePreview.append(image);
                    } else {
                        Swal.fire({
                            title: "FAILED!",
                            text: "Please upload image with height of 680 and width of 1920!",
                            icon: "warning"
                        });
                    }
                }
            }
        } else {
            Swal.fire({
                title: "FAILED!",
                text: "Please upload image less than or 200 kb!",
                icon: "warning"
            });
        }
    }

    // set alignments for header
    for (let el of allAlignmentEl) {
        el.onclick = () => {

            let alignPosition = el.getAttribute("align-position");
            let alignValue = el.getAttribute("align-value");

            if (alignPosition == "h") {
                showcasePreview.style.justifyContent = alignValue;
            } else if (alignPosition == "v") {
                showcasePreview.style.alignItems = alignValue;
            }
        }
    }
}