const sidebar = document.querySelector(".sidebar")
const sideBarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");

const collapsedSidebarHeight = "56px";
const fullSidebarHeight = "calc(100vh - 32px)"

//Toggle sidebar collapsed status
sideBarToggler.addEventListener("click", ()=> {
    sidebar.classList.toggle("collapsed");
});

const toggleMenu = (isMenuActive) => {
    sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : ``;
    collapsedSidebarHeight;
    menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";

}

menuToggler.addEventListener("click", () =>{
    toggleMenu(sidebar.classList.toggle("menu-active"));
})

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024){
        sidebar.style.height = "auto";
        toggleMenu(sidebar.classList.contains("menu-active"));
    }
})