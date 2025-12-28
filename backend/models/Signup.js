const { required } = require('joi');
const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    whatsappNumber: {
        type: String,
        required: true,
        trim: true,
        match: /^\+[1-9]\d{1,14}$/
    },
    preferredTopics: {
        type: String,
        trim: true,
        maxlength: 500,
        default: ''
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending','contacted','scheduled'],
        default: 'pending'
    }
});

signupSchema.index({ email: 1 });

module.exports = mongoose.model('Signup', signupSchema);