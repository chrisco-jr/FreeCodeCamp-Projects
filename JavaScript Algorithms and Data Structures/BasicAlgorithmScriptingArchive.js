// Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = (9/5) * celsius + 32;
  return fahrenheit;
}

convertCtoF(30);

//Reverse a String
function reverseString(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--)
  {
    newStr += str[i];
  }
  return newStr;
}

reverseString("hello");

//Factorialize a number
function factorialize(num) {
  if (num >=1)
  {
    return num * factorialize(num-1)
  }
  else
  {
    return 1;
  }
}

factorialize(5);

//Find longest word length in string
function findLongestWordLength(str) {
  var longest = 0;
  var counter = 0;
  str += " "; 
  for (var i = 0; i < str.length; i++)
  {
    if(str[i] != " ")
    {
      console.log(str[i]);
      counter++;
    }
    else if (counter > longest)
    {
      longest = counter;
      counter = 0;
      console.log("Longest: " + longest);
    }
    else
    {
      counter = 0;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++)
  {
    var largest = -99999;
    for (var j = 0; j < arr[i].length; j++)
    {
      if (arr[i][j] > largest)
      {
        largest = arr[i][j];
        //console.log("Largest: " + largest);
      }
    }
    newArr.push(largest);
    //console.log(newArr);
  }
  return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//Confirm Ending of String
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) == target;
}

confirmEnding("Bastian", "n");

//Repeat string num amount of times
function repeatStringNumTimes(str, num) {
  var newStr = "";
  for (var i = 0; i < num; i++)
  {
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);

//Truncate String
function truncateString(str, num) {
  if(str.length > num)
  {
    return str.substring(0, num) + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//Look through array, return first element that passes function parameter or undefined otherwise
function findElement(arr, func) {
  let num = 0;
  for (var i = 0; i < arr.length; i++)
  {
    if (func(arr[i]) == true)
    {
      return arr[i];
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//Check if parameter is primitive boolean
function booWho(bool) {
  return typeof(bool) === "boolean";
}

booWho(false);

//Title Case a Sentence
function titleCase(str) {
  var str = " " + str.toLowerCase();
  var newStr = "";
  for(var i = 1; i < str.length; i++)
  {
    if (str[i-1] == " ")
    {
      newStr += str[i].toUpperCase();
    }
    else
    {
      newStr += str[i];
    }
  }
  return newStr;
}

titleCase("I'm a little tea pot");

//Copies each element of first array into second array in order using n as index insertion
function frankenSplice(arr1, arr2, n) {
  var arr3 = [];
  for(var i = 0; i < n; i++)
  {
    arr3.push(arr2[i]);
  }
  arr3.push(...arr1);
  for (var i = n; i < arr2.length; i++)
  {
    arr3.push(arr2[i]);
  }

  return arr3;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

//Remove Falsy values from array
function bouncer(arr) {
  var result = []
  for(var i = 0; i < arr.length; i++)
  {
    if(arr[i])
    {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(bouncer([false, null, 0, NaN, undefined, ""]));

//Sort and find index of number to place into an array
function getIndexToIns(arr, num) {
  var sortedArray = arr.sort((a, b) => a - b);
  console.log(sortedArray);
  for(var i = 0; i < sortedArray.length; i++)
  {
    if (num <= sortedArray[i])
    {
      return i;
    }
  }
  return sortedArray.length;
}

getIndexToIns([1, 2, 20, 10], 2);

//Checks if first element of array contains all letters of the second element
function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++)
  {
    if(target.indexOf(test[i]) == -1)
    {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));

var array = [];

//Splits array into groups of length size
function chunkArrayInGroups(arr, size) {
  var chunky = [];
  let iterations = arr.length / size;
  for (var i = 0; i < iterations; i++)
  {
    chunky.push(arr.splice(0, size));
  }
  if(arr.length > 0)
  {
    chunky.push(arr.splice(0, arr.length));
  }
  return chunky;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));














