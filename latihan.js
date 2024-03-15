//----------------------------------------------------LATIHAN 1-----------------------------------------------------
function toRomanNumber(n){
    //BINGUNG GUA BREKSSSS
}











//-----------------------------------------------------LATIHAN 2-----------------------------------------------------
function isPrime(n){
    for (let i=Math.floor(n/2); i>1; i--){
        if (n%i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(1669))