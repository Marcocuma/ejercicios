document.write(validateCreditCard("1111111111111116"));
function validateCreditCard(string1){
    let sum=0;
    let st="";
    let equal=true;
    if(string1.length!=16/*||!/^([0-9])*$/.test("string1")*/||string1.charAt(string1.length-1)%2!=0)
        return false;
    for (let index2 = 0; index2 < string1.length; index2++) {
        if(!/^[0-9]$/.test(string1.charAt(index2)))
            return false;
    }
    for (let index = 0; index < string1.length; index++) {
        if (string1.charAt(0)!=string1.charAt(index))
            equal=false;
        sum=sum+parseInt(string1.charAt(index));
    }
    if(equal||sum<=16)
        return false;
    return true;
}