 function checkLeapYear(year){
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
 }
var year = 2021;
 if(checkLeapYear(year) == true){
    console.log(year, " is a leap year")
 }
 else{
    console.log(year, " is not a leap year")
 }