let maxPoints = 120;
let passingPoints = 70;
let samPoints = 84;
let alexPoints = 75;
let jessiePoints = 99;
let didAlexPass = true;

let samPointsDisplay = "Sam earned " + samPoints + " points out of " + maxPoints;
console.log(samPointsDisplay);

let alexPointsDisplay = "Alex earned " + alexPoints + "points out of " + maxPoints;
console.log(alexPointsDisplay);

let jessiePointsDisplay = "Jessie earned " + jessiePoints + "points out of " + maxPoints;
console.log(jessiePointsDisplay);

let samMissedPoints = maxPoints - samPoints;
let alexMissedPoints = maxPoints - alexPoints;
let jessieMissedPoints = maxPoints - jessiePoints;

let samPercentage = (samPoints/maxPoints)*100;
let samPercentDisplay = "Sam scored " + samPercentage +"%";
console.log(samPercentDisplay);

let alexPercentage = (alexPoints/maxPoints)*100;
let alexPercentDisplay = "Alex scored " + alexPercentage +"%";
console.log(alexPercentDisplay);

let jessiePercentage = (jessiePoints/maxPoints)*100;
let jessiePercentDisplay = "Jessie scored " + jessiePercentage +"%";
console.log(jessiePercentDisplay);

let samMissedPointsDisplay = "Sam missed " + samMissedPoints + " point(s).";
console.log(samMissedPointsDisplay);

let alexMissedPointsDisplay = "Alex missed " + alexMissedPoints + " point(s).";
console.log(alexMissedPointsDisplay);

let jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints + " point(s).";
console.log(jessieMissedPointsDisplay);

let classAveragePoints = (samPoints + alexPoints + jessiePoints)/3;
let classAveragePercent = classAveragePoints/maxPoints*100;

let classAvgDisplay = "The class average was " + classAveragePoints + " points or " + classAveragePercent.toFixed(2) +"%";
console.log(classAvgDisplay);

let alexPointsUpdated = "Alex failed initially but did extra credit. Their new score is " + alexPoints + " out of " + maxPoints;
console.log(alexPointsUpdated);

const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";