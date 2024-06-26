const customers = ["John S.", "Emma M.", "Frank T."];
const receipts = [
  ["eggs", "white bread", "milk"],
  ["milk", "cheese", "butter", "pancake mix", "flour"],
  ["cereal", "whole wheat bread", "milk", "cheese", "eggs", "vanilla"]
];
const prices = {
  "eggs": 3.50,
  "white bread": 4.50,
  "milk": 5.99,
  "cheese": 6.50,
  "butter": 3.45,
  "pancake mix": 4.50,
  "flour": 5.75,
  "cereal": 4.50,
  "whole wheat bread": 6.50,
  "vanilla": 8.75
};

function setElementText(id, text) {
  document.getElementById(id).innerText = text;
}

function populateTable() {
  // Your code starts here
  for (let i = 0; i < customers.length; i++){
    const customer = customers[i];
    const receipt = receipts[i];
    let receipt_list = "";
    let sum = 0;
      for( let j = 0; j < receipt.length; j ++){
        let item  = receipt[j];
        let price  = prices[item];
        receipt_list = receipt_list + item + "\n";
        sum = sum + price;
      }
setElementText("customer" + i, customer);
setElementText("receipt" + i, receipt_list);
setElementText("total" + i, sum);
  }
}
