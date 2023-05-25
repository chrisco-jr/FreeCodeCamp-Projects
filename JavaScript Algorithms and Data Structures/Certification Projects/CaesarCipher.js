//PERFORMS A CEASER CI[HER DECRYPTION WITH KEY OF 13 
function rot13(str) {
  //initializations of array, key, and result
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var key = 13;
  var result = "";
  
  //iterates through each character in input string to find the appropriate substitution when applicable
  for (var i = 0; i < str.length; i++)
  {
    //finds matching index of character in string to alphabet
    var index = alphabet.indexOf(str[i]);
    var decode = "";
    //first if substitutes character if character is part of alphabet, otherwise leaves character unaffected
    if (index != -1)
    {
      index -= key;
      if (index < 0)
      {
        index += 26;
      }
      //console.log(index);
      decode = alphabet[index];
    }
    else
    {
      decode = str[i];
    }
    //assings substitution to decode and then assigns it to result, prints inetermediate steps
    result += decode;
    console.log(str[i] + " -> " + decode);
  }
  //prints final result and returns
  console.log(result);
  return result;
}

rot13("SERR PBQR PNZC");
