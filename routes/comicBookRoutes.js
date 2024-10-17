const express = require('express');
const router = express.Router();
const comicBookController = require('../controller/comicBookController');

router.post('/comics', comicBookController.createComicBook);
router.get('/comics', comicBookController.getComicBooks);
router.get('/comics/:id', comicBookController.getComicBookById);
router.put('/comics/:id', comicBookController.updateComicBook);
router.delete('/comics/:id', comicBookController.deleteComicBook);

module.exports = router;
