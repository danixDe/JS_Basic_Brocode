const decrease = document.getElementById("decrease");
const reset =document.getElementById("reset");
const increase = document.getElementById("increase");
const countable=document.getElementById("countable");
let count=0;
increase.onclick = function(){
    count++;
    countable.textContent=count;

}
decrease.onclick=function(){
    count--;
    countable.textContent=count;
}
reset.onclick=function(){
    count=0;
    countable.textContent=count;
}