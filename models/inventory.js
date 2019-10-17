const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    name: String,
    hours: String,
    category: String,
    price: String,
    type: String,
    year: String,
    brand: String,
    description: String,
    images: Array
})

module.exports = mongoose.model("Inventory", inventorySchema);