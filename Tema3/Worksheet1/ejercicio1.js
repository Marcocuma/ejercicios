document.getElementById("ejercicio1").innerHTML=maximo(1,12,8,3);

function maximo(val1,val2,val3,val4){
    let mayor=0;
    if (val1>mayor) 
        mayor=val1;
    if (val2>mayor) 
        mayor=val2;
    if (val3>mayor)
        mayor=val3;
    if (val4>mayor)
        mayor=val4;
    return mayor;
}
function tiradaDado(){
    document.getElementById("ejercicio2").innerHTML=dado();
}
function simulacionDado(){
    let num0=num1=num2=num3=num4=num5=num6=0;
    let dadon;
    for (let index = 0; index < 6000; index++) {
        dadon=dado();
        if (dadon==0)
            num0++;
        else if (dadon==1)
            num1++;
        else if (dadon==2)
            num2++;
        else if (dadon==3)
            num3++;
        else if (dadon==4)
            num4++;
        else if (dadon==5)
            num5++;
        else
            num6++;   
    }
    document.getElementById("ejercicio3").innerHTML="->0= "+num0+"  ->1= "+num1+"  ->2= "+num2+" ->3= "+num3+"  ->4= "+num4+"   ->5= "+num5+"   ->6= "+num6;
}
function dado(){
    return Math.floor(Math.random()*7);
}
function llamaEsfera(){
    valor=esfera(document.getElementById("valorRadio").value);
    document.getElementById("ejercicio4").innerHTML=valor;
}
function esfera(radio){
    return (4/3*Math.PI*Math.pow(radio,3));
}
function llamaFactorial(){
    let num=document.getElementById("valorFactorial").value;
    document.getElementById("ejercicio6").innerHTML=factorial(num);
}
function factorial(num){
    if (num!=0) 
        return num*factorial(num-1);
    return 1;
    }
function llamaPotencia(){
    let num=document.getElementById("valorNumero").value;
    let exp=document.getElementById("valorPotencia").value;
    document.getElementById("ejercicio5").innerHTML=potenciaRecursiva(num,exp);
}
function potenciaRecursiva(num,exp){
    if(exp>0)
        return num*potenciaRecursiva(num,exp-1);
    return 1
}
function tablaFactoriales(){
    document.write("<table>");
    for (let index = 1; index <= 10; index++) {      
        document.write("<tr>");
            document.write("<td>"+index+"</td>");
            document.write("<td>"+factorial(index)+"</td>");
        document.write("<tr>")
    }
    document.write("</table>");
}