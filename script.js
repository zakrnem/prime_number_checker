const output = document.querySelector('.output');
output.innerHTML = '';

let numberToCheck = parseInt(prompt("Enter the number you want to check: "));
let score = 0;

function primePrinter(number, score) {
    let primeNumber
    const para = document.createElement('p');
    for (i = 2; i <= number; i++) {
        if (number%i === 0) {
        score = ++score;
        }
    }
    if (score === 1) {
    console.log(number);
    para.textContent = number + "_";
    }
    output.appendChild(para);
}



for (let j = 2; j <= numberToCheck; j++) {
    console.log(primePrinter(j, score));  
}





/*
number = 6
i = 2
(2%2 === 0) true
console.log(i)
i++


i = 3
(3%2 === 0) false
(3%3 === 0) true
console.log(i)
i++

i = 4
(4%2 === 0) true
(4%3 === 0) false
(4%4 === 0) true

i = 5
(5%2 === 0) false
(5%3 === 0) false
(5%4 === 0) false
(5%5 === 0) true

i = 6
(6%2 === 0) true
(6%3 === 0) false
(6%4 === 0) false
(6%5 === 0) false
(6%6 === 0) true

the first step is writing an algorithm that prints the result of the boolean comparator of remainder calculations up to the number value
then we must create a function to keep a score of the true results
outside this function we will check if the score is equal to 1 to determine if it's a prime number

*/