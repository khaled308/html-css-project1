const btn = document.querySelector(".header .bars");
const list = document.querySelector(".header .container ul");

btn.addEventListener("click",()=>{
    list.classList.toggle("appear");
})