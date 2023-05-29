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

function checkCashRegister(price, cash, cid) {
  let statusKey = "";
  let changeKey = [];
  let changeNeeded = cash - price;
  var cashValue = 0;
  var cashCount = [];
  

  for (let i = 0; i < cid.length; i++)
  {
    //console.log(cid[i][1])
    cashValue += cid[i][1];
    cashCount.push(Math.round(cid[i][1] / referenceValues[i]))
  }
  cashValue = round(cashValue, 2);
  console.log(cashCount);
  console.log(cashValue);
  
  var changeWant = findWantedChange(changeNeeded);
  console.log('Change Wanted: ' + changeWant);

  var hasExactChange = verifyExactChange(cashCount, changeWant);
  console.log(cashCount);
  console.log(changeWant);
  

  if (changeNeeded < 0)
  {
    console.log("Invalid Transaction");
    
  }

  if(cashValue > changeNeeded && hasExactChange)
  {
    console.log("Open");
    statusKey = "OPEN";
    let finalChange = convertChangeWanted(changeWant);
    console.log("Change Returned: " + finalChange);
    changeKey = finalChange;
  }
  else if (cashValue == changeNeeded)
  {
    console.log("Closed");
    statusKey = "CLOSED";
    changeKey = cid;
  }
  else
  {
    console.log("Insufficient Funds");
    statusKey = "INSUFFICIENT_FUNDS";
    
  }

  

  var cashRegister = 
  {
    status: statusKey,
    change: changeKey
  };
  return cashRegister;
  
}

function verifyExactChange(cashCount, changeWant)
{
  return true;
}

function round(num, prec) {
    var multi = Math.pow(10, prec || 0);
    return Math.round(num * multi) / multi;
}

function convertChangeWanted(changeWanted)
{
  let finalChange = [];
  for(let i = 0; i < changeWanted.length; i++)
  {
    if(changeWanted[i] > 0)
    {
      finalChange.push([referenceCoinNames[i], changeWanted[i] * referenceValues[i]]);
    }
  }
  return finalChange;
}

//console.log("change needed: " + findWantedChange(105.90));
function findWantedChange(change)
{
  let changeNeeded = [];
  for(let i = referenceValues.length -1; i >= 0; i--)
  {
    //console.log(change);
    if(change >= referenceValues[i])
    {
      changeNeeded.unshift(Math.floor(change / referenceValues[i]));
      change = change - referenceValues[i] * changeNeeded[0];
    }
    else
    {
      changeNeeded.unshift(0);
    }
    

  }
  
  return changeNeeded;
}


console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
