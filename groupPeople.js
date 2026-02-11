const people=[
{name:"A",city:"Delhi"},
{name:"B",city:"Mumbai"},
{name:"C",city:"Delhi"}
];
const result ={};
for(let i=0;i<people.length;i++){
  const person=people[i];
  const city=person.city;

   if(!result[city]){
    result[city]=[];
   }
   result[city].push(person.name);

}
console.log(result);