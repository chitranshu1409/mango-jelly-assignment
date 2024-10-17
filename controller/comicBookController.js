const ComicBook = require('../models/comicBookModel');

// Create Comic Book
exports.createComicBook = async (req, res) => {
    try {
        const comicBook = new ComicBook(req.body);
        await comicBook.save();
        res.status(201).json(comicBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read All Comic Books with pagination, sorting, and filtering
exports.getComicBooks = async (req, res) => {
    try {
        const { page = 1, limit = 10, sort = 'bookName', ...filters } = req.query;
        const comicBooks = await ComicBook.find(filters)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .sort(sort);
        res.status(200).json(comicBooks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single Comic Book
exports.getComicBookById = async (req, res) => {
    try {
        const comicBook = await ComicBook.findById(req.params.id);
        if (!comicBook) return res.status(404).json({ message: 'Comic Book not found' });
        res.status(200).json(comicBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update Comic Book
exports.updateComicBook = async (req, res) => {
    try {
        const comicBook = await ComicBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!comicBook) return res.status(404).json({ message: 'Comic Book not found' });
        res.status(200).json(comicBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete Comic Book
exports.deleteComicBook = async (req, res) => {
    try {
        const comicBook = await ComicBook.findByIdAndDelete(req.params.id);
        if (!comicBook) return res.status(404).json({ message: 'Comic Book not found' });
        res.status(200).json({ message: 'Comic Book deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
