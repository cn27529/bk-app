var cool = require('cool-ascii-faces');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('onepage2', {
        title: '舞蹈生態系創意團隊｜Dancecology｜onepage',
        title_tw: '舞蹈生態系創意團隊',
        title_en: 'Dancecology',
    });
});

module.exports = router;