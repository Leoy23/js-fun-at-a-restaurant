function nameMenuItem(items) {
return `Delicious ${items}`
}

function createMenuItem(itemName, itemPrice, itemType) {
  return {
    name: itemName,
    price: itemPrice,
    type: itemType
    }
  }
// Looking at the function "addIngredients", we include the parameters
// "foodItem" and "ingredients" and then as the test ran through the if statement
// each
function addIngredients (foodItem, ingredients) {
  if (ingredients.includes(foodItem)) {
    ingredients.pop();
  }
  ingredients[ingredients.length] = foodItem;
  return addIngredients;
}

function formatPrice(price) {
  return `$` + price;
}

function decreasePrice(decreaseItemPrice) {
  return decreaseItemPrice - (decreaseItemPrice / 10)
}


function createRecipe (title, ingredients, type ) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
