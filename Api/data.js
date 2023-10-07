const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
    status: {
        type: Number,
    },  
},)


module.exports = mongoose.model('cart',cartSchema)
