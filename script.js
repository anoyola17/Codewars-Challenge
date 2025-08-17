// #1 Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because (1^2 + 2^2 + 2^2 = 9)
function squareSum(numbers){
  let results = 0;                           // Setup the result variable
  for (let i = 0; i < numbers.length; i++){  // Loop through each number in the array
    results += numbers[i] ** 2;              // Raise the number to the power of 2 and add it to the result
    }
  return results;                            // Return the final result
}


// #2 Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
function solution(str){
  return str.split('').reverse().join('');  // Used split() methods to turn the word into letters
                                            // Used reverse() methods to reverse the order of the letters
                                            // Used join() methods to combine the letters back into a string
}


// #3 Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
function sumMix(x){
  let results = 0;                        // Setup the result variable         
  for (let i = 0; i < x.length; i++) {    // Loop through each element (inside the x array) in the array
    results += parseInt(x[i]);            // Convert each element (inside the x array) to a number and add it to the result
  }
  return results;                         // Return the final result
}


// #4 Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  if (number % 2 === 0) {     // Check if the number is even (if statement)
    return "Even";            // If its even then return "Even"
  } else {
    return "Odd";             // If not then return "Odd"
  }
}


// #5 Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash (words) {
  return words.join(" ");     // Join the words with a space and return the result
};


// #6 Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function XO(str) {
    str = str.toLowerCase();                   // Convert the string into lowercase letters
    let xCount = 0;                            // Setup the 'x' variable 
    let oCount = 0;                            // Setup the 'o' variable  
    
    for (let i = 0; i < str.length; i++) {     // Loop through each character in the string
        if (str[i] === 'x') {                  // If the character is 'x' then increment
        xCount++;                              
        } else if (str[i] === 'o') {           // If the character is 'o' then increment
        oCount++;                             
        }
    }
    
    return xCount === oCount;                  // Return true if counts are equal, if not then its false 
}


// #7 Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  let vowels = 0;                             // Setup the vowels variable
  for (let i = 0; i < str.length; i++) {      // Loop through each character in the string
    if ('aeiou'.includes(str[i])) {           // Check if the character is a vowel 
      vowels++;                               // The vowel count then is incremented
    }
  }
  return vowels;                              // Return the final vowel count
}


// #8 In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.
function squareDigits(num){
  let strNum = String(num);                                 // Convert the number to a string
  let results = '';                                         // Setup the results variable
  for (let i = 0; i < strNum.length; i++) {                 // Loop through each character in the string
    let digit = parseInt(strNum[i]) * parseInt(strNum[i]);  // Multiply the number by itself (same number)
    results += String(digit);                               // Concatenate the squared digit to the results
  }
  return parseInt(results);                                 // Convert the final result back to a number
}
