function fibonacci(num) {
    var previousNum = 0;
    var currentNum = 1;
    var temp;
    console.log(previousNum);
    for (var i = 2; i < num; i++) {
        temp = currentNum;
        console.log(currentNum);
        currentNum += previousNum;
        previousNum = temp;
    }
}
var fibSeriesNo = 21;
fibSeriesNo;
console.log("Series of Fibonassci Numbers are : ");
fibonacci(fibSeriesNo);
