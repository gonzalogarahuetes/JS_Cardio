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
// ex maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  const array = [...str].filter((e) => e !== " ").sort();
  let count = 0,
    max = 0,
    char;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i - 1] && i > 0) count++;
    else count = 1;
    if (count > max) {
      max = count;
      char = array[i];
    }
  }
  return char;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print 'Fizz', for multiples of 5 print 'Buzz'. For numbers which are mutiple of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
  let array = [];
  let element;
  for (let i = 0; i < 101; i++) {
    if (i % 3 === 0 && i % 5 !== 0) element = "Fizz";
    if (i % 3 !== 0 && i % 5 === 0) element = "Buzz";
    if (i % 3 === 0 && i % 5 === 0) element = "FizzBuzz";
    if (i % 3 !== 0 && i % 5 !== 0) element = i;
    array.push(element);
  }
  return array;
}

// CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex longestWord("Hello, my name is Brad") === "Hello"
// ex longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(str) {
  let word = [];
  const arraySort = str.split(" ").sort((a, b) => {
    if (a.length > b.length) return -1;
    if (a.length < b.length) return 1;
    return 0;
  });
  for (let i = 0; i < arraySort.length; i++) {
    if (i === 0)
      if (arraySort[i].length !== arraySort[i + 1].length) return arraySort[i];
    if (arraySort[i].length === arraySort[0].length) word.push(arraySort[i]);
  }
  return word;
}

// CHALLENGE 8: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]]

function chunkArray(arr, len) {
  const newArr = [];
  newArr.push(
    arr.slice(0, len),
    arr.slice(len, len * 2),
    arr.slice(len * 2, len * 3)
  );

  if (arr.length > len * 3) newArr.push(arr.slice(len * 3, len * 4));

  return newArr;
}

// CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. flattenArray([[1, 2], [3, 4], [5, 6], [7]]) === [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arr) {
  if (arr[0][0][0]) return arr.flat(2);
  return arr.flat();
}

// CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. isAnagram("elbow" "below") === true
// ex. isAnagram("dormitory", "empty room##") === false

function isAnagram(str1, str2) {
  let lowerStr1 = str1.toLowerCase();
  let filteredStr1 = [...lowerStr1].filter((e) => e !== " ").sort();
  let lowerStr2 = str2.toLowerCase();
  let filteredStr2 = [...lowerStr2].filter((e) => e !== " ").sort();
  let result = filteredStr1.join("") === filteredStr2.join("") ? true : false;

  return result;
}

// CHALLENGE 11: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. letterChanges("hello there") === "Ifmmp UIfsf"

function letterChanges(str) {}
