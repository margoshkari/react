const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const productScheme = new Schema({
  ProductName: String,
  Price: Number,
});

// подключение
mongoose.connect(
  "mongodb+srv://product:qwerty123@cluster0.xotx6dl.mongodb.net/product_db"
);

const Product = mongoose.model("products", productScheme);
class Goods {
  constructor(productName, price) {
    this.ProductName = productName;
    this.Price = price;
  }
}
async function GetProduct() {
  var product = await Product.find({});
  return product;
}
async function GetFilteredProduct(productname) {
  var allProducts = await GetProduct();
  var filteredProducts = [];
  allProducts.map((product, index) => {
    if (product.ProductName.toLowerCase().includes(productname.toLowerCase())) {
      filteredProducts.push(new Goods(product.ProductName, product.Price));
    }
  });
  return filteredProducts;
}
module.exports = {
  GetProduct,
  GetFilteredProduct,
};
