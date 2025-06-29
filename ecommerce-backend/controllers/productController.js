const { Product } = require('../models');

exports.addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};
