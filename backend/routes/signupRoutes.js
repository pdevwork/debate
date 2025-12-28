const express = require('express');
const router = express.Router();
const Signup = require('../models/Signup');
const Joi = require('joi');

// Validation schema
const signupValidationSchema = Joi.object({
  fullName: Joi.string().min(2).max(100).required().trim(),
  email: Joi.string().email().required().trim().lowercase(),
  whatsappNumber: Joi.string().pattern(/^\+[1-9]\d{1,14}$/).required().trim()
    .messages({
      'string.pattern.base': 'WhatsApp number must include country code (e.g., +91xxxxxxxxxx)'
    }),
  preferredTopics: Joi.string().max(500).allow('').trim()
});

// POST /api/signup - Create new signup
router.post('/', async (req, res) => {
  try {
    // Validate input
    const { error, value } = signupValidationSchema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message
      });
    }

    // Check if email already exists
    const existingSignup = await Signup.findOne({ email: value.email });
    
    if (existingSignup) {
      return res.status(409).json({
        success: false,
        message: 'This email is already registered for the debate competition.'
      });
    }

    // Create new signup
    const signup = new Signup(value);
    await signup.save();

    res.status(201).json({
      success: true,
      message: 'Registration successful! You will receive debate topics via WhatsApp soon.',
      data: {
        id: signup._id,
        fullName: signup.fullName,
        email: signup.email
      }
    });

  } catch (err) {
    console.error('Signup error:', err);
    
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'This email is already registered.'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

// GET /api/signup/stats - Get basic stats (optional, for admin)
router.get('/stats', async (req, res) => {
  try {
    const totalSignups = await Signup.countDocuments();
    const pendingSignups = await Signup.countDocuments({ status: 'pending' });
    
    res.json({
      success: true,
      data: {
        total: totalSignups,
        pending: pendingSignups
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error fetching stats'
    });
  }
});

module.exports = router;    