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
}

function formatPrice(price) {
  return `$` + price;

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}
