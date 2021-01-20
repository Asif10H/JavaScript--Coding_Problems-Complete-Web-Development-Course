var numbers = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50];
var uniqueNumber = [];

for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    var index = uniqueNumber.indexOf(element);
    //console.log(index);
    if(index == -1){
        uniqueNumber.push(element);
    }
}
console.log(uniqueNumber);