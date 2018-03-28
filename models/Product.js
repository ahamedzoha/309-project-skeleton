var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    trim: true,
    required: 'Title required'
  },

  description: {
    type: String,
    default: '',
    trim: true,
  },
  
  price: {
    type: Number,
    default: '',
    trim: true,
    reqired:'Price Required!'
  },
  
  quantity: {
    type: Number,
    default: '1',
    trim: true,
    reqired:'Quantity Required!'
  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;
