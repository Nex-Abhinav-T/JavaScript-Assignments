const input={a:1,b:2,c:3};

let count =0;

const keys = Object.keys(input);

for(let i=0;i<keys.length;i++){
  count++;
}

console.log(count);