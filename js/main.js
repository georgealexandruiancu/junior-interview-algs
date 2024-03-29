// 1. Verify a prime number?

function primeNumber(num){
    var divisor = 2;

    while(num > divisor){
        if(num % divisor == 0){

            return false;
        }else{
            divisor++;
        }
    }
    // console.log("yes");
    return true;


}
console.log("Find all prime factors of a number?");
var ans = primeNumber(137);
console.log(ans);
console.log("-------------------------------");


// 2. Find all prime factors of a number?

function findPrimeFactors(num){
    var divisor = 2;
    var factors = [];

    while(num > 2){
        if(num % divisor == 0){
            factors.push(divisor);
            num = num / divisor;
        }else{
            divisor++;
        }
    }
    return factors;
}
console.log("Find all prime factors of a number?");
var ans2 = findPrimeFactors(546);
console.log(ans2);
console.log("-------------------------------");


// 3. Get nth Fibonacci number?
// non-recursive
function fiboNumber(num){
    var fib = [0, 1];
    if(num <= 2) return 1;

    for(let i=2;i<=num;i++){
        fib[i] = fib[i-1]+fib[i-2];
    }
    return fib[num];
}

var ans3 = fiboNumber(10);
console.log("Fibonacci number non-recursive (complexity: o(n))");
console.log(ans3);
console.log("-------------------------------");
// recursive
function fiboNumberRecursive(num){
    if(num<=1){
        return num;
    }else{
        return fiboNumberRecursive(num-1) + fiboNumberRecursive(num-2);
    }
}
var ans4 = fiboNumber(12);
console.log("Fibonacci number recursive (complexity: 2^n))");
console.log(ans4);
console.log("-------------------------------");

// 4. Find the greatest common divisor of two numbers?
function cmmdc(num1, num2){
    var divisor = 2;
    var greatestDivisor = 1;

    if(num1 < 2 || num2 < 2){
        return 1;
    }

    while(num1 >= divisor && num2 >=divisor){
        if(num1 %divisor == 0 && num2%divisor == 0){
            greatestDivisor = divisor;
        }
        divisor++ ;
    }
    return greatestDivisor;

}
var ans5 = cmmdc(12, 144);
console.log("Find the greatest common divisor of two numbers?");
console.log(ans5);
console.log("-------------------------------");

// 5. Remove duplicate members from an array?
function removeDuplicateArr( arr ){
    var checkArr = [];
    var exist = {};
    var element;
    for(let i=0 ; i < arr.length; i++){
        element = arr[i];
        if(!exist[element]){
            checkArr.push(element);
            exist[element] = true;
        }
    }
    return checkArr;
}
var ans6 = removeDuplicateArr([1, 1, 3, 3, 5, 8, 10, 10]);
console.log("Remove duplicate members from an array?");
console.log(ans6);
console.log("-------------------------------");

// 6. Merge two sorted array?

function mergeSortedArrays(arr1, arr2){
    var merged = [];
    var arr1Element = arr1[0];
    var arr2Element = arr2[0];
    var i = 1, j = 1;

    if(arr1.length == 0){
        return 0;
    }
    if(arr2.length == 0){
        return 0;
    }

    while(arr1Element || arr2Element){
        if((arr1Element && !arr2Element) || arr1Element < arr2Element){
            merged.push(arr1Element);
            arr1Element = arr1[i++];
        }else{
            merged.push(arr2Element);
            arr2Element = arr2[j++];
        }
    }
    return merged;

}

var ans7 = mergeSortedArrays([1, 2, 3, 5], [1, 5, 8, 10, 10]);
console.log(" Merge two sorted array?");
console.log(ans7);
console.log("-------------------------------");

//7. Swap two numbers without using a temp variable?

// a = 3
// b = 5
// b = 2;
// a = 5;
// b = 5 - 3 = 2
function swapWithoutTemp(a, b){

    b = b - a;
    a = a + b;
    b = a - b;
    console.log("swap a:" + a + "b: " + b);

}
console.log(" Swap two numbers without using a temp variable?");
swapWithoutTemp(3, 5);
console.log("-------------------------------");

//8. Reverse a string in JavaScript?
function reverseString(str){
    var strReverse = "";
    for (let i = str.length-1 ; i >= 0 ; --i){
        strReverse = strReverse + str[i] ;
    }
    return strReverse;
}
var ans8 = reverseString("reverse");
console.log(" Reverse a string in JavaScript?");
console.log(ans8);
console.log("-------------------------------");

//9. Reverse words in a sentence?

function reverseSentence(sentence) {
    let arr = sentence.split(" ");
    let reverseSentence = "";

    for (let i=arr.length-1; i >= 0; i--) {
       
        reverseSentence += arr[i] + " ";
    }
    return reverseSentence;
}
var ans9 = reverseSentence("Ana are mere");
console.log("9. Reverse words in a sentence?");
console.log(ans9);
console.log("-------------------------------");


//10. Reverse words in place?

function reverseWordsSentence(sentence){
    let arr = sentence.split(" ");
    let reverseSentence = "";

    for(let i=0;i<arr.length;i++){
        let strReverse = "";
        for(let j=arr[i].length-1; j>=0; j--){
            strReverse += arr[i][j];
        }
        reverseSentence += strReverse + " ";
    }
    return reverseSentence;
}
var ans10 = reverseWordsSentence("Ana are mere");
console.log("10. Reverse words in place?");
console.log(ans10);
console.log("-------------------------------");


//11. Find the first non repeating char in a string?
function checkRepetingChar(str){
    let exist = {};
    for (let i=0;i<str.length;i++){
        let element = str[i];
        if(exist[element]){
           exist[element]++;
        }else{
            exist[element] = 1;
        }
    }
  
    // - > sol care merge
    for(let j in exist){
        if(exist[j] == 1){
            return j;
        }
    }

    
}
var ans11 = checkRepetingChar("ana are mere");
console.log("11. Find the first non repeating char in a string?");
console.log(ans11);
console.log("-------------------------------");


//12. Remove duplicate characters from a sting?

function rmDuplicateChar(str) {
    let exist = {};
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        let element = str[i];
        if (exist[element]) {
            exist[element]++;
        } else {
            exist[element] = 1;
        }
    }

    // - > sol care merge
    for (let j in exist) {
        if (exist[j] == 1) {
            newString += j;
        }
    }
    return newString;

}
var ans12 = rmDuplicateChar("Ana are mereeeeeeeee");
console.log("12. Remove duplicate characters from a sting?");
console.log(ans12);
console.log("-------------------------------");

//13. Verify a word as palindrome?



function palindromeWord(str){
    for(let i=0;i<str.length/2;i++){
        if(str[i] != str[str.length-1-i]){
            return false;
        }
    }
    return true;
}
var ans13 = palindromeWord("fffddfff");
console.log("13. Verify a word as palindrome?");
console.log(ans13);
console.log("-------------------------------");

//14. Generate random between 5 to 7 by using defined function.
console.log("14 Generate random between 5 to 7 by using defined function.");
console.log( 5 + Math.random() * 5 / 5 * 2 );
console.log("-------------------------------");


//15. Find missing number from unsorted array of integers.
function findMissingNumber(arr){
    let sum = 0;
    let sumExpected = (arr.length+1)*(arr.length+2)/2;

    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sumExpected - sum;
}
var ans15 = findMissingNumber([1, 2, 4, 5, 6]);
console.log("15. Find missing number from unsorted array of integers.");
console.log(ans15);
console.log("-------------------------------");

//16. Check whether any two numbers in an array sums to a given number?
function findSum(arr, sum){
    for(let i=0 ;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] == sum){
                return true
            }
        }
    }
    return false;
}

var ans16 = findSum([1, 2, 4, 5, 6], 44);
console.log("16. Check whether any two numbers in an array sums to a given number?");
console.log(ans16);
console.log("-------------------------------");

//17. Find the largest sum of any two elements?
function maxSum(arr){
    let minbig = arr[0];
    let maxbig = arr[1];

    if(arr[0] > arr[1]){
        minbig = arr[1];
        maxbig = arr[0];
    }

    for(let i=2;i<arr.length;i++){
        if(arr[i] > maxbig){
            minbig = maxbig;
            maxbig = arr[i];
        }else if(arr[i] > minbig){
            minbig = arr[i];
        }
    }
    return minbig + maxbig;
}
var ans17 = maxSum([1, 44, 4, 5, 6]);
console.log("17. Find the largest sum of any two elements?");
console.log(ans17);
console.log("-------------------------------");

//18. Total number of zeros from 1 upto n?
function numberZero(n){
    let count = 0;
    for(let i=1; i<=n;i++){
        let copyI = i;
        while(copyI > 0){
            if (copyI % 10 == 0) {
                count++;
            }
            copyI = copyI / 10;
        }
       
    }
    return count;
}
var ans18 = numberZero(100);
console.log("18. Total number of zeros from 1 upto n?");
console.log(ans18);
console.log("-------------------------------");

//19. Match substring of a sting?
function matchSubstring(substr, str){
    let j = 0;
    for(let i=0;i<str.length;i++){
        let index = 0;
        if(str[i] == substr[j]){
            j++;
        }else{
            j=0;
        }

        if(j==0){
            index = j;
        }else if(j == substr.length){
            return "contine";
        }
    }
    return "nu contine";
}
var ans19 = matchSubstring("Ana", "Ana are mere");
console.log("19. Match substring of a sting?");
console.log(ans19);
console.log("-------------------------------");


//20. Create all permutation of a string?
function permutationWord(word){
    var arr = word.split(''),
        len = arr.length,
        perms = [],
        rest,
        picked,
        restPerms,
        next;

    if (len == 0)
        return [word];

    for (var i = 0; i < len; i++) {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = permutationWord(rest.join(''));

        for (var j = 0, jLen = restPerms.length; j < jLen; j++) {
            next = picked.concat(restPerms[j]);
            perms.push(next.join(''));
        }
    }
    return perms;
}
var ans20 = permutationWord("asdd");
console.log("20.Create all permutation of a string?");
console.log(ans20);
console.log("-------------------------------");


//21. Convert in ASCII code upperCase char.
console.log("21. Convert in ASCII code upperCase char.");
var cuvant = "D";
var cuvantnou = cuvant.charCodeAt() + 32;
console.log(String.fromCharCode(cuvantnou));
console.log("-------------------------------");


//22. Display prime numbers up to n.
function displayNprimeNumbers(n){

    for(let i=1;i<=n;i++){

        let count = 0;
        for(let j=1;j<=i;j++){
            if(i % j == 0){
                count++;
            }
        }
        if(count == 2){
            console.log(i);
        }
    }
   
}
console.log("22.Display prime numbers up to n.");
displayNprimeNumbers(10);
console.log("-------------------------------");

//23. Display number which is repeated for event times in an array
function repeatInArr(arr){
    let exist = {};
    for(let i=0;i<arr.length;i++){
        let element = arr[i];
        if(exist[element]){
            exist[element]++;
        }else{
            exist[element] = 1;
        }
    }
    return exist
}
var ans23 = repeatInArr([1, 1, 3, 3, 4, 4, 4]);
console.log("23. Display number which is repeated for event times in an array");
console.log(ans23);
console.log("-------------------------------");

//24. count words in a Sentence.
function countWords(sentence){
    let arr = sentence.split(" ");
    console.log(arr.length);
}
console.log("24. count words in a Sentence.");
countWords("Ana are mere");
console.log("-------------------------------");

//25. In an integer array, there is 1 to 100 number, out of one is duplicate, how to find ?
function findDuplicateNumber(arr){
    let exist = {}
    for(let i=0;i<arr.length;i++){
        let element = arr[i];
        if(exist[element]){
            exist[element]++;
        }else{
            exist[element] = 1;
        }
    }
    for(let i in exist){
        if(exist[i] > 1){
            console.log(i);
        }
    }
}
console.log("25. In an integer array, there is 1 to 100 number, out of one is duplicate, how to find ?");
findDuplicateNumber([1, 2, 2, 3, 4, 4, 5]);
console.log("-------------------------------");

