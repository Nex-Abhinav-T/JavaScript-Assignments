const input ={name:"Alice",age:25};

const queryString =Object.entries(input)
.map(([key,value])=> `${key}=${value}`)
.join("&");

console.log(queryString);