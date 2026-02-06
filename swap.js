let input ={
  a:"x",b:"y",c:"z"
}

let output={};
for(let key in input){
  let value=input[key];
  output[value]=key;
}

console.log(output);