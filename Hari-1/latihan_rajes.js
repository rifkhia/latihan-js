// function fizzBuzz(n){
//     for(let i=0;i<=n; i++){
//         if((i % 5 == 0) & (i % 3 == 0)){
//             console.log(i, "fizzBuzz")
//         }
//         else if (i % 3 == 0){
//             console.log(i, "fizz")
//         }
//         else if (i % 5 == 0){
//             console.log(i, "buzz")
//         }
//         else {
//             console.log(i)
//         }
//     }    
        
// }

// fizzBuzz(100)

function isPalindrome(kata){
    for(let i=0; i<kata.length/2;i++){
        if(kata[i] != kata[kata.length - i-1]){
            return false
        }
    }
    return true
}

function lastSumDigit(num){
    let stringNum = String(num)
    while (stringNum.length>1){
        let result = 0
        for(let i=0;i<stringNum.length;i++){
            result = result + Number(stringNum[i])
        }
        stringNum = String(result)
        num = result
    }
    return num
}

console.log(lastSumDigit(999999999999))