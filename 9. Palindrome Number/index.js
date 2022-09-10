function isPalindrome(x) {
    return x >= 0 && String(x) === String(x).split("").reverse().join("");
}
;
console.log(isPalindrome(0));
console.log(isPalindrome(12344321));
console.log(isPalindrome(22222));
console.log(isPalindrome(1234));
