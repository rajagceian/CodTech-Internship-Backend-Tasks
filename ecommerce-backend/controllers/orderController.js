const { Order } = require('../models');

exports.placeOrder = async (req, res) => {
  const { productId, quantity } = req.body;
  const order = await Order.create({
    ProductId: productId,
    quantity,
    UserId: req.user.id
  });
  res.json(order);
};

exports.getUserOrders = async (req, res) => {
  const orders = await Order.findAll({ where: { UserId: req.user.id } });
  res.json(orders);
};
