const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Computing Association of Mount Royal University' });

});
/* GET home page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About CAMRU' });
});

module.exports = router;
