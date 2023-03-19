function FindMaximumFromArray(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var array = [23, 89, 6, 29, 56, 45, 77, 654, 32];
var maxNumber = 0;
maxNumber = FindMaximumFromArray(array);
console.log("Maximum from array is  " + maxNumber);
