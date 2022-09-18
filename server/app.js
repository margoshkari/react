const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const Products = require("./productModule.js");

// product.save(function (err) {
//   mongoose.disconnect(); // отключение от базы данных

//   if (err) return console.log(err);
//   console.log("Сохранен объект", product);
// });

app.get(`/products`, async (req, res) => {
  var productsArray = await Products.GetProduct();
  res.json({ products: productsArray });
});

app.listen(port, () => {
  console.log(`Start server ${port}`);
});
