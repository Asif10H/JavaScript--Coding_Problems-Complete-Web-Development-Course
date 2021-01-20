var string = "hello javaScript";
var revString = "";

for(var i = 0; i < string.length; i++){
    var char = string[i];
    revString = char + revString;
}
console.log(revString);

/*
// Using the Javascript .Reverse() method

function reverseString(str) {
    return [...str].reverse().join('')
}
console.log(reverseString(string));
*/