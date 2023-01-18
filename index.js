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
console.log(getEmail.call(teacher));
console.log(getEmail.call(student));
