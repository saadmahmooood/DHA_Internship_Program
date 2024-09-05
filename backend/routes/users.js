const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// User Signup
router.post('/signup', async (req, res) => {
  const { username, email, CNIC, password, cpswd } = req.body;

  if (!username || !email || !CNIC || !password || !cpswd) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (password !== cpswd) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const existingUser = await User.findOne({ CNIC });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this CNIC already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, CNIC, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Signup successful. Please log in.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// User Login
router.post('/login', async (req, res) => {
  const { CNIC, password } = req.body;

  if (!CNIC || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await User.findOne({ CNIC });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

module.exports = router;
