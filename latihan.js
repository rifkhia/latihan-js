//----------------------------------------------------LATIHAN 1-----------------------------------------------------
function toRomanNumber(n){
    if (n < 1 || n > 3999) return "egk bisa bg";
    let roman = "";
    while (n>0){
        if (n >=1000){
            roman += "M"
            n -=1000;
        } else if (n>=900){
            roman +="CM"
            n -=900;
        } else if (n>=500){
            roman +="D"
            n -=500;
        } else if (n>=400){
            roman +="CD"
            n -=400;
        } else if (n>=100){
            roman +="C"
            n -=100;
        } else if (n>=90){
            roman +="XC"
            n -=90;
        } else if (n>=50){
            roman +="L"
            n -=50;
        } else if (n>=40){
            roman +="XL"
            n -=40;
        } else if (n>=10){
            roman +="X"
            n -=10;
        } else if (n>=9){
            roman +="IX"
            n -=9;
        } else if (n>=5){
            roman +="V"
            n -=5;
        } else if (n>=4){
            roman +="IV"
            n -=4;
        } else if (n>=1){
            roman +="I"
            n -=1;
        }
    }
    return roman

}

console.log(toRomanNumber(2999))
//-----------------------------------------------------LATIHAN 2-----------------------------------------------------
function isPrime(n){
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

console.log(isPrime(1000000000000037))