const roles ={
admin:["read","write"],
user:["read"],
staff:["write"]

};

const checkRole ="user";
const action="write";

const result =roles[checkRole]?.includes(action)||false;

console.log(result);
 