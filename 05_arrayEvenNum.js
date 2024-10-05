// 5. Write a Javascript function that takes an array of numbers and returns a new array with only the even numbers
function filterEvenNum(arr) {
    return arr.filter(function (num) {
        return num % 2 == 0;
    })
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];
var evenNum = filterEvenNum(numbers);
console.log("The even numbers are: " +evenNum);
