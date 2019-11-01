function alerta(){
    alert("Hola");
}
function coordenadas(){
    let x = window.event.clientX;
    let y = window.event.clientY;
    document.getElementById("coordenadas").innerHTML="<p>Coordenada X "+x+" Coordenada Y "+y+"</p>";
}
function createTable(){
    let tabla="<table border=\"1\">";
    for (let i = 0; i < 100; i++) {
        tabla+="<tr>";
        for (let j = 0; j < 100; j++) {
            tabla+="<td onmouseover=\"pinta(event)\"></td>"
        }
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("tabla").innerHTML=tabla;
}
window.onload=function(){createTable()}
function pinta(event){
    if (event.ctrlKey) {
        event.target.style.backgroundColor="red";
    } else if (event.shiftKey){
        event.target.style.backgroundColor="blue";
    } else if (event.altKey){
        event.target.style.backgroundColor="white";
    }
}
function borraTabla(event){
        createTable();
}
var imagenPulsada=false;
var imagen;
var top,left,x,y;
function clickImagen(event) {
    imagenPulsada=!imagenPulsada;
    console.log(imagenPulsada);
    console.log("Funciona el click");
    imagen=event.target;
    left=y-imagen.vspace;
    topo=x-imagen.hspace;
}
function ratonEnMovimiento(event){
    x=event.clientX;
    y=event.clientY;
    if (imagenPulsada) {
        console.log("Funciona el movimiento");
        console.log(left);
        console.log(topo);
        imagen.vspace=(y-left);
        imagen.hspace=(x-topo);

    }
}
