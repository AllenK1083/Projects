let price = 2.50;
let campers = 15;

console.log(price);
console.log(campers);

let taxRate = .08;
console.log(taxRate);

let budget = 40;

let total = ((price * campers)* taxRate)+(price*campers);
console.log(total)

let totalExceedsBudget = (total > budget);

console.log("Total Exceeds Budget? " + totalExceedsBudget);

let taxApplied = total > (price*campers);
console.log("Tax Applied? " + taxApplied);