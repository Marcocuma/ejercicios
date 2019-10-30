var fecha=new Date();
document.write("Current year: "+fecha.getFullYear()+" ");
document.write("Current month: "+fecha.getMonth()+" ");
document.write("Current day: "+fecha.getDay()+" ");
document.write("Current hour: "+fecha.getHours()+" ");
document.write("Current minutes: "+fecha.getMinutes()+" ");
document.write("Current seconds: "+fecha.getSeconds()+" ");

var fechaHoy=new Date();
var fecha85=new Date();
fecha85.setDate(fecha85.getDate()+85);
var fecha187=new Date();
fecha187.setDate(fecha187.getDate()-187);
fecha85.setFullYear(fecha85.getFullYear()+2);
fecha187.setHours(fecha187.getHours()+24);;
var fechaResto=new Date(fecha85.getTime()-fecha187.getTime());
document.write("</br>");
document.write("</br>");
document.write(fechaResto.getFullYear()+" "+fechaResto.getMonth()+" "+fechaResto.getDay()+" "+fechaResto.getHours()+" "+fechaResto.getMinutes()+" "+fechaResto.getSeconds());
var contador=60;
function count(){
    document.getElementById("cuentaatras").innerHTML=contador--;
    if (contador==0){
        document.getElementById("cuentaatras").innerHTML=contador;
    }else{
        setTimeout(count,1000);
    }

}
setTimeout(count(),1000);
function onemoresecond(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("reloj").innerHTML = t;
    setTimeout(onemoresecond,1000);
}
setTimeout(onemoresecond,1000);
setTimeout(count,1000);
