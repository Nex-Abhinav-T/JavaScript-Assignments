const input={
  A:[80,90],
  B:[70,75,85]
};

let highestAvg=-Infiity;
let topStudent ="";

const students=Object.keys(input);

for(let i=0;i<students.length;i++){
  const student =students[i];
  const marks =input[student];

  let sum=0;
   for(let j=0;j< marks.length;j++){
    sum +=marks[j];
   }

   const avg =sum/marks.length;

   if(avg>highestAvg){
    highestAvg=avg;
    topStudent =student;
   }
   }
console.log(topStudent);
