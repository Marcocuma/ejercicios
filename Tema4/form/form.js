function compruebaNombre(event){
    texto=event.target.value;
    expresion=new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");
    if (expresion.test(texto)){
        event.target.style.backgroundColor="green";
    } else{
        event.target.style.backgroundColor="red";
    }
}
function compruebaDNI(event){
    texto=event.target.value;
    expresion=new RegExp(/^[0-9]{8,8}[A-Za-z]$/);
    if (expresion.test(texto)){
        event.target.style.backgroundColor="green";
    } else{
        event.target.style.backgroundColor="red";
    }
}
function compruebaTelf(event){
    texto=event.target.value;
    expresion=new RegExp(/^([0-9]{9})$/);
    if (expresion.test(texto)){
        event.target.style.backgroundColor="green";
    } else{
        event.target.style.backgroundColor="red";
    }
}
function compruebaEmail(event){
    texto=event.target.value;
    expresion=new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/);
    if (expresion.test(texto)){
        event.target.style.backgroundColor="green";
    } else{
        event.target.style.backgroundColor="red";
    }
}
function compruebaUser(event){
    texto=event.target.value;
    expresion=new RegExp(/^[a-zA-Z0-9.]{8,}$/);
    if (expresion.test(texto)){
        event.target.style.backgroundColor="green";
    } else{
        event.target.style.backgroundColor="red";
    }
}