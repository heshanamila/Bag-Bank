var mongoose = require('mongoose');

var Store = require('../models/store')



module.exports.storesGetAll = function(req, res) {

    Store.find()
    .exec(function(err, data) {
        if(err)	{
            console.log("Error finding hotels");
            res.status(500).json(err);
        }
        else {
            console.log("GET", "Hotels' data");
           
            res.status(200)
            .json(data);
        }
    });




}