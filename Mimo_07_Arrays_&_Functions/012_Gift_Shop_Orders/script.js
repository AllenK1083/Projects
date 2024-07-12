let sales = [455, 505, 340, 780, 690, 880, 900, 685, 835, 754];
let customers = [25, 30, 20, 35, 36, 32, 44, 45, 34, 15];
let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"];

let firstWeekSales = sales.filter((element, index) => index < 7);
console.log("First Week Sales: " + firstWeekSales);

let firstWeekCustomers = customers.filter((element, index) => index < 7);

console.log(`First Week Customers: ${firstWeekCustomers}`);