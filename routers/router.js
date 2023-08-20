let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function (req, res) {
    controller.postAnime(req, res);
});

router.get('/', (req, res) => {
    controller.getAllAnime(req, res);
});

module.exports = router;