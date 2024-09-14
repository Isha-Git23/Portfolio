const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
