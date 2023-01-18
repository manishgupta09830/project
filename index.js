let student={
  firstName:"manish",
  lastName:"gupta",
  age:18,
  getEmail:getEmail(this.firstName,this.lastName)
}
let teacher={
  firstName:"promod",
  lastName:"tiwari",
  age:18,
  getEmail:getEmail(this.firstName,this.lastName)
}
function getEmail(firstName,lastName){
  return `${this.firstName}${this.lastName}@gmail.com`
}
function chooseSubject(sub1,sub2){
  console.log(sub1,sub2);
  
}
console.log(chooseSubject.apply(teacher,["maths"]));
console.log(chooseSubject.call(student,["maths","arts"]));
