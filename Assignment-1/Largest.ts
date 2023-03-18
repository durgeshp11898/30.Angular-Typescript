
function largestnumber(no1 :number,no2: number,no3:number){

    if (no1 >= no2 && no1 >= no3)
    // Returning 1st number if largest
    return no1;
// Comparing 2nd no with 1st and 3rd no
else if (no2 >= no1 && no2 >= no3)
    // Return no3 if the above conditions are false
    return no2;
else
    // Returning 3rd no, Its sure it is greatest
    return no3;
}

var number1 : number=20;
var number2 : number=43;
var number3 : number=2;

var largest : number=0;

largest= largestnumber(number1,number2,number3);

console.log("The Largest Number from above These is  "+largest);

