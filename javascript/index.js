const bars = document.querySelector("aside .bars");
const sideMenu = document.querySelector(".side-menu");
const childrens = sideMenu.children;
let closed = false;

bars.addEventListener("click",function(){
    if (closed){
        for (child of childrens){
            if (child === childrens[1]){
                child.style.display = "flex";
            } else {
                child.style.display = "block";
            }
            sideMenu.classList.add("open");
            sideMenu.classList.remove("close");
        }
        closed = false;
    } else {
        setTimeout(function(){
            for (child of childrens){
                child.style.display = "none";
            }
            closed = true;
        },300);
        sideMenu.classList.add("close");
        sideMenu.classList.remove("open");
    }
})