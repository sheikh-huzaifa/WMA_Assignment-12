//                                                                String

// let string1 = "Hello";
// let string2 = "World";

// // Write a js program to find the length of a string

// let len = string1.length
// console.log(len);



// // Write a js program to concatenate two strings

// let conCat = string1.concat(" " ,string2);
// console.log(conCat);


// // Write a js program to convert a string to uppercase

// console.log(string1.toUpperCase());


// // Write a js program to convert a string to lowercase

// console.log(string1.toLowerCase());

// // Write a js program to check if a string contains a specific substring
// let strg = "hello world";
// let substring = "world";

// if (strg.includes(substring)) {
//     console.log("Substring found!");
// } else {
//     console.log("Substring not found.");
// }

// // Write a js program to find the index of a specific character in a string.

// console.log(strg.indexOf("o"));

// // Write a js program to replace a specific substring in a string.


// let string = "The quick brown fox jumps over the lazy dog.";
// let oldSubstg = "fox";
// let newSubstg = "cat";

// let newString = string.replace(oldSubstg, newSubstg);

// // Write a js program to remove leading and trailing whitespace from a string.

// let forTrim= "    Hello World     "
// let aftTrim= forTrim.trim()
// console.log(aftTrim);

// // Write a js program to split a string into an array of substrings.
// let stringArray = strg.split("")
// console.log(stringArray);

// // Write a js program to reverse a string.
// let stringReverse = stringArray.reverse().join("")
// console.log(stringReverse);



// //                                                                     Numbers functions

// // Write a js program to find the sum of two numbers.

// let num1 = 10;
// let num2 = 20;
// let sum = num1 + num2;
// console.log(sum);

// // Write a js program to find the difference between two numbers.

// let difference = num1 - num2;
// console.log(difference);

// // Write a js program to find the product of two numbers.
// let product = num1 * num2;
// console.log(product);

// // Write a js program to find the quotient of two numbers.
// let quotient = num1 / num2;
// console.log(quotient);

// // Write a js program to find the quotient and remainder of two numbers
// let quotientRemainder = num1 % num2;
// console.log(quotientRemainder);

// // Write a js program to round a number to the nearest integer
// let roundedNum = Math.round(num1);
// console.log(roundedNum);

// // Write a js program to generate a random number between 0 and 1
// let randomNum = Math.random();
// console.log(randomNum);

// // Write a js program to fint maximum and minimum of two numbers
// let maxNum = Math.max(num1, num2);
// let minNum = Math.min(num1, num2);
// console.log(maxNum);
// console.log(minNum);

// // Write a js program to calculate the square root of a number  
// let squareRoot = Math.sqrt(num1);
// console.log(squareRoot);

// // Write a js program to calculate the absolute value of a number
// let absNum = Math.abs(num1);
// console.log(absNum);

// // Write a js program to calculate the power of a number
// let powerNum = Math.pow(num1, num2);
// console.log(powerNum);

// //                                                                                Date Methods

// // Write a js program to get the current date and time
// let date = new Date();
// console.log(date);

// // Write a js program to get the current year
// let year = date.getFullYear();
// console.log(year);

// // Write a js program to get the current month
// let month = date.getMonth();
// console.log(month);

// // Write a js program to get the current day of a week
// let day = date.getDay();
// console.log(day);

// // Write a js program to add a specific number of days to date
// let addDays = date.setDate(date.getDate() + num1);
// console.log(addDays);

// // Write a js program to subtract a specific number of days from date
// let subDays = date.setDate(date.getDate() - num1);
// console.log(subDays);

// // Write a js program to get the time in milliseconds
// let milliseconds = date.getTime();
// console.log(milliseconds);

// // Write a js program to get hours, minutes and seconds from a date object
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// console.log(hours);
// console.log(minutes);
// console.log(seconds);

// // write a js program to create a date object with a specific year,month and day
// let newDate = new Date(year, month, day);
// console.log(newDate);

// // Write a js program to compare two dates
// let date1 = new Date(year, month, day);
// let date2 = new Date(year, month, day);
// console.log(date1 == date2);

// //                                                                      Math Methods
// // Write a js program to find the absolute value of a number.
// let absNum = Math.abs(num1);
// console.log(absNum);

// // Write a js program to find the high value in a list of a number
// let highNum = Math.max(num1, num2);
// console.log(highNum);

// // Write a js program to find the low value in a list of a number
// let lowNum = Math.min(num1, num2);
// console.log(lowNum);

// // Write a js program to round a number up to the nearest integer
// let roundedNum = Math.ceil(num1);
// console.log(roundedNum);

// // Write a js program to round a number down to the nearest integer
// let roundedNum = Math.floor(num1);
// console.log(roundedNum);

// // Write a js program to calculate the exponential value of a number
// let expNum = Math.pow(num1, num2);
// console.log(expNum);

// // Write a js program to calculate the natural logarithm of a number
// let logNum = Math.log(num1);
// console.log(logNum);

// // Write a js program to calculate the sine of an angle in radians
// let sinNum = Math.sin(num1);
// console.log(sinNum);

// // Write a js program to calculate the cosine of an angle in radians
// let cosNum = Math.cos(num1);
// console.log(cosNum);

// // Write a js program to calculate the square root of a number
// let sqrtNum = Math.sqrt(num1);
// console.log(sqrtNum);

//                                                                              For Loop

// // Write a program that uses a for loop to print the numbers from 1 to 10.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
    
// }


// // Write a program that uses a for loop to print the elements of an array.

// let lenArray=["H","e","l","l","o"]

// for (x of lenArray) {
//     console.log(x);
// }

// // Write a program that uses a for loop to calculate the factorial of a number.

// let number=5;
// let factorial=1;

// for(let i = 1; i<=number ; i++){
//     factorial*=i
// }

// console.log(factorial);


// // Write a program that uses a for loop to generate a multiplication table for a given number.

// for(let i=1; i<=10 ; i++){
//     mul=i*number;
//     console.log(`${number}*${i}=${mul}`);
// }

// // Write a program that uses a for loop to find the sum of all even numbers from 1 to 100

// for(let i=1; i<=100; i++){
//     if ( i % 2==0 ) {
//         console.log(`${i} is even number between 0 to 100`);
//     }
// }

//                                                                              While loops

// // Write a program that asks the user to enter a number and then prints out all the odd numbers up to that number
// let i=0;
// let oddNum=Number(prompt("Enter A Number:"));
// while (i <= oddNum) {
//     i++;
//     if (i % 2!== 0) {
//         console.log(`${i} is odd number up to ${oddNum}`);
//     }
    
// }


// // Write a program that asks the user to enter a number and then prints out the multiplication table for that number, up to 10.
// let mulNum=Number(prompt("Enter A Number:"));
// i = 0;
// while (i <= 10) {
//     let mulNum1=mulNum * i;
//     console.log(`${mulNum} * ${i} = ${mulNum1}`);
//     i++;
// }



// // Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number.

// let randomNumber = Math.floor(Math.random()*100);
// console.log(randomNumber);
// let askRandom = Number(prompt("Guess A Number Between 1 to 100"))

// while (randomNumber!==askRandom) {
//     askRandom = Number(prompt("Plzz Again Guess A Number Between 1 to 100"))
// }
// console.log("Congret You Guess The right random number");


// // Write a program that asks the user to enter a word and then prints out the word in reverse order using while loop.

// let word = prompt("Enter a word: ");  

// i = word.length - 1;  

// let reversedWord = "";  

// while (i >= 0) {  
//     reversedWord += word[i];  
//     i--;  
// }

// console.log(reversedWord);  

// // Write a program that asks the user to enter a series of numbers and then finds the sum and average of those numbers using while loop.
// i = Number(prompt("Enter how many numbers you want to add and get average"));
// let numAdd;
// let j=1;
// let sumNum=0;
// while (j<=i) {
//     numAdd=Number(prompt(`Enter ${j} Number:`));
//     sumNum += numAdd;
//     j++;
// }
// let avgNum = sumNum / i;

// console.log(`The sum is ${sumNum}`);

// console.log(`The average is ${avgNum}`);

//                                                                      Do-while Loops

// Write a program that asks the user to enter a password. Keep asking the user to enter a password until they enter the correct password.

let password = prompt("Enter a password: ");
do {
    password = prompt("Plz Again Enter a password: ");
} while (password!=="password");
 
// Write a program that asks the user to enter a number and then prints out all the numbers from that number down to 1.

let i=0;
let numDown=Number(prompt("Enter A Number:"));
do {
    i++;
    console.log(numDown);
} while (i<=numDown);

// Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number .

let randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber);
let askRandom = Number(prompt("Guess A Number Between 1 to 100"))

do {
    askRandom = Number(prompt("Plz Again Guess A Number Between 1 to 100"))
} while (randomNumber!==askRandom) 


// Write a program that asks the user to enter a series of numbers and then finds the largest number. The program should keep asking the user for numbers until they enter a negative number.

let largest = Number.NEGATIVE_INFINITY;  

do {
  let input = prompt("Enter a number:");  
  let number = parseFloat(input);  

  if (number > largest) {  
    largest = number;  
  }
} while (number >= 0);  

console.log("The largest number is " + largest);  

// Write a program that asks the user to enter a series of words and then prints out the words in reverse order. The program should keep asking the user for words until they enter the word "stop" .
let words = [];  

do {
  let input = prompt("Enter a word:");  
  words.push(input);  
} while (input !== "stop");  

words.pop();  

console.log("The words in reverse order are:");  

for (let i = words.length - 1; i >= 0; i--) {  
  console.log(words[i]);  
}

//                                                                                Switch Case:

// Write a js program to print day of week name using switch case.
let dayOfWeek = Number(prompt("Enter the day of week"));  

switch (dayOfWeek) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day of week");  
    break;
}


// Write a js program print total number of days in a month using switch case

let month = prompt("Enter the month name:");  

switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log("31 days");
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log("30 days");
    break;
  case "February":
    console.log("28 or 29 days");
    break;
  default:
    console.log("Invalid month name"); }

// Write a js program to check whether an alphabet is vowel or consonant using switch case.
let alphabet = prompt("Enter a Alphabet to check:");  

switch (alphabet.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(alphabet + " is a vowel");
    break;
  default:
    console.log(alphabet + " is a consonant");
    break;
}
 

// Write a js program to find maximum between two numbers using switch case
let num1 = 10;  
let num2 = 20;  
let max;

switch (max) {
    case num1>num2:
        max=num1;
        break;

    default:
        max=num2;
        break;
}
console.log("The maximum of " + num1 + " and " + num2 + " is " + max);


// Write a js program to check whether a number is even or odd using switch case

switch (num1) {
    case num1%2==0:
        console.log(num1 + " is even");
        break;

    default:
        console.log(num1 + " is odd");
        break;
}


// Write a js program to check whether a number is positive, negative or zero using switch case.
let num = -10;  

switch (Math.sign(num)) {
  case 1:
    console.log(num + " is positive");
    break;
  case -1:
    console.log(num + " is negative");
    break;
  case 0:
    console.log(num + " is zero");
    break;
  default:
    console.log(num + " is not a number");
    break;
}