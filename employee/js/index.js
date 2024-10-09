window.onload = () => {
    collapseSideNavLinks();
    dynamicRequestCategoryDesignPage();
}

// global variables
let allCategoryData = [];
let allBrandData = [];
let allProductData = [];
let allBrandingDetailsData = [];

let dynamic_link = "";
let thumbnail = "";
let front = "";
let back = "";
let right = "";
let left = "";
let brandingLogo = "";

// navbar toggler js function
const toggleSideNavbar = () => {
    let toggleNavBtn = document.querySelector(".toggler-btn");
    let sideNavEl = document.querySelector(".side-nav");
    let pageEl = document.querySelector(".page");

    toggleNavBtn.onclick = () => {
        let isSideNavOpen = sideNavEl.classList.contains("side-nav-open");

        isSideNavOpen ? (
            sideNavEl.classList.add("side-nav-close"),
            sideNavEl.classList.remove("side-nav-open"),

            pageEl.classList.add("page-close"),
            pageEl.classList.remove("page-open")
        ) : (
            sideNavEl.classList.remove("side-nav-close"),
            sideNavEl.classList.add("side-nav-open"),

            pageEl.classList.remove("page-close"),
            pageEl.classList.add("page-open")
        )
    }
}

// side navbar button list collapse control
const collapseSideNavLinks = () => {
    let collapseSideNavBtn = document.querySelector(".collapse-btn");

    collapseSideNavBtn.onclick = (event) => {
        let ul = event.target.nextElementSibling;

        ul.classList.toggle("show");
    }
}

// dynamic request category-design page coding
const dynamicRequestCategoryDesignPage = () => {
    let activeLinkEl = document.querySelector(".active");
    let activeAccessLink = activeLinkEl.getAttribute("access-link");
    let allCollapseBtn = document.querySelectorAll(".collapse-item");

    // on page load call dynamic page request on which the active link is active
    dynamicAjaxFunc(activeAccessLink);

    for (let element of allCollapseBtn) {

        element.onclick = (e) => {
            // do for loop to remove active class
            for (let child of allCollapseBtn) {
                child.classList.remove("active");
            }

            let accessLink = e.target.getAttribute("access-link");

            dynamicAjaxFunc(accessLink);
            element.classList.add("active");
        }
    }
}

// dynamic ajax request category-design page coding
const dynamicAjaxFunc = (link) => {
    dynamic_link = link;
    let page = document.querySelector(".page");
    let ajax = new XMLHttpRequest();

    ajax.open('POST', link, true);
    ajax.send();

    // getting response
    ajax.onload = () => {
        let response = ajax.response;
        page.innerHTML = response;
        toggleSideNavbar();

        // call category js functions when page loaded
        if (link === "dynamic/category-design.html") {
            createCategoryFunc(link);
        }
        else if (link === "dynamic/brand-design.html") {
            createBrandFunc(link);
        }
        else if (link === "dynamic/product-design.html") {
            createProductFunc(link);
        }
        else if (link === "dynamic/branding-design.html") {
            createBrandingFunc(link);
        }
    }
}