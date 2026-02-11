const obj ={a:1,b:"hello",c:3};

const result = Object.values(obj).every(value=>typeof value ==="number");

console.log(result);