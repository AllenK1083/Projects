const s = 20;
const m = 40;
const l = 20;
const stock = [s,m,l];
stock[0] = stock[0]-1;
stock[1] ++;
console.log("Current Stock");
console.log("s: " + stock[0]);
console.log(`m: ${stock[1]}`);
console.log(`l: ${stock[2]}`)