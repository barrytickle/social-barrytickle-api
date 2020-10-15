var express = require('express');
var router = express.Router();
var ig = require('instagram-scraping');

/* GET home page. */
router.post('/insta', function(req, res, next) {
        const body = req.body;
        const id = body.username;
        ig.scrapeUserPage(id).then(result => {
            res.json(result);
        })
});

module.exports = router;
