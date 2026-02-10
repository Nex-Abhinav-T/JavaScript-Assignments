const input={name:"Rahul",age:23,city:"Noida"};

const keysToPick=["name","city"];
const result={};

for(et i=0;i<keysToPick.length;i++){
  const key=keysToPick[i];

  if(input.hasOwnProperty(key)){
    result[key]=input[key];

  }
}
console.log(result);