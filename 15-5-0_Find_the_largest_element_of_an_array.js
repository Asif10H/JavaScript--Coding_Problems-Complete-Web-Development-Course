var numEle = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var maxEle = numEle[0];
for(var i = 0; i < numEle.length; i++){
    if(maxEle < numEle[i]){
        maxEle = numEle[i];
    }
}
console.log("Highest value is: ", maxEle);