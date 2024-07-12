const receipt = [21.99, 10.67, 18.50];

function getCents(price) {
  const splitPrice = price.toString().split(".");
  return splitPrice[1];
}

function getsDiscount(rec) {
  let total = 0;
  for (let i = 0; i<rec.length; i++){
    total = total + rec[i]}
    if (total>50){
      return true
    } else {return false}
}

function findDiscount(price) {
  let cents = getCents(price);
  if (cents == 67) {
    return 0.3;
  } else if (cents == 95) {
    return 0.4;
  } else if (cents == 99) {
    return 0.5;
  } else {
    return 0;
  }
}
  