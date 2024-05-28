let maxPoints = 120;
let passingPoints = 70;
let samPoints = 84;
let alexPoints = 45;
let jessiePoints = 99;
let didAlexPass = false;

let samPointsDisplay = "Sam earned " + samPoints + " points out of " + maxPoints;
console.log(samPointsDisplay);

let alexPointsDisplay = "Alex earned " + alexPoints + "points out of " + maxPoints;
console.log(alexPointsDisplay);

let jessiePointsDisplay = "Jessie earned " + jessiePoints + "points out of " + maxPoints;
console.log(jessiePointsDisplay);

let samPercentage = (samPoints/maxPoints)*100;
let samPercentDisplay = "Sam scored " + samPercentage +"%";
console.log(samPercentDisplay);

const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";