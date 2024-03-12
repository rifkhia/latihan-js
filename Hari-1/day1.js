//----------------------------LATIHAN 1----------------------------------------------
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i, "FizzBuzz");
        } else if (i % 3 === 0) {
            console.log(i, "Fizz");
        } else if (i % 5 === 0) {
            console.log(i, "Buzz");
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(100);

//----------------------------LATIHAN 2----------------------------------------------
function isPalindrome(kata){
    dibalik = kata.split('').reverse().join('');
    if (kata === dibalik){
        console.log("Palindrome Bang")
    } else {
        console.log("egk bg,", kata, "kalo dibalik jadi", dibalik)
    }
}

isPalindrome('1nunun1')

//----------------------------LATIHAN 3----------------------------------------------
function lastSumDigit(a) {
    let sum = a;
    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }
    return sum;
}

console.log(lastSumDigit(5781));