// 1.

const canDrive = 18;
const realAge = 16;
const ageCheck = (realAge >= canDrive) ? "Yes, you can drive! Hope you have a license" : "Nope, you're too young!";
console.log(ageCheck)

// 2.

const speedCheck = 130;
const carSpeed = 120;
const check = (canDrive >= speedCheck) ? "You're going too fast - slow down!" : "You're driving below the speed limit";
console.log(check)

// 3.

const personAge = 30;
const allowedAge = 21;
const alcoholAge = (personAge <= allowedAge)? "Here's some juice" : "Here's some wine";
console.log(alcoholAge)

/*### 4. Student Discount
Declare a variable named isStudent. 
If true, print `Ticket costs €5,00`. If false, print `Ticket costs €12,00`.*/

// 4.

const isStudent = "student";

const student = ("student = student") ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log(student)

/*### 5. What time is it? 
Declare a variable named timeOfDay. Check if the time of day is `morning` - 
if so, print `Good Morning`. If not, print `Good Evening`.*/

// 5.

const timeOfDay = 18
const timeOfMorning = 12
const currentHour = (timeOfDay <= timeOfMorning) ? "Good Morning" : "Good Evening";
console.log(currentHour)