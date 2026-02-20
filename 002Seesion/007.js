function greeting(fname, lname) {
  const sentence = "welcome " + fname + " " + lname;
  return sentence;
}
const userFname = prompt("enter your first name :");
const userLname = prompt("enter your last name :");
const result = greeting(userFname, userLname);
console.log(result);
