// Simple calculator by using If-else

var num1 = +prompt("enter first value");
var sign = prompt("enter operator");
var num2 = +prompt("enter second value");

// 
if (sign === "+") {
    var result = num1 + num2;
    document.write(num1 + " " + sign + " " + num2 + " = " + result);
}

else if (sign === "-") {
    var result = num1 - num2;
    document.write(num1 + " " + sign + " " + num2 + " = " + result);
}
else if (sign === "*") {
    var result = num1 * num2;
    document.write(num1 + " " + sign + " " + num2 + " = " + result);
}
else if (sign === "/") {
    var result = num1 / num2;
    document.write(num1 + " " + sign + " " + num2 + " = " + result);
}

else if (sign === "%") {
    var result = num1 / num2  * 100;
    document.write(num1 + " " + sign + " " + num2 + " = " + result + "%");
}

