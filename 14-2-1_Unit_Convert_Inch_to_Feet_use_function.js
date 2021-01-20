function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}
console.log(inchToFeet(60));
console.log(inchToFeet(146));
console.log(inchToFeet(40));
console.log(inchToFeet(345));

var inch = [60, 146, 40, 345, 600];
for(var i = 0; i < inch.length; i++){
    console.log(inchToFeet(inch[i]));
}