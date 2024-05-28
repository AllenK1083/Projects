let averageSpeed =  57;
let mpg = 27;
let gallons = 13; 
let destination = "Ithaca, NY";
let tripMiles = 74+63+167;
let time = tripMiles/averageSpeed;
let tankRange = mpg*gallons;
let leftoverGasRange = tankRange -  tripMiles;
console.log("Trip to " + destination)
console.log("Estimated Time: "+time)
console.log("Range Remaining: "+leftoverGasRange)