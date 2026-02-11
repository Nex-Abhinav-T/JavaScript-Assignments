const onj1={a:1,b:2,c:3};
const obj2={b:4,c:5,d:6};

const result =Objecct.keys(obj1).filter(key => key in obj2);

console.log(result);