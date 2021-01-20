var num1 = 24;
var num2 = 89;
var num3 = 29;
if(num1 > num2 && num1 > num3){
    console.log(num1 , "is bigger then" , num2, "and", num3);
}
else if(num2 > num1 && num2 > num3){
    console.log(num2 , "is bigger then" , num1, "and", num3);
}
else{
    console.log(num3 , "is bigger then" , num1, "and", num2);
}