function adultAge(age) {
    if (age >= 18) {
        return "Old Enough."
    }
    if (age < 18) {
        return "Still Young."
    }
}
const userAge = Number(prompt("Enter Your Age Please..."));
const result = adultAge(userAge);
console.log(result);