//26. implement substring of a string. also make it case sensitive
function implementSubstring(str, start, finish){
    if(start < 0){
        start = 0;
    }
    if(finish > str.length){
        finish = str.length;
    }
    let newStr = '';
    for(let i=start;i<finish;i++){
        newStr += str[i];
    }
    console.log(newStr);
}
console.log("26. implement substring of a string. also make it case sensitive");
implementSubstring("Ana are mere", 2, 6);
console.log("-------------------------------");


//27. Find a square of a number. but you can only use addition or subtraction but no multiplication or division
function squareBySum(num){
    // formula = ( n^2 = 2*(sum(1->n))-n );
    let sum = 0;
    for(let i=1;i<=num;i++){
        sum += i;
    }
    let square = 2 * sum - num;
    console.log("square: " + square);
}
console.log("27. Find a square of a number. but you can only use addition or subtraction but no multiplication or division");
squareBySum(6);
console.log("-------------------------------");

//28. From two sorted array how would you find common number?
function checkMatchNumbers(arr1, arr2){
    matchNumbers = [];
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] == arr2[i]){
            matchNumbers.push(arr1[i]);
        }
    }
    console.log(matchNumbers);
}

console.log("28. From two sorted array how would you find common number?");
checkMatchNumbers([1, 2, 3, 5, 9, 10], [1, 4, 8, 5]);
console.log("-------------------------------");

//29.1 Two ways to sort an integer array
function sortArray1(arr){
    
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[i] < arr[j]){
                arr[j] = arr[j] - arr[i];
                arr[i] = arr[i] + arr[j];
                arr[j] = arr[i] - arr[j];
            }
        }
    }
    console.log(arr);
}
console.log("29.Two ways to sort an integer array");
sortArray1([3, 4, 6, 2, 2, 1, 9, 3]);
//29.2 using function sort();
console.log("using function sort: ");
console.log([3, 4, 6, 2, 2, 1, 9, 3].sort());
console.log("-------------------------------");

//30. Remove from array all odd numbers
function removeOddsNumbers(arr){
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 != 0){
            arr.splice(i, 1);
            i--;
        }
        
    }
    console.log(arr);
}
console.log("30.Remove from array all odd numbers");
removeOddsNumbers([1,1,1,101,1, 2, 2, 4, 5, 5]);
console.log("-------------------------------");

//31. Anagrams
function anagram(word1, word2){
    if(word1 === word2){
        return true;
    }
    function sortString(str){
        return str.toLowerCase().split('').sort().join('');
    }
   
    return sortString(word1) === sortString(word2);
}
console.log("31.Anagrams");
console.log(anagram('asd', 'asd'));
console.log("-------------------------------");

//32. FizzBuzz
function fizzbuzz(n){
    for(let i=1; i <= n ;i++){
        if(i%3 === 0 && i % 5 === 0){
            console.log("fizz-buzz ");
        }else if( i%3 === 0){
            console.log("fizz ");
        }else if ( i%5 === 0){
            console.log("buzz ");
        }else{
            console.log(i + " ");
        }
    }
}
console.log("32. Fizzbuzz");
fizzbuzz(101);
console.log("--------------------------------");

window.onload = () => {

    document.getElementById("buttonEx1").addEventListener("click", function (elem) {
        
        if(elem.toElement.style.width == "500px"){
            elem.toElement.style.width = "initial";
        }else{
            elem.toElement.style.width = "500px";
        }
       
    });

    document.getElementById('ex2').addEventListener("click", function(elem) {
        elem.toElement.style.backgroundColor = 'pink';
    })

    document.querySelector('[thisAttr="demo"]').style.width = "100px";
    document.querySelector('[thisAttr="demo"]').style.height = "100px";
    
}


