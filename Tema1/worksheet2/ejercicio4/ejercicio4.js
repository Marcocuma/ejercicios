var celsius = parseFloat(prompt("Escribe los grados centigrados"));
var far= (celsius*(9/5)+32);
document.write(celsius+"ºC is "+far+"ºF <br>");
document.write(far+"ºF is "+((far-32)*(5/9))+"ºC");