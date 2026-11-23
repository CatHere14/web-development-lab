function sumTo(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumTo(5));
console.log(sumTo(10));

function factorial(n){
    let fctrl = 0, pwr=1;

    for (let i = 1; i<= n; i++){
        pwr= pwr*i;
    }
    return pwr;
}

console.log(factorial(4));

function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
console.log(isPrime(1));
console.log(isPrime(127));

function fizzBuzz(n){
    for (let i = 1; i<= n; i++)
        if (i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz");
        }
        else if (i%5 === 0){
            console.log("Buzz");
        }
        else if(i%3 === 0){
            console.log("Fizz");
        }
        else console.log(i);
}

console.log(fizzBuzz(15))

function countVowels(str){
    let count = 0;
    let vowels = "aeiou";

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello"))
console.log(countVowels("Website"))
console.log(countVowels("Anicat"))

function isPalindrome(str) {
    str = str.toLowerCase();

    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return str === reversed;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));

function maxOf(arr){
    let max = arr[0];
    for (let i=0 ; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxOf([2,4,3,8,6,3]))

function digitSum(n){
    let sum = 0, digit = 0;
    while (n != 0){
        digit = n%10;
        sum += digit;
        n= Math.floor(n/10);
    }
    return sum;
}
console.log(digitSum(12345))