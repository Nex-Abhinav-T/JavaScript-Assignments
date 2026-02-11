let input ={a:10,b:50,c:20}



function largestValue (){

  let values=Object.values(input);
  let max =-Infinity;

  for(let i=0;i<values.length;i++){
    if(values[i]>max){
      max =values[i];
    }
}
return max;

}
console.log(largestValue());