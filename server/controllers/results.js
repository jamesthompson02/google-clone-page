const express = require('express')
const router = express.Router();

const Result = require('../models/result');

router.get('/all', (req,res) => {
    const results = Result.all;
    res.send(results);
})

router.get('/:category',(req,res) => {
    const category = req.params.category;
    const searchResults =  Result.findByCategory(category);
    if(searchResults.length > 0){
        res.send(searchResults);
    } else {
        const err = "Sorry, no results matching this category are available. Please search for football or food."
        res.send(err);
    }
    
})

module.exports = router;