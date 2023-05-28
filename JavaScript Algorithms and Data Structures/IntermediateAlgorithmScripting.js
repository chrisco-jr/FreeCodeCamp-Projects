//Sum all numbers in range
function sumAll(arr) {
  arr.sort((a,b) => a-b);
  let sum = 0;
  for(let i = arr[0]; i <= arr[1]; i++)
  {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));

//Return array of elements exclusively found in either but not both input arrays
function diffArray(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr2.length; i++)
  {
    if (arr1.indexOf(arr2[i]) < 0)
    {
      newArr.push(arr2[i]);
    }
  }
  for (let i = 0; i < arr1.length; i++)
  {
    if (arr2.indexOf(arr1[i]) < 0)
    {
      newArr.push(arr1[i]);
    }
  }
   
  return newArr;
}

console.log(diffArray([1, 8, 8, 2, 3, 5], [1, 2, 3, 4, 5]));

//Remove elements in array that match following parameters
function destroyer(arr, ...args) {
  for (let i = 0; i < args.length; i++)
  {
    for(let j = arr.length - 1; j >= 0; j--)
    {
      if(arr[j] === args[i])
      {
        arr.splice(j, j+1);
      }
    }
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//Returns objects in collection matchins source key parameters
function whatIsInAName(collection, source) {
  var keys = Object.keys(source);
  let matching = collection
    .filter(object => keys
    .every(key => object.hasOwnProperty(key) && object[key] === source[key]));
  return matching;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

//COnvert stsr to spinal tap case where all lowercases words are joined by dashes
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  let regEx = /\s+|_+/g;
  let arr = str.split(regEx)
  return arr.join("-").toLowerCase();
}
console.log(spinalCase('This Is Spinal Tap'));

//Convert to Pig Latin (Can use more optimization)
function translatePigLatin(str) 
{
  let regex = /^[aeiou]/i;
  let translated = "";  
  if (regex.test(str))
  {
    translated = str.slice(0) + "way";
  }
  else
  {
    var firstVowel;
    let found = false;
    let i = 0;
    while(!found && i < str.length)
    {
      switch(str.charAt(i))
      {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          firstVowel = i;
          console.log(i);
          found = true;
          break;
      }
      i++;
    }
    
    if(found)
    {
      translated = str.substring(firstVowel) + str.substring(0, firstVowel)  + "ay";
    }
    else
    {
      translated = str.slice(0) + "ay";
    }
  }
    
  return translated;
}

console.log(translatePigLatin("rhythym"));

//Search String for before parameter, reaplce with after preserving case type of before
function myReplace(str, before, after) {
  //console.log(before.substring(0,1) == before.substring(0,1).toLowerCase())
  if (before.substring(0,1) == before.substring(0,1).toUpperCase())
  {
    let a = after.substring(0,1);
    let b = after.substring(0,1).toUpperCase();
    after = after.replace(a, b);
    console.log(after);
  }
  else
  { 
    let a = after.substring(0,1);
    let b = after.substring(0,1).toLowerCase();
    after = after.replace(a, b);
    console.log(after);
    
  }
  let newStr = str.replace(before, after);
  return newStr;
  
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));

//Return DNA base pair set for elemnt pair
function pairElement(str) {
  let setDNA = [];
  for (let i = 0; i < str.length; i++)
  {
    console.log(str[i]);
    switch(str[i])
    {
      case 'A':
        setDNA.push(["A", "T"]);
        break;
      case 'T':
        setDNA.push(["T", "A"]);
        break;
      case 'C':
        setDNA.push(["C", "G"]);
        break;
      case 'G':
        setDNA.push(["G", "C"]);
        break;
    }
  }
  return setDNA;
}

console.log(pairElement("GCG"));

//Finds missing letter in passed letter range and returns it
function fearNotLetter(str) {
  for(let i = 1; i < str.length; i++)
  {
    if (str.charCodeAt(i) - 1 !== str.charCodeAt(i-1))
    {
      return String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));

//Takes two arrays, return one array of uniwue value in order of original arrays
function uniteUnique(...arr) {
  let verify = [];
  for(let i = 0; i < arr.length; i++)
  {
    //console.log(arr[i]);
    for(let j = 0; j < arr[i].length; j++)
    {
      //console.log(arr[i][j]);
      if(verify.indexOf(arr[i][j]) < 0)
      {
        verify.push(arr[i][j]);
      }
    }
  }
  return verify;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//Convert &, <, >, ", and ' to corresponding HTML elements
function convertHTML(str) {
  str = str.replace(/&/, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/\"/g, "&quot;");
  str = str.replace(/\'/, "&apos;");
  return str;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));

//Sum all odd fibonacci numbers up to num parameter
function sumFibs(num) {
  var sum = 0;
  var currentNum = 1;
  var lastNum = 0;
  while (currentNum <= num)
  {
    if(currentNum % 2 == 1)
    {
      sum += currentNum;
    }
    currentNum += lastNum;
    lastNum = currentNum - lastNum;

  }
  console.log(sum);
  return sum;
}

sumFibs(75025);

//Returns sum of all prime numbers up to num parameter
function sumPrimes(num) {
  var sum = 0;
  for(let j = 2; j <= num; j++)
  {
    if (prime(j))
    {
      //console.log("Adding: " + j);
      sum += j;
    }
  }
  return sum;
}

function prime(num)
{
  var isPrime = true;
  for (let i = 2; i < num; i++)
  {
    //console.log(num + " % " + i + ": " + num % i);
    if (num % i == 0)
    {
      //console.log(num + " is not prime");
      isPrime = false;
      break;
    }
    
  }  
  return isPrime;
}

console.log(sumPrimes(977));
//console.log(prime(9))

//Find Smallest Common Multiple (CAN  BE OPTIMIZED)
function smallestCommons(arr) {
  var low = 0;
  var high = 0;
  var smallestCommon = 1;
  let multiArray = [];
  
  if(arr[1] > arr[0])
  {
    low = arr[0];
    high = arr[1];
  }
  else
  {
    low = arr[1];
    high = arr[0];
  }

  for(let i = low; i <= high; i++)
  {
    multiArray.push(i);
  }
  console.log(multiArray);
  
  var found = false;
  var currentMultiple = high;
  var counter = 2;
  var counter2 = 2;
  while(!found)
  {
    
    found = true;
    //console.log("current multiple: " + currentMultiple);
    for(let i = 0; i < multiArray.length - 1; i++)
    {
      if(multiArray[i] != 1 && currentMultiple % multiArray[i] != 0)
      {
        
        counter = low * (counter2++);
        currentMultiple = high * counter;
        found = false;
        break;
      }
    }
  }
  smallestCommon = currentMultiple;
  
  console.log(smallestCommon);
  return smallestCommon;
}

smallestCommons([18,23]);

//Drop Elements at beginning of array that do not meet function
function dropElements(arr, func) {
  while(!func(arr[0]))
  {
    arr.shift();
  }
  return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));

//flatten multidimensional arrays into one depth
function steamrollArray(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++)
  {
    if (isArray(arr[i]))
    {
      flat.push(...steamrollArray(arr[i]));
    }
    else
    {
      flat.push(arr[i]);
    }
  }
  return flat;
}

function isArray(arr)
{
  return Array.isArray(arr);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

//Convert Binary String to English String
function binaryAgent(str) {
  let result = "";
  let binArray = str.split(" ");
  let decArray = [];
  //console.log(binArray);
  for(let i = 0; i < binArray.length; i++)
  {
    var currentValue = binArray[i];
    var decimal = 0;
    for(let j = binArray[i].length - 1;  j >= 0; j--)
    {
      if (binArray[i][j] == 1)
      {
        //console.log(Math.pow(2,7-j));
        decimal += (Math.pow(2,binArray[i].length-1-j));
      }
    }
    result += String.fromCharCode(decimal);
  }
  return result;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));





