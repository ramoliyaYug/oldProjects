"user strict"

const boxes= document.querySelectorAll('.box');

window.addEventListener('scroll' , DisplayContent);

function DisplayContent(){
    const TriggerBottom = (window.innerHeight /5) *4;

    boxes.forEach((box)=>{
        const TopBox = box.getBoundingClientRect().top;

        if(TopBox<TriggerBottom){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    })
}