

function FindSecondLargestFromArray(arr: number[]) : number{
    let secondMax:number=0;
    let sizeofArray : number=0;
    arr.sort();
    sizeofArray=arr.length;
    secondMax=arr[sizeofArray-1];
    return secondMax;
}

var array: number[] =[23,89,6,29,56,45,77,654,32];
var secondMaxNumber : number=0;

secondMaxNumber= FindSecondLargestFromArray(array);

console.log("Maximum from array is  "+secondMaxNumber);