const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    name: String,
    hours: String,
    price: String,
    description: String,
    year: String,
    brand: String,
    category: String,
    year: String,
    brand: String,
    images: []
})

module.exports = mongoose.model("Inventory", inventorySchema);