// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex reverseString('hello') =====> 'olleh'

function reverseString(str) {
  return [...str].reverse().join("");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex isPalindrome("racecar") === "true", isPalindrome("hello") === "false"

function isPalindrome(str) {
  let lowerStr = str.toLowerCase();
  let filteredStr = [...lowerStr].filter((e) => e !== " ");
  let result =
    [...filteredStr].reverse().join("") === [...filteredStr].join("")
      ? true
      : false;
  return result;
}

// CHALLENGE 3: REVERSE AND INTEGER
// Return and integer in reverse
// ex reverseInt(521) ====> 125

function reverseInt(int) {
  let reversedInt = int.toString();
  return eval([...reversedInt].reverse().join(""));
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalize
// ex capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
  let array = [];
  for (let i = 0; i < str.length; ++i) {
    if (str[i - 1] === " " || i === 0) {
      array.push(str[i].toUpperCase());
    } else array.push(str[i]);
  }
  return array.join("");
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is the most common in a string
//ex maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  let obj = {};
  let counts = Object.keys(obj);
  for (let i = 0; i < [...str].length; i++) {
    // const e = [...str].sort();
    let count = counts[i];
    let prop = obj.count;
    if (e[i] === e[i + 1]) {
      count++;
    }
  }
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print 'Fizz', for multiples of 5 print 'Buzz'. For numbers which are mutiple of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {}
