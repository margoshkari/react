const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const Products = require("./productModule.js");

app.get(`/api/products`, async (req, res) => {
  var productsArray = await Products.GetProduct();
  res.json({ products: productsArray });
});

app.get(`/api/filter`, async (req, res) => {
  var productname = req.query.productname;
  var productsArray = await Products.GetFilteredProduct(productname);
  res.json({ products: productsArray });
});

app.listen(port, () => {
  console.log(`Start server ${port}`);
});
