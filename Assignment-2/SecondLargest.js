function FindSecondLargestFromArray(arr) {
    var secondMax = 0;
    var sizeofArray = 0;
    arr.sort();
    sizeofArray = arr.length;
    secondMax = arr[sizeofArray - 1];
    return secondMax;
}
var array = [23, 89, 6, 29, 56, 45, 77, 654, 32];
var secondMaxNumber = 0;
secondMaxNumber = FindSecondLargestFromArray(array);
console.log("Maximum from array is  " + secondMaxNumber);
