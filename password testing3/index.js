var pass = prompt("Enter Password");
var p = "yug";

{
    if(pass === p){
        alert("Correct");
    }

    if(pass !== p){
       alert("Wrong");
       window.location="index.html"
    }
}