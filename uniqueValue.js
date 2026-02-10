const input ={x:[1,2,3],y:[2,3,4],z:[4,5]};

const result=[];
 const keys = Object.keys(input);

 for( let i =0;i<keys.length;i++){

  const key = keys[i];
  const arr = input[key];
  for(let j =0;j<arr.length;j++){
    const value =arr[j];
    if(!result.includes(value)){
 
        result.push(value);
      }
    }
  }
  console.log(result);
 