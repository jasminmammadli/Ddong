const sideBar = document.querySelector(".sideBar")
const faXmark = document.querySelector(".fa-xmark")
const header = document.querySelector("header")
const overlay = document.querySelector("#overlay")

function toggleSidebar() {
    sideBar.classList.add("closeSide")
    document.body.setAttribute("style", "overflow:hidden")
    overlay.classList.add("overlay-open")
}
faXmark.addEventListener("click", close_sidebar)
overlay.onclick = close_sidebar
function close_sidebar() {
    sideBar.classList.remove("closeSide")
    document.body.setAttribute("style", "overflow:visible");
    overlay.classList.remove("overlay-open")
}