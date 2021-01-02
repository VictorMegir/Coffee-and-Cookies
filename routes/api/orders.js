const router = require('express').Router();
const bodyParser = require('body-parser');

// Order Model
const Order = require('../../models/Order');

// @route /api/order POST
// @desc Create an Oder
// @access Public

router.post('/', (req, res) => {
    const newOrder = new Order({
        name: req.body.name,
        address: req.body.address,
        sum: req.body.sum,
        itemNames: req.body.itemNames,
        itemQuantities: req.body.itemQuantities
    });

    newOrder.save()
        .then(order => res.json(order))
        .catch(error => console.log(error));
});

module.exports = router;