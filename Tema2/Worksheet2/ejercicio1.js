document.write(Math.random());
document.write("</br>");
document.write((Math.random()*100)+100);
/*var num1=parseInt(prompt("Insert the first number"));
var num2=parseInt(prompt("Insert the second number"));
document.write("</br>");
if(num1<num2){
    var num3=num1;
    num1=num2;
    num2=num3;
};
document.write((Math.random()*(num1-num2))+(num2));*/
document.write("</br>");
document.write("</br>");
document.write("<h3>Solving a second grade ecuation</h3>");
document.write("</br>");
ecuacion(5,2,0);
document.write("</br>");
document.write("</br>");
document.write("<h3>Generating a table</h3>");
document.write("</br>");
tablegenerator();
document.write("</br>");
document.write("</br>");
document.write("<h3>Normal images</h3>");
document.write("</br>");
showfoto();
function ecuacion(a,b,c){
    let solution, solution2;
    if (b!=0&&c!=0){
        solution=((-b+Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a));
        solution2=((-b-Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a));
    } else if (b==0){
        solution=Math.sqrt(-(c/a));
        solution2=Math.sqrt(+(c/a));
    } else if (c==0){
        solution=0;
        solution2=-(b/a);
    } else {
        solution=solution2=0;
    }
    document.write("The first solution is "+solution+" and the second is "+solution2);
}
function tablegenerator(){
    document.write("<table border=\"1\">");
    for (let index = 0; index < 100; index++) {
        document.write("<tr>");
            document.write("<td>"+index+"</td>");
            document.write("<td>"+(parseFloat(Math.sin(index)))+"</td>");
        document.write("</tr>");        
    }
    document.write("</table>");
}
function showfoto(){
    let num=Math.round((Math.random()*2)+1);
    switch (num) {
        case 1:
            document.write("<img src=\"https://media1.tenor.com/images/2c26ae387e30540a18fa678ef2c7ca91/tenor.gif\" alt=\"gif1\" height=\"420\" width=\"420\">");
            break;
        case 2:
            document.write("<img src=\"https://media1.tenor.com/images/fdbaba139360b6c0b64d6bb3e7356224/tenor.gif\" alt=\"gif2\" height=\"420\" width=\"420\">");
            break;
        case 3:
            document.write("<img src=\"https://thumbs.gfycat.com/WellwornSadHeron-max-1mb.gif\" alt=\"gif3\" height=\"420\" width=\"420\">");
            break;
        default:
            break;
    }
}