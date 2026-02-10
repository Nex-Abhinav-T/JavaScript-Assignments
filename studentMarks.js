const students={A:[80,90],B:[70,75,85]

};

let highestAverage= -Infinity;
let topStudent="";
const studentKeys= Object.keys(students);
for( let i=0;i<studentKeys.length;i++){

  const student = studentKeys[i];
  const marks =students[student];
 
  let sum= 0;
  for(let j=0;j<marks.length ;j++){
    sum +=marks[j];
  }
  const average = sum/marks.length;
  if(average> highestAverage){
    highestAverage= average;
  topStudent =student;
}
}
console.log(topStudent);
