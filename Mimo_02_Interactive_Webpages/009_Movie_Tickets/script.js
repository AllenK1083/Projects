let member_number
let age = 65;
let price ;
age = 10;
age = 27;

if (age >= 65){
  price = 5;
} else if (age <= 10){
  price = 8;
} else {
  price = 10;
}

const isMember = (member_number > 0);

if (isMember){
  console.log("Welcome Back!");
  price = (price*.8);
}

console.log("Ticket Price: $" + price);