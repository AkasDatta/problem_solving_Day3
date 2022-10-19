let numbers = [101, 102, 55, 12, 1101];
//start new array
/*
It has 3 steps
1. Take a empty array
2. Start looping 
3. All elements can be kept here
*/
let reverse = [];

for(let i = numbers.length -1; i >= 0; i--){
    reverse.push(numbers[i]);
}
console.log(reverse);

//Time Complexity: 0(n)
//Space Complexity: 0(n)
