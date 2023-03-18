

function fibonacci(num: number) {
    let previousNum = 0;
    let currentNum = 1;
    let temp;
    console.log(previousNum);
    

    for (let i = 2; i < num; i++) {
      temp = currentNum;
      console.log(currentNum);
      currentNum += previousNum;
      previousNum = temp;
    }

}


var fibSeriesNo: number=21;fibSeriesNo
console.log("Series of Fibonassci Numbers are : ")
fibonacci(fibSeriesNo);