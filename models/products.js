const mongoose = require("mongoose");

const { Schema } = mongoose

const schema = new Schema({
    materiales: {
        type: String,
        require: true
    },
    precios: {
        type: Number,
        require: true
    },
    imagen: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    medidas:{
        require: true
    }
});

const Product = mongoose.model("Product", schema);

module.exports = Product