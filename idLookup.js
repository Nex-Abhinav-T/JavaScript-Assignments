const arr =[
  {id:1,name:"A"},
  {id:2,name:"B"}
];

let result ={};

for(let i=0;i<arr.length;i++){

  result[arr[i].id] =arr[i];
}
console.log(result);