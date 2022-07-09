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





module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
