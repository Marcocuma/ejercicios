tablewhile();
function headings(){
    document.write("<h1>Headings</h1>")
    for (let index = 1; index < 7; index++) {
        document.write("<h"+index+">Heading h"+index+" </h"+index+">");        
    }
}
function table(){
    let col=parseInt(prompt("Insert the column number"));
    let height=parseInt(prompt("Insert the height"));
    let width=parseInt(prompt("Insert the width"));
    document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\" width=\"200\">");
    document.write("<tr bgcolor=\"white\" height=\""+height+"\">");
    var color;
    for (let index = 0; index < col; index++) {
        if(index%2==0)
            color="White";
        else
            color="Black";
        document.write("<td width=\""+width+"\" bgcolor=\""+color+"\">&nbst</td>");
    }
}
function tablewhile(){
    let col=parseInt(prompt("Insert the column number"));
    let height=parseInt(prompt("Insert the height"));
    let width=parseInt(prompt("Insert the width"));
    document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\" width=\"200\">");
    document.write("<tr bgcolor=\"white\" height=\""+height+"\">");
    let color;
    let contador=0;
    while(contador<col){
        if(contador%2==0)
            color="White";
        else
            color="Black";
        document.write("<td width=\""+width+"\" bgcolor=\""+color+"\">&nbst</td>");
        contador++;
    }
}
function randomnum(){
    let num=parseInt(prompt("Player 1: Write the number"));
    let num2=parseInt(prompt("Player 2: Guess the number"));
    while (num2!=num) {
        document.write("</br>");
        if(num2<num)
            document.write(num2+" is smaller");
        else if (num2>num)
            document.write(num2+" is bigger");
        else
            document.write("This is not a correct number");
        num2=parseInt(prompt("Player 2: Guess the number"));
    }
    document.write("</br>");
    document.write("Congratulations!!. Insert you phone number to win the Ifon!!!")
}
function randomnumdow(){
    let num=parseInt(prompt("Player 1: Write the number"));
    let num2=parseInt(prompt("Player 2: Guess the number"));
    do {
        document.write("</br>");
        if(num2<num)
            document.write(num2+" is smaller");
        else if (num2>num)
            document.write(num2+" is bigger");
        else
            document.write("This is not a correct number");
        num2=parseInt(prompt("Player 2: Guess the number"));
    }while (num2!=num);
    document.write("</br>");
    document.write("Congratulations!!. Insert you phone number to win the Ifon!!!")
}
function multiply(){
    for (let index = 0; index < 11; index++) {
        document.write("<h3>Multiplication table of "+index+"</h3>");
        document.write("</br>")
        document.write("</br>")
        for (let index2= 0; index2 < 11; index2++) {
            document.write(index+" x "+index2+"= "+(index*index2));
            document.write("</br>")
        }
    }
}
function table2(){
    let col=parseInt(prompt("Insert the column number"));
    let row=parseInt(prompt("Insert the rows number"));
    let height=parseInt(prompt("Insert the height"));
    let width=parseInt(prompt("Insert the width"));
    document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"Black\" width=\"200\">");
    for (let index = 0; index < row; index++) {
        document.write("<tr bgcolor=\"white\" height=\""+height+"\"")
        for (let index2 = 0; index2 <= col; index2++) {
            document.write("<td width\""+width+"\">&nbsp;</td>");
        }
    }
}
function chess(){
    let color;
    let height=parseInt(prompt("Insert the height"));
    document.write("<table border=\"1\" border-collapse=\"collapse\" cellspacing=\"2\">");
    for (let index = 0; index < 8; index++) {
        document.write("<tr height=\""+height+"\">")
        for (let index2 = 0; index2 <= 8; index2++) {
            if((index+index2)%2!=0)
                color="White";
            else
                color="Black";
            document.write("<td width=\""+height+"\" bgcolor=\""+color+"\">&nbsp;</td>");
        }
    }
}