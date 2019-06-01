var express = require('express');
var router = express.Router();
var stores = require('../controllers/store-controller');


router.route('/stores')
    .get(stores.storesGetAll);





    module.exports = router;