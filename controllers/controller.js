let collection = require('../model/anime');

const postAnime = (req, res) => {
    let cat = req.body;
    collection.insertAnime(anime, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' });
        }
    });
}


const getAllAnime = (req, res) => {
    collection.getAllAnime((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'success' });
        }
    });
}


module.exports = { postAnime, getAllAnime }
