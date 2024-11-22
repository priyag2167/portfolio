/*------------============toggle Style Switcher ===========----------*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click" ,() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style switcher on scroll
window.addEventListener("scroll" ,() => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})
/*------------============theme Colors ===========----------*/
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(Color)
{
    alternateStyle.forEach((style) => {
        if(Color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled" ,"true");
        }
    })
}
/* ================ Theme light and dark  Mode ==================*/
const daynight = document.querySelector(".day-night");
daynight.addEventListener("click" , () => {
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load" , () => {
    if(document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("fa-sun");
    }
    else{
        daynight.querySelector("i").classList.add("fa-moon");
    }
})