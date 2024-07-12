const italianFood = [{
    mealName: "Pasta Bolognese",
    quantity: 3,
    price: 7
  }, {
    mealName: "Pepperoni pizza",
    quantity: 2,
    price: 10
  }];
  const thaiFood = [{
    mealName: "Pad Thai",
    quantity: 1,
    price: 8
  }];
  const indianFood = [{
    mealName: "Chapati",
    quantity: 8,
    price: 7
  }, {
    mealName: "Chicken Massala",
    quantity: 5,
    price: 9
  }, {
    mealName: "Tandoori Chicken",
    quantity: 5,
    price: 9
  }];
  
  function findMeal(name, menu) {
    for(i = 0; i<menu.length;i++){
      if (menu[i].mealName === name){
        return menu[i];
      }
    }
  }
  
  function selectMeal(name, type) {
    if (type === "italian"){
      return "italian order";
    } else if (type === "indian") {
      return "indian order";
    } else if (type === "thai"){
      return "thai order";
    } else { 
      return "not found";
    }
  }
  
  
  function createSummary(name, type, amount) {}