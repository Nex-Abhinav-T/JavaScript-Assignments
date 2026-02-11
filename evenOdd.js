const  input =[1,2,3,4,5,6];

let result ={even :0,odd:0};

for(let i=0; i<input.length;i++){
  if(input[i]%2===0){
    result.even++;

  }else{
    result.odd++;
  }
}
console.log(result);