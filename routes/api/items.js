const router = require('express').Router();
const bodyParser = require('body-parser');

// Item Model
const Item = require('../../models/Item');

// @route GET /api/items
// @desc Get All Items 
// @access Public

router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(error => console.log(error));
});

// @route GET /api/items/:type
// @desc Get All Items by Type
// @access Public

router.get('/:type', (req, res) => {
    const type = req.params.type;
    Item.find({type})
        .then(items => res.json(items))
        .catch(error => console.log(error));
});

module.exports = router;