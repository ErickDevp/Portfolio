let show = true

const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")
const navClose = document.querySelector("ul")



navClose.addEventListener("click", () => {        
        
    menuSection.classList.remove("on")
})

menuToggle.addEventListener("click", () => {
    
    menuSection.classList.toggle("on", show)
    show = !show;
})
