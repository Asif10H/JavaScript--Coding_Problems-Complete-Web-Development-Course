

function getSum(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Total of the numbers : ", getSum(numbers));