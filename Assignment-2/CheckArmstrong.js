function checkArmstrong(No1) {
    var temp = No1;
    var sum = 0;
    var flag = false;
    while (temp > 0) {
        var remainder = temp % 10;
        sum += remainder * remainder * remainder;
        temp = (temp / 10);
    }
    if (sum == No1) {
        flag = true;
        return flag;
    }
    else
        return flag;
}
var inputNumber = 153;
var result;
result = checkArmstrong(inputNumber);
if (result == true) {
    console.log("Given Number is ArmStrong Number");
}
else
    console.log("Given Number is Not Armstrong");
