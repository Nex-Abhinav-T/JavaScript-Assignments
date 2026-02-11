let fruits=["apple","banana","apple","banana","apple"];

 
let fruitCount={};



for(let i=0;i<fruits.length;i++){
  let fruitName = fruits[i];

if(fruitCount[fruitName]){
  fruitCount[fruitName]++;
}else{
  fruitCount[fruitName] =1;
}
}
console.log(fruitCount);
