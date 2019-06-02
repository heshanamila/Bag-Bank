var express = require('express');
var router = express.Router();
var stores = require('../controllers/store-controller');


router.route('/') 
    .get(stores.storesGetAll);


module.exports = router;