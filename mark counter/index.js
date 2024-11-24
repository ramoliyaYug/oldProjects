var password = "yugramoliya";

function passcheck(){
    if(document.getElementById('pass1').value != password) {
        alert('Wrong Password, Try Again');
        return false;
    }

    if(document.getElementById('pass1').value == password){
        alert('Correct Password, Click Ok To View Page');
        return true;
    }
}