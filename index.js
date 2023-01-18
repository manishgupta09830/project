let student={
  firstName:"manish",
  lastName:"gupta",
  age:18,
}
let teacher={
  firstName:"promod",
  lastName:"tiwari",
  age:18,
}
function getEmail(firstName,lastName){
  return this.email= `${this.firstName}${this.lastName}@gmail.com`
}
function chooseSubject(sub1,sub2){
  console.log(sub1,sub2);
  
}
// console.log(chooseSubject.apply(teacher,["maths"]));
// console.log(chooseSubject.call(student,["maths","arts"]));
// console.log(getEmail.bind(teacher));

 
let callanotherTime=getEmail.bind(teacher);
console.log(callanotherTime());
console.log(teacher);