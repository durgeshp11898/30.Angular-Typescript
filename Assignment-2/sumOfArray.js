function FindSumOfArray(arr) {
    var sumofArray = 0;
    for (var i = 0; i < arr.length; i++) {
        sumofArray = sumofArray + arr[i];
    }
    return sumofArray;
}
var array = [3, 9, 6, 2, 5, 4, 7, 4, 2];
var sum = 0;
sum = FindSumOfArray(array);
console.log("Maximum from array is  " + sum);
