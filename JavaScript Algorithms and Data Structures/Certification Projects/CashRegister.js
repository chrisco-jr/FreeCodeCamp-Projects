//Take price, cash, cid parameters return object with status if enough funds to fulfill transaction along with breakdown of change amounts if necessary
//Many commentes console.log() lines commented out but kept for testing
//Reference Arrays for use in calculations and object creation
let referenceCoinNames = 
[
  "PENNY",
  "NICKEL",
  "DIME",
  "QUARTER",
  "ONE",
  "FIVE",
  "TEN",
  "TWENTY",
  "ONE HUNDRED"
]

let referenceValues = [0.01, 0.05, 0.1, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00]
//Main Function
function checkCashRegister(price, cash, cid) {
  //initialization variables
  let statusKey = "";
  let changeKey = [];
  let changeNeeded = cash - price;
  var cashValue = 0;
  var cashCount = [];
  
//Finds the total individual amounts of Cash in Bill/Coins as well as cumulative sum of these values
  for (let i = 0; i < cid.length; i++)
  {
    //console.log(cid[i][1])
    cashValue += cid[i][1];
    cashCount.push(Math.round(cid[i][1] / referenceValues[i]))
  }
  cashValue = round(cashValue, 2);
  //console.log(cashCount);
  //console.log(cashValue);
  
  //see findWantedChange function below
  var changeWant = findWantedChange(changeNeeded);
  //console.log('Change Wanted: ' + changeWant);

  //console.log(changeWant);
  //see verifyExactChange function below
  var hasExactChange = verifyExactChange(cashCount, changeWant);
  
  //console.log(changeWant);
  //console.log(cashCount);
  

  if (changeNeeded < 0)
  {
    console.log("Invalid Transaction");
    
  }

  /*Three main outcomes: 
    OPEN if there is enough change and right types of change available to complete transaction
    CLOSED if the amount of cash in drawer is exactly equal to change due
    INSUFFICIENT FUNDS if not right types of change available or not enough Cchange in the first place to complete transaction
    All options set status key, may or may not sent changeKey accordingly
  */

  if(cashValue > changeNeeded && hasExactChange)
  {
    //console.log("Open");
    statusKey = "OPEN";
    let finalChange = convertChangeWanted(changeWant);
    console.log("Change Returned: " + finalChange);
    changeKey = finalChange;
  }
  else if (cashValue == changeNeeded)
  {
    //console.log("Closed");
    statusKey = "CLOSED";
    changeKey = cid;
  }
  else
  {
    //console.log("Insufficient Funds");
    statusKey = "INSUFFICIENT_FUNDS";
    
  }
  //creates cashRegister object with status and change keys using values calculated above
  var cashRegister = 
  {
    status: statusKey,
    change: changeKey
  };
  return cashRegister;
  
}


//Longest time spent on this helper function, iterates through drawer and compares against the change due to see if there is enough change and the right type of change required to complete transaction
function verifyExactChange(cashCount, changeWant)
{
  for (let i = changeWant.length - 1; i > 0; i--)
  {
    var lowerChangeAvailable = 0;
    //Iterative check to confirm that the change remaining is enough to convert to any larger bill reuiqred
    for(let k = 0; k < i; k++)
    {
      lowerChangeAvailable += (cashCount[k] * referenceValues[k]);
    }
    //console.log("LowerChangeAvailable: " + lowerChangeAvailable);
    //console.log("changeWant: " + changeWant[i] * referenceValues[i]);
    if(lowerChangeAvailable >= changeWant[i] * referenceValues[i])
    {
      //Converts larger bills required into smaller combinations of equivalent bills/coins
      if(cashCount[i] < changeWant[i])
      {
        let j = i-1;

          if (changeWant[j] < cashCount[j])
          {
            changeWant[i]--;
          //console.log("referenceValue " + referenceValues[i] + " / " + referenceValues[j] + ": " + (referenceValues[i] * 1.0 / referenceValues[j]));
            changeWant[j] += (referenceValues[i] * 1.0 / referenceValues[j])
          }
      }
    }
    //if at any point does a bill need to be converted and there are no equivalent bill/coin combinations to return equivalent change, returns false
    else
    {
      return false;
    }
  }
  //if no problems detected, return true
  return true;
}

//helper round function to round numbers to more levels of precision than Math.round
function round(num, prec) {
    var multi = Math.pow(10, prec || 0);
    return Math.round(num * multi) / multi;
}

//helper function to convert the combination of bills and coins due into one array for use in changKey
function convertChangeWanted(changeWanted)
{
  let finalChange = [];
  for(let i = 0; i < changeWanted.length; i++)
  {
    if(changeWanted[i] > 0)
    {
      finalChange.unshift([referenceCoinNames[i], changeWanted[i] * referenceValues[i]]);
    }
  }
  return finalChange;
}

//console.log("change needed: " + findWantedChange(105.90));
//helper function to convert the change due into a combination of bills and coinss, using the highest amount of bills/coins possible first without going over
function findWantedChange(change)
{
  let changeNeeded = [];
  for(let i = referenceValues.length -1; i > 0; i--)
  {
    //console.log(change);
    if(change >= referenceValues[i])
    {
      //console.log(Math.floor(change / referenceValues[i]));
      changeNeeded.unshift(Math.floor(change / referenceValues[i]));
      change = change - referenceValues[i] * changeNeeded[0];
    }
    else
    {
      changeNeeded.unshift(0);
    }
    

  }
  //console.log(change)
  changeNeeded.unshift(Math.round(change / referenceValues[0]));
  
  return changeNeeded;
}


console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
