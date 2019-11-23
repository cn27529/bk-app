var cool = require('cool-ascii-faces');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    var data_list = [{ id: 1, content: 'Learning coding for Vue at 10:00', status: true },
        { id: 2, content: 'Go to sleep at 13:00', status: false },
        { id: 3, content: 'Read My like books at 15:00', status: true },
        { id: 4, content: 'Have meal at 19:30', status: false },
        { id: 5, content: 'Watch movie 20:00', status: false }
    ];

    res.render('todolist', {
        title: 'TodoList for Vue',
        title_tw: '',
        title_en: '',
        data_list: JSON.stringify(data_list),
    });
});

module.exports = router;