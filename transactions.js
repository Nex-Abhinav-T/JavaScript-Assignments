const input =[

  {user:"A",amount:100},
  {user:"B",amount:200},
  {user:"A",amount:50}
];


const  result =input.reduce((acc,txn)=>{
  if(!acc[txn.user]){
    acc[txn.user]=0;

  }

  acc[txn.user] += txn.amount;
  return acc;


},{});
console.log(result);
