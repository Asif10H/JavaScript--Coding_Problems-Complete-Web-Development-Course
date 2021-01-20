function fibonacciSeries(num){
    if(num == 0){
        return 0;
    }
    if(num == 1){
        return [0, 1];
    }
    else{
        var fibo = fibonacciSeries(num-1);
        //console.log(fibo);
        var nextElement = fibo[num-1] + fibo[num-2];
        //console.log(nextElement);
        fibo.push(nextElement);
        return fibo;
    }
}

var result = fibonacciSeries(20);
console.log(result);