
const burgeMenu =document.getElementById("burgeMenu");
const closeMenu =document.getElementById("closeMenu");
const sideNav =document.getElementById("sideNav");
const navOverlay =document.getElementById("navOverlay");
const header =document.getElementById("header");

const openSideNav = function() {
    navOverlay.style.display = "block";
    sideNav.classList.add("opened");
    // document.body.style.overflow = "hidden";
}
const closeSideNav = function() {
    navOverlay.style.display = "none";
    sideNav.classList.remove("opened");
    // document.body.style.overflow = "visible";
}

const windowScroll = function() {
    if(window.pageYOffset > 100) {
        header.classList.add("add-bg");
    } else {
        header.classList.remove("add-bg");
    }
}

burgeMenu.addEventListener("click", openSideNav, false);
closeMenu.addEventListener("click", closeSideNav, false);
window.addEventListener("scroll", windowScroll, false);