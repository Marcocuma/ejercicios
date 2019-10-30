var stringuser=prompt("Write the string");
document.write("Cadena invertida: "+inviertecadena(stringuser)+"</br>");
document.write("Longitud de la palabra mas larga: "+encuentralapalabramaslarga(stringuser)+"</br>");
document.write("Palabras mas largas que el numero introducido: "+filtrapalabrasmaslarga(stringuser,3)+"</br>");
document.write("Formateo de frase: "+cadenaBienFormada(stringuser)+"</br>");
document.write("La cadena es: "+stringInfo(stringuser)+"</br>");
subCadena(stringuser);
document.write(consoVocal(stringuser)+"</br>");
document.write(delRep("paula paula paula")+"</br>");
document.write(isSub(stringuser, "que")+"</br>");
document.write(isPalin(stringuser)+"</br>");
document.write(countWords(stringuser)+"</br>");
table(stringuser);

function inviertecadena(string1){
    var string2="";
    for (let index = string1.length; index >= 0 ; index--) {
        string2=string2+string1.charAt(index);
    }
    return string2;
}
function encuentralapalabramaslarga(string1){
    let contador=0,mayor=0;
    for (let index = 0; index < string1.length; index++) {
        if(string1.charAt(index)==" "||index==string1.length-1){
            if (contador>mayor) {
                mayor=contador;
            }
            contador=0;
        } else {
            contador++;
        }
    }
    return mayor;
};
function filtrapalabrasmaslarga(string1, i){
    let contador=0,nump=0;
    for (let index = 0; index < string1.length; index++) {
        if(string1.charAt(index)==" "||index==string1.length-1){
            if (contador>i) {
                nump++;
            }
            contador=0;
        } else {
            contador++;
        }
    }
    return nump;
}
function cadenaBienFormada(string1){
    string2=string1.charAt(0).toUpperCase()+string1.substr(1).toLowerCase();
    return string2;
}
function stringInfo(string1){
    if(string1===string1.toUpperCase()){
        return "Mayuscula";
    } else if(string1===string1.toLowerCase()){
        return "Minuscula";
    } else {
        return "Mayuscula y minuscula"
    }
}
function subCadena(string1){
    let subs="",cont=1;
    for (let index = 0; index <= string1.length; index++) {
        if(string1.charAt(index)==" "||index==string1.length){
            document.write("Substring "+(cont++)+" = "+subs+"</br>");
            subs="";
        } else {
            subs=subs+string1.charAt(index);
        }
    }
}
function consoVocal(string1){
    let vocal=["a","e","i","o","u"];
    let counter=0;
    let isvocal=false;
    let vocals=result="";
    for (let index = 0; index < string1.length; index++) {
        while(isvocal==false&&counter<=vocal.length) {
            if(string1.charAt(index)!==vocal[counter]/*&&string1.charAt(index)!==(vocal[counter].toUpperCase())*/)
                isvocal=false;
            else
                isvocal=true;
            counter++
        }
        counter=0;
        if(isvocal==false){
            if (string1.charAt(index)!=" ")
                result=result+string1.charAt(index);
        } else {
            vocals=vocals+string1.charAt(index);
        }
        isvocal=false;
    }
    result=result+vocals;
    return result
}
function delRep(string1){
    let result=string1.charAt(0);
    let equal=false;
    let counter=0;
    for (let index = 1; index < string1.length; index++) {
        while (counter<result.length&&equal==false) {
            if (string1.charAt(index)==result.charAt(counter)||string1.charAt(index)==" "){
                equal=true;
            }
            counter++;
        }
        counter=0;
        if (!equal) {
            result=result+string1.charAt(index);
        }
        equal=false;
    }
    return result;
}
function isSub(string1,string2){
    let subs="",num=0;
    for (let index = 0; index <= string1.length; index++) {
        if(string1.charAt(index)==" "||index==string1.length){
            if(subs==string2)
                return "si es substring y empieza a partir de "+num;
            subs="";
            num=index+1;
        } else {
            subs=subs+string1.charAt(index);
        }
    }
    return "No es substring";
}
function isPalin(string1){
    let mirror=""
    for (let index =string1.length-1; index >= 0; index--) {
        mirror=mirror+string1.charAt(index);
    }
    if (mirror==string1) {
        return "Es palindromo";
    }
    return "No es palindromo";
}
function countWords(string1){
    let counter=0;
    for (let index = 0; index < string1.length; index++) {
        if(string1.charAt(index)!=" "){
            counter++;
        }
    }
    return counter;
}
function table(string1){
    document.write("<table border=\"1\">");
    for (let index = 0; index < string1.length; index++) {
            document.write("<tr>");
            document.write("<td>"+string1.charAt(index)+"</td>");
        for (let index2 = 1; index2 < string1.length-1; index2++) {    
            if(index==0){
                document.write("<td>"+string1.charAt(index2)+"</td>");
            }else if (index==string1.length-1) {
                document.write("<td>"+string1.charAt(((index)-index2))+"</td>");
            } else
                document.write("<td></td>");
        }
        document.write("<td>"+string1.charAt((string1.length-1)-index)+"</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}