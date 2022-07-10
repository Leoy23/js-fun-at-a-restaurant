function takeOrder(newOrder, deliveryOrders) {
if (deliveryOrders.length < 3) {
  return deliveryOrders.push(newOrder)
  }
}

function refundOrder(orderNum, deliveryOrders) {
for (var i = 0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].orderNumber === orderNum) {
    return deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(deliveryOrders) {
  var itemList = []
  for (var i = 0; i < deliveryOrders.length; i++ ) {
    itemList.push(deliveryOrders[i].item)
  }
    return itemList.join(", ");
}

function searchOrder(deliveryOrders, orderItem) {
  var order = false
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderItem === deliveryOrders[i].item) {
      order = true
    }
  }
    return order;
  }
  // what am I trying to accomplish? Return or console.log a true or false value
   // How? Through an "if" statement and a for loop
   // what info do I need to access? the deliveryOrders array // using .includes() to result in true or false



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
