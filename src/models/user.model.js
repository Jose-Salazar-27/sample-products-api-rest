const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    user: String,
    password: String,
    balance: Number,
    isPremium: {
      type: Boolean,
      default: false,
    },
    shoppingCart: [String],
    wishList: [String],
    securityQuestions: {
      question1: String,
      question2: String,
      question3: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('users', UserSchema);
