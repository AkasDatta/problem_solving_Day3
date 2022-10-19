
let numbers = [101, 102, 55, 12, 1101];

let first = 0; // 0 = 101
let last = numbers.length - 1; // 5 -1 = 4

while(first < last){
    let temp = numbers[first];
    numbers[first] = numbers[last];
    numbers[last] = temp;

    first++;
    last--;
}
console.log(numbers);

