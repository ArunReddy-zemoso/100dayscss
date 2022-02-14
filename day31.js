let minus=document.getElementById("button-minus");
let plus=document.getElementById("button-plus");
let counter=document.getElementById("counter");
let c=0;
plus.addEventListener("click",function(){
    counter.innerHTML=++c;
})
minus.addEventListener("click",function(){
    counter.innerHTML=--c;
})

