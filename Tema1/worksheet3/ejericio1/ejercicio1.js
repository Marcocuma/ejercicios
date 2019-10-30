calculateSupply();
function tellFortune(){
    let numc=prompt("Write the number of childrens you want");
    let part=prompt("Write your partner name");
    let locat=prompt("Write your location");
    let job=prompt("Write your job title");
    if(isNaN(numc)||part.length==0||locat.length==0||job.length==0){
        document.write("Error, you miss to fill all");
    } else {
        document.write("You will be a "+job+" in "+locat+" , and married to "+part+" with "+numc+" kids.");
    }
}
function ageCalculator(){
    let byear=parseInt(prompt("Write your birth year"));
    let ayear=new Date().getFullYear();
    if (isNaN(byear)){
        document.write("Write the years correctly");
    }else {
    let age=ayear-byear;
    document.write("You are either "+(age-1)+" or "+(age))
    }
}
function calculateSupply(){
    let age=parseInt(prompt("Write your age"));
    let amountpd=Math.round(prompt("Write the amount per day"));
    const maxAge=122;
    let fsupply=amountpd*(365*(maxAge-age));
    document.write("You will need "+ fsupply+" to last you until the ripe old age of "+maxAge);
}
function calCircumfrence(radius){
    document.write("The circunference is "+ (radius*(2*Math.PI))+"<br>");
}
function calcArea(radius){
    document.write("The area is "+ (Math.PI*Math.pow(radius,2))+"<br>");
}
function celsiusToFahrenheit(celsius){
    var far= (celsius*(9/5)+32);
    document.write(celsius+"ºC is "+far+"ºF <br>");
}
function fharenheitToCelsius(far){
    var cel=(far-32)*(5/9);
    document.write(far+"ºF is "+cel+"ºC");
}
