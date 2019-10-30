for (let i=0; i<4; i++){
    document.write("<img id=\"id"+i+"\"src=\"imagenes/img"+(i+1)+".jpg\"></img></br>")
}
function contarImagenes(){
    document.getElementById("NImg").innerHTML=document.images.length;
}
function idImg(num){
    document.getElementById("IDImg").innerHTML=document.images.item(num).id;
}
function numOfLinks(){
    document.getElementById("Links").innerHTML=document.links.length;
}