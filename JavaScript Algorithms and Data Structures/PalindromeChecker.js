function palindrome(str) {
  //flag variable and initiliazation
  var isPalindrome = false;
  var updatedWord = "";
  //regex expression removes nonalphanumerics and keeps alphanumerics, reassigns them to new variable pal
  var pal = str.toLowerCase();
  var keepAlphas = /[a-z0-9]/gi;
  pal = pal.match(keepAlphas);
  //for loop uses math results and concatenates to updatedWord to form new workable string
  for(var i = 0; i < pal.length; i++)
  {
    //console.log(pal[i]);
    updatedWord += pal[i];
  }
  //half initializers
  var length = updatedWord.length;
  //console.log(updatedWord);
  var firstHalf = updatedWord.substring(0, length/2);
  var secondHalf = "";
  //reverses secondHalf of String
  for(var i = length - 1; i >= length/2; i--)
  {
    secondHalf += updatedWord.substring(i, i+1);
  }
  //console.log("First Half: " + firstHalf);
  //console.log("Second Half Reversed: " + secondHalf);
  //final comparison operator
  //console.log(firstHalf == secondHalf)
  return (firstHalf == secondHalf);
}

palindrome("0_0 (: /-\ :) 0-0");
