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

// function removeMenuItem(pizzaRestaurant, menuItem, type) {
//   for (var i = 0; i < pizzaRestaurant.menus[type].length; i++) {
//     if (pizzaRestaurant.menus[type][i] === menuItem) {
//       pizzaRestaurant.menus[type].splice(i, 1)
//     }
//   }
// }
function removeMenuItem(pizzaRestaurant, menuItem, type) {
  for (var i = 0; i < pizzaRestaurant.menus[type].length; i++) {
    if (pizzaRestaurant.menus[type][i].name === menuItem) {
      pizzaRestaurant.menus[type].splice(i, 1)
      return `No one is eating our ${menuItem} - it has been removed from the ${type} menu!`
    }
  } return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
}

// Only remove items that are on the menu
// We want to remove info from
//  Remove the item from menu and update interval
// Use a for loop to access the array
//deepEqual = array

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
