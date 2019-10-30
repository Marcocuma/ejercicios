paresImpares();
function paresImpares(){
    let array1=new Array(100);
    for (let index = 0; index < array1.length; index++) {
        array1[index]=Math.floor(Math.random()*1000+1);    
    } 
    document.write(array1);
    let array2=array1.sort(function(a,b){
        if (a%2==0)
            return -1;
        if(b%2==0)
            return 1;
    });
    document.write("</br></br>");
    document.write(array2);
}
var arrayEjem= new Array(10);
function arrayA0(array1){
    for (let index = 0; index < 10; index++) {
        array1[index]=0;
    }
    return array1;
}
function arrayA1(array1){
    for (let index = 0; index < array1.length; index++) {
        array1[index]=1;
    }
    return array1;
}
function separarEspacios(array1){
    return array1.join(' ');
}
document.write("</br></br>");
document.write(arrayA0(arrayEjem));
document.write("</br></br>");
document.write(arrayA1(arrayEjem));
document.write("</br></br>");
document.write(separarEspacios(arrayEjem));
arrayBiDados();
function arrayBiDados(){
    let array1= Array(6);
    for (let index = 0; index < 6; index++) {
        array1[index]=new Array(6)
        for (let index2 = 0; index2 < 6; index2++) {
            array1[index][index2]=0;
        }
    }
    for (let index = 0; index < 36000; index++) {
        let dado1=Math.floor(Math.random()*6+1);
        let dado2=Math.floor(Math.random()*6+1);
        array1[dado1-1][dado2-1]++;
    }
    document.write("<table border=\"1\">");
    for (let index = 0; index <= 6; index++) {
        document.write("<tr>");
        if (index!=0)
        document.write("<td>"+(index)+"</td>");
            for (let index2 = 0; index2 <= 6; index2++) {
                if(index==0)
                    document.write("<td>"+(index2)+"</td>");
                else if(index2!=6)
                    document.write("<td>"+(array1[index-1][index2])+"</td>")
            }
        document.write("</tr>");
    }
    document.write("</table>");
    document.write(array1[0][5]);
}