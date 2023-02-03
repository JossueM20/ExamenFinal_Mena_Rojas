const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
    title: String ,
    description: String,
    filename: String,
    path: String,
    originalname: String,
    mimetype: String,
    size: Number
});

module.exports = model('Image', serviceSchema);
