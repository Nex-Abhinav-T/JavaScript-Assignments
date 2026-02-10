const input={a:20,b:60,c:40,d:90};

 const result={};

 const keys = Object.keys(input);

 for(let i=0;i<keys.length;i++){
  const key =keys[i];
  const value = input[key];
  if(value>50){
    result[key]=value;
}
 }
console.log(result);
 