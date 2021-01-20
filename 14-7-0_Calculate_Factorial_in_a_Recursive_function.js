function fact(num){
    if(num == 0){
        return 1;
    }
    else{
        return num * fact(num-1);
    }
}
var result = fact(1);
console.log(result);
console.log(fact(2));
console.log(fact(3));
console.log(fact(4));
console.log(fact(5));
console.log(fact(6));