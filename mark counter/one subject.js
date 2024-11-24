function calculate(){
    var a=parseInt(document.getElementById('attempted').value);
    var w=parseInt(document.getElementById('wrong').value);
    var c=a-w;
    if(a>50 || w>50 || w<0 || a<0 || a<w){
        alert("Please Enter Correct Value");
    }
    else{
        var total=a*4 - w*5;
        document.getElementById("score").innerHTML=total+"/200";
        var per=total/200*100;
        document.getElementById("average").innerHTML=per+"%";
        var acc=c/a*100;
        document.getElementById("accuracy").innerHTML=acc+"%";
    }
}