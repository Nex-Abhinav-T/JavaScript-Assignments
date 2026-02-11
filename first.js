const expenses=
{
  food:[10,20,30],
  travel:[5,15],
  bills:[40,60]
};

function foodTotal(){
 
 let sumFood= expenses.food[0]+expenses.food[1]+expenses.food[2];
 return sumFood;
}

function travelTotal(){
  let sumTravel=expenses.travel[0]+expenses.travel[1];
  return sumTravel;
}
function billTotal(){
  let sumBill=expenses.bills[0]+expenses.bills[1];
  return sumBill;
}
  const finalExpense={};

  function calculateTotals(){
    finalExpense.food=foodTotal();
    finalExpense.travel=travelTotal();
    finalExpense.bills=billTotal();
  }
    calculateTotals();

  console.log(finalExpense);