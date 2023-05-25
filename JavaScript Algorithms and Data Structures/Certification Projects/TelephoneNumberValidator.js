//VALIDATES IF INPUT STRING MATCHES VALID TELEPHONE NUMBER FORMATS IN USA
function telephoneCheck(str) {
  //regex combinations
  let tele1 = /^\d{3}-\d{3}-\d{4}$/;
  let tele2 = /^([(]\d{3}[)])\d{3}-\d{4}$/;
  let tele3 = /^\d{3}\s{2}\d{4}$/;
  let tele4 = /^\d{10}$/;
  let tele5 = /^1\s\d{3}(-|\s)\d{3}(-|\s)\d{4}$/;
  let tele6 = /^1([(])\d{3}(-|[)])\d{3}(-|\s)\d{4}$/;
  let tele7 = /^1\s([(]\d{3}[)])\s\d{3}-\d{4}$/;
  // regex combos placed into array
  let teleRegex = [tele1, tele2, tele3, tele4, tele5, tele6, tele7];
  //iterate through combos, if match, return true, else, return false
  for(var i = 0; i < teleRegex.length; i++)
  {
    if (teleRegex[i].test(str))
    {
      return true;
    }
  }
  return false;
  
}

console.log(telephoneCheck("1 (555) 555-5555"));
