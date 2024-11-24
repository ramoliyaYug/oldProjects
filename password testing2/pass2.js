var passw = "ydr";

function pass(){
    if(document.getElementById("pass").value != passw){
        alert("Wrong");
        return false;
    }

    if(document.getElementById("pass").value == passw){
        alert("Success");
        return true;
    }
}