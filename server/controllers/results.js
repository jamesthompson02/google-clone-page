const express = require('express')
const router = express.Router();

const Result = require('../models/result');

router.get('/all', (req,res) => {
    const results = Result.all;
    res.send(results);
})

router.get('/:category',(req,res) => {
    const category = req.params.category;
    let searchResults;
    if(searchResults === Result.findByCategory(category)){
        res.send(searchResults);
    } else {
        const err = "Sorry, no results matching this category are available. Please search for football or food."
        res.send(err);
    }
    
})

module.exports = router;