const samsFriends = [];
samsFriends.push("morgan","riley","jessie","skyler","frankie");
const ashersFriends = [];
ashersFriends.push("morgan","aiden","angel","ariel","skyler");
const friendsRecommendationAsher = [];
let currentFriend = "";
for (let i = 0; i < samsFriends.length; i++) {
    currentFriend = samsFriends[i];
    let isCommonFriend = false;
if (!isCommonFriend) {
    friendsRecommendationAsher.push(currentFriend);
};}
   
console.log("Friends Recommended for Asher:");
console.log(friendsRecommendationAsher);