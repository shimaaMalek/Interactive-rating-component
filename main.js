const rateState=document.querySelector("#rate-state");
const thanksState=document.querySelector("#thanks-state");
const submit=document.querySelector("#submit-btn");
const rateBtn=document.querySelectorAll(".rate-btn");
const rate=document.querySelector("#rate");


rateBtn.forEach((el)=>{
    el.addEventListener("click",()=>{
        rate.innerHTML=el.innerHTML;
    });
});

submit.addEventListener("click",()=>{
    rateState.classList.toggle("hidden");
    thanksState.classList.toggle("hidden");
});
