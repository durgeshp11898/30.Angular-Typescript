

function FindMaximumFromArray(arr: number[]) : number{
    let max:number=0;


    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }

    return max;
}

var array: number[] =[23,89,6,29,56,45,77,654,32];
var maxNumber : number=0;

maxNumber= FindMaximumFromArray(array);

console.log("Maximum from array is  "+maxNumber);