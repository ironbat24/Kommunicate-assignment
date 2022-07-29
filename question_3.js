function reverse(num){
    let val = 0;
    while(num > 0){
        val = (val*10) + (num%10);
        num = Math.floor(num/10);
    }
    console.log(val);
}
var num = window.prompt("Enter a number: ");
reverse(num);
reverse(149);