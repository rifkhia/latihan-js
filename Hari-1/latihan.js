function add(a, b){
    return a+b
}


/*
FizzBuzz Function
Ketika n dapat dibagi 3 => print "Fizz"
Ketika n dapat dibagi 5 => print "Buzz"
Ketika n dapat dibagi 3 & 5 => print "FizzBuzz"
*/
function fizzBuzz(n){
    for(let i = 0; i<=n; i++){
        if(i%5==0 && i%3==0){
            console.log("FizzBuzz")
        } else if(i%3==0){
            console.log("Fizz")
        } else if(i%5==0){
            console.log("Buzz")
        } else{
            console.log(i)
        }
    }
}

/*
isPalindrome Function
Ketika bentuk balikan kata sama dengan kata nya, maka true

"kasurinirusak"

kata[0] != kata[12]
kata[1] != kata[11]
kata[2] != kata[10]
.
.
.
kata[5]!=kata[7]
*/
function isPalindrome(kata){
    let leftPointer = 0;
    let rightPointer = kata.length - 1;

    while(leftPointer<rightPointer){
        if(kata[leftPointer]!=kata[rightPointer]){
            return false
        }
        leftPointer++
        rightPointer--
    }

    return true

    // for(let i = 0; i<kata.length/2; i++){
    //     if(kata[i]!=kata[kata.length-1-i]){
    //         return false
    //     }
    // }
    // return true
}

console.log(isPalindrome("kasurinirusak"))


/*
function lastSumDigit(a)
a = 981
a = 9 + 8 + 1
a = 18
a = 1 + 8
a = 9
*/
function lastSumDigit(a) {
    
}


