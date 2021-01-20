var strings = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of  letters, as opposed to using 'Content here, content here', making it look like readable English.";

var cnt = 0;
for(var i = 1; i < strings.length; i++){
    if (strings[i] != ' ' && strings[i-1] == ' '){
        cnt++;
    }
}
console.log("Total number of words : " , cnt+1);