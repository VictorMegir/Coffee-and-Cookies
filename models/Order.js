const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    sum: { type: Number, required: true, default: 0 },
    itemNames: { type: [String], required: true },
    itemQuantities: { type: [Number], required: true }
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;