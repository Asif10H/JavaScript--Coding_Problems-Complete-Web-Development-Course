function fibonacciSeries(num){
    if(num == 0){
        return 0;
    }
    if(num == 1){
        return 1;
    }
    else{
        return fibonacciSeries(num - 1) + fibonacciSeries(num - 2);
    }
}

// console.log(fibonacciSeries(10));

var result = [];
var num = 10;
for(var i = 0; i <= num; i++){
    result.push(fibonacciSeries(i));
}
console.log(result);