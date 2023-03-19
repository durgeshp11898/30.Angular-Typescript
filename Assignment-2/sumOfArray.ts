

function FindSumOfArray(arr: number[]) : number {
    let sumofArray:number=0;


    for(let i=0;i<arr.length;i++){
        sumofArray=sumofArray+arr[i];
    }

    return sumofArray;
}

var array: number[] =[3,9,6,2,5,4,7,4,2];
var sum : number=0;

sum= FindSumOfArray(array);

console.log("Maximum from array is  "+sum);