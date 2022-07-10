function createRestaurant(name) {
  var pizzaRestaurant = {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return pizzaRestaurant
}


function addMenuItem(pizzaRestaurant, menuItem) {
  if (menuItem.type === "lunch" && !pizzaRestaurant.menus.lunch.includes(menuItem)) {
    pizzaRestaurant.menus.lunch.push(menuItem)
  }
  else if (menuItem.type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(menuItem)) {
    pizzaRestaurant.menus.breakfast.push(menuItem)
 }
  else if(menuItem.type === "dinner" && !pizzaRestaurant.menus.dinner.includes(menuItem)) {
    pizzaRestaurant.menus.dinner.push(menuItem)
  }
}

function removeMenuItem() {
  
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
