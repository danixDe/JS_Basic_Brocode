//Image slider
const slides = document.querySelectorAll(".slides img");
let slideIndex=0; 
let intervalId = null;

document.addEventListener("DOMContentLoaded",initializeSlider);//copied shit

function initializeSlider(){
    if(slides.length>0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide , 10000);
    }
  
}
function nextSlide(){                                       //own shit
    slideIndex++;
    showSlide(slideIndex);
}
function showSlide(index){
    if(index>=slides.length){
        slideIndex=0;
    }
    else if(index<0){
        slideIndex=slides.length-1;

    }
    slides.forEach(slide=>{
        slide.classList.remove("displaySlide");
       
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}
//my fucking idea boiiiiii
const next = document.getElementById("next");
const prev = document.getElementById("prev");
next.addEventListener("click",prevSlide);
prev.addEventListener("click",nextSlide);
//just clicked🫠
document.addEventListener("keydown",function(event){
   
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowLeft":
                prevSlide();
                break;
            case "ArrowRight":
                nextSlide();
                break;
            default:
                break;
                
            
        }
    }
})