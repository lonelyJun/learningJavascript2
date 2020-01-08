//建立模型模块
const mongoose = require('mongoose')

const BookSchema = {
  name: String,
  price: Number
}

const CustomerSchema = {
  name: String,
  password: String,
  score: Number
}

mongoose.model('Book', BookSchema)
mongoose.model('Customer', CustomerSchema)
