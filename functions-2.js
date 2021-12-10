/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

function maxOfTwoNumbers(x, y){


  if(x > y){
    return x;
  } else {
    return y;
  };
} 

console.log(maxOfTwoNumbers(3, 9))


/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (h, i, j) => {
  if(h > i && h > j) {
    return h;
  }  else if (i > h && i > j){ 
    return i;
  } else {
     return j;
  } 

};

console.log(maxOfThree(5, 8, 20))


/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

isCharacterAVowel = (letter) => {
  var vowels = ["a", "e", "i", "o", "u"];

  for(let i = 0; i < vowels.length; i++){ 
      if(letter === vowels[i]){
          return true;
       }
  }

  return false;

};
console.log(isCharacterAVowel('y'))


/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = (p, q, r, s) => {
  return(p + q + r + s);
};

multiplyArray = (p, q, r, s) => {
  return(p * q * r * s);
};

console.log(sumArray(1,2,3,4))
console.log(multiplyArray(1,2,3,4)) 

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

argumentNumber = (argument1 , argument2) => {
  for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]);
  }
}

console.log(argumentNumber.length)

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (t) => {
  let splitString = t.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
  };
  
  console.log(reverseString("WAR"))


/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (arr) => {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
          word = arr[i];
      }
  }
  return word;
}

function longestStringReduce(arr) {
  return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}

console.log(longestStringReduce(['butt', 'poop', 'sacroiliac']));

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (arr2) => {
  const words = ['a' , 'purple', 'urkel', 'is', 'a', 'fire', 'idea'];
  const result = words.filter(word => word.length > 1);
  return result
};

console.log(filterLongWords())

