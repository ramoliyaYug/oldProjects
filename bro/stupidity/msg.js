const text = "hello friends how are you all? i am fine.";

const paragraph = text.split("");

let i = 0;

function dashOut(arr){
    if(i < arr.length){
        console.log(arr[i]);
        document.querySelector(".textCount").textContent += arr[i];

        i++
        console.log("the i count: " + i);
        setTimeout(function () {
            dashOut(arr);
        }, interval(arr[i]));
    }
}

function interval(letter){
    console.log(letter);
    if(letter == ";" || letter == "." || letter == ","){
        return Math.floor(Math.random() * 500 +500);
    }else{
        return Math.floor(Math.random() * 130 + 5);
    }
}

function startFromBegin(){
    i = 0;
    dashOut(paragraph);
}

startFromBegin();