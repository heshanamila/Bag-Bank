var app             = require("express");
var router          = app.Router();
var booking            = require("../models/booking");

// =========================================
//              Angular Routes
// =========================================

/**
 * Angular Render Update booking
 */
router.get("/booking/:id/edit", function(req, res) {
    booking.findById(req.params.id, function(err, booking) {
        if(err) throw err;

        res.json(booking);
    });
});
/**
 * Angular Post Create booking
 */
router.post("/booking/create", function(req, res) {
    booking.create(req.body, function(err) {
        if(err) throw err;

        res.json({ success: true })
    });
});
/**
 * Angular Post Update booking
 */
router.post("/booking/:id/update", function(req, res) {

    booking.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if(err) throw err;

        res.json({success: true});
    });
});
/**
 * Angular Post Delete booking
 */
router.post("/booking/:id/delete", function(req, res) {
    booking.findByIdAndRemove(req.params.id, function(err) {
        if(err) throw err;

        res.json({success: true});
    });
});


module.exports = router;