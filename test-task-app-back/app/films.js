const express = require('express');

const FilmsSchema = require('../models/Films');

const router = express.Router();

router.get('/', async (req, res) => {
    const film = await FilmsSchema.find();
    try {
       return res.send(film)
    }catch(error) {
        res.send(error)
    }
});


router.get('/:id', (req, res) => {
   FilmsSchema.findOne({_id: req.params.id})
       .then(result => res.send(result))
       .catch(error => res.send(error))
});

module.exports = router;