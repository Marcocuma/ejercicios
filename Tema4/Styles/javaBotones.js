var tamaño=12;
function incrementarFuente(){
    parrafos=document.getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        tamaño++;
        parrafos[i].style.fontSize=(tamaño)+"px";
    }
}
function reducirFuente(){
    parrafos=document.getElementsByTagName("p");
    tamaño--;
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.fontSize=(tamaño-1)+"px";
    }
}
function justificarFuente(){
    document.body.style.textAlign="justify";
}
function alinearFuente(){
    document.body.style.textAlign="right";
}