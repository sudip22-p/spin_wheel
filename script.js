let wheel=document.querySelector(".wheel");
let spinBtn=document.querySelector(".spinBtn");
let spinValue=Math.floor(Math.random() * (7200 - 3610) + 3610);
spinBtn.addEventListener("click",()=>{
    wheel.style.transform="rotate("+spinValue+"deg)";
    spinValue+=Math.floor(Math.random() * (7200 - 3610) + 3610);
});