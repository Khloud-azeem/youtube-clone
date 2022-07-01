const mongoose = require('mongoose');
const Joi = require('Joi');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 7,
        maxlength: 255,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        maxlength: 1024,
    },
    active: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('User', userSchema);

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(7).max(255).required().email(),
        password: Joi.string().min(7).max(255).required(),
        active: Joi.boolean()
    });

}

module.exports.User = User;
module.exports.validate = validateUser;