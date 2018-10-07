var express = require('express');
var router = express.Router();

var pincode = require("../datasource/pincode");

/* GET location through pin code. */
router.get('/:pincode', function (req, res) {
    console.log("fetching information of pincode ", req.params.pincode);
    var response = {};
    pincode.find({code: req.params.pincode}, function (err, data) {
        console.log("error data", err, data)
        if (err) {
            response = {"error": true, "message": "Error fetching data"};
        } else {
            response = {"error": false, "message": data};
        }
        res.json(response);
    });
});

module.exports = router;
