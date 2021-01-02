const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    price: {type: Number, required: true, default: 2.00},
    description: {type: String, required: true},
    image: {type: String, required: true},
    quantity: {type: Number, required: true, default: 0 }
}, {timestamps: true});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;