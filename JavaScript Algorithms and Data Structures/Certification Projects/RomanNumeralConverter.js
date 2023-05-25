//CONVERT INPUT DECIMAL TO ROMAN NUMERALS (Supports up to a few thousands, does not support vinculums)
function convertToRoman(num) 
{
 //initializing indices and variables
 var roman = "";
 var counter = 0; 
 let romanIndex = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
 let arabicIndex = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 
//iterates through length of indices
while(counter < arabicIndex.length)
{
  //working from largest to smallest possible value, converts decimal to corresponding roman numerals based on counter variable
  if (num >= arabicIndex[counter])
  {
    //subtracts value after every equivalent conversion
    while(num >= arabicIndex[counter])
    {
      num -= arabicIndex[counter];
      roman += romanIndex[counter];
    }
  }
  counter++;
}
return roman;
}
console.log(convertToRoman(1496));
