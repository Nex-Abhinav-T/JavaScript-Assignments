const input ={a:0,b:null,c:"hello",d:undefined,e:5};

const result =Object.entries(input).reduce((acc,[key,value]) => {
  if(!value){
    acc[key]=value;
  }
  return acc;
  },{});

console.log(result);