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

async function GetProduct() {
  var product = await Product.find({});
  return product;
}
async function GetFilteredProduct(productname) {
  var product = await Product.find({ ProductName: productname });
  return product;
}
module.exports = {
  GetProduct,
  GetFilteredProduct,
};
