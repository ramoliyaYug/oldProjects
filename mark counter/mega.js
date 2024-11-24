function calculate(){
    var a=parseInt(document.getElementById('pattempted').value);
    var b=parseInt(document.getElementById('pwrong').value);
    var c=a-b;
    var d=parseInt(document.getElementById('cattempted').value);
    var e=parseInt(document.getElementById('cwrong').value);
    var f=d-e;
    var g=parseInt(document.getElementById('mattempted').value);
    var h=parseInt(document.getElementById('mwrong').value);
    var i=g-h;
    var j=a+d+g;
    var k=b+e+h;
    var l=j-k;
    if(a>30 || b>30 || a<b || d>30 || e>30 || d<e || g>30 || h>30 || g<h){
        alert("Please Enter Correct Value");
    }

    else{
        var ptotal=a*4 - b*5;
        document.getElementById("ps").innerHTML=ptotal+"/100";
        var paverage=ptotal/100*100;
        document.getElementById("pavg").innerHTML=paverage+"%";
        var paccuracy=c/a*100;
        document.getElementById("pacc").innerHTML=paccuracy+"%";

        var ctotal=d*4 - e*5;
        document.getElementById("cs").innerHTML=ctotal+"/100";
        var caverage=ctotal/100*100;
        document.getElementById("cavg").innerHTML=caverage+"%";
        var caccuracy=f/d*100;
        document.getElementById("cacc").innerHTML=caccuracy+"%";

        var mtotal=g*4 - h*5;
        document.getElementById("ms").innerHTML=mtotal+"/100";
        var maverage=mtotal/100*100;
        document.getElementById("mavg").innerHTML=maverage+"%";
        var maccuracy=i/g*100;
        document.getElementById("macc").innerHTML=maccuracy+"%";

        var ototal=j*4 - k*5;
        document.getElementById("ts").innerHTML=ototal+"/300";
        var oaverage=ototal/300*100;
        document.getElementById("tavg").innerHTML=oaverage+"%";
        var oaccuracy=l/j*100;
        document.getElementById("tacc").innerHTML=oaccuracy+"%";
        document.getElementById("totattm").innerHTML=j;
        document.getElementById("totwro").innerHTML=k;
    }
}