console.log('database goes here')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/authors')
module.exports = mongoose
