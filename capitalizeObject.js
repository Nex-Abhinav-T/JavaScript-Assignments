const input ={name:"alice",city:"delhi"};
const result ={};

for(let key in input){
  let value = input[key];
  result[key]=
  typeof value ==="string"
  ? value[0].toUpperCase()+value.slice(1)
    :value;
}
console.log(result);

