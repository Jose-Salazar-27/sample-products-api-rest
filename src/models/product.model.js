const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    discountRate: {
      type: Number,
      default: 0,
    },
    brand: String,
    stock: {
      type: Boolean,
      default: true,
    },
    images: [String],
    category: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('products', ProductSchema);
