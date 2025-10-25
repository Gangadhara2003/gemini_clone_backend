const express = require('express');
const { generateContent } = require('../controllers/geminiController');
const router = express.Router();

router.post('/generate', generateContent);

module.exports = router;
