var pass = prompt("Enter Password");
var p = "kripa my forever sister";

{
    if(pass === p){
        alert("Hmmmm, correct password, please go further");
    }

    if(pass !== p){
       alert("Kya mila galat password insert karke, hahahaha, nahi open hoga, hahahaha, cancle button se bhi open nahi hoga, hahahaha");
       window.location="index.html"
    }
}