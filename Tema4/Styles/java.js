function temaNormal(){
    document.getElementById("enlaces").style.backgroundColor="rgb(135, 246, 234)";
    document.getElementById("enlaces").style.border="solid";
    document.getElementById("enlace1").style.textDecoration="none";
    document.getElementById("enlace2").style.textDecoration="none";
    document.getElementById("enlace1").style.color="rgb(36, 46, 225)";
    document.getElementById("enlace2").style.color="rgb(36, 46, 225)";
    document.getElementsByTagName("body")[0].style.backgroundColor="rgb(241, 238, 112)";
    document.getElementsByTagName("body")[0].style.width="80%";
    document.getElementsByTagName("body")[0].style.margin="0 auto";
    document.getElementsByTagName("html")[0].style.backgroundColor="rgb(112, 241, 191)";
    document.getElementById("invisible").style.visibility="visible";
    document.getElementById("invisible").style.fontWeight="bolder";
    document.getElementById("marco").style.border="solid";
    document.getElementById("marco").style.backgroundColor="yellow";
}
function temaSimple(){
    document.getElementById("enlaces").style.backgroundColor="white";
    document.getElementById("enlace1").style.textDecoration="underline";
    document.getElementById("enlace2").style.textDecoration="underline";
    document.getElementById("enlaces").style.border="";
    document.getElementById("enlace1").style.color="";
    document.getElementById("enlace2").style.color="";
    document.getElementsByTagName("body")[0].style.backgroundColor="white";
    document.getElementsByTagName("html")[0].style.backgroundColor="white";
    document.getElementsByTagName("body")[0].style.width="";
    document.getElementsByTagName("body")[0].style.margin="";
    document.getElementById("invisible").style.visibility="hidden";
    document.getElementById("invisible").style.fontWeight="";
    document.getElementById("marco").style.border="";
    document.getElementById("marco").style.backgroundColor="white";
}