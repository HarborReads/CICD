const express = require('express');
const router = express.Router();
const searchController = require('../../controllers/searchController');

router.post('/history', searchController.getSearchHistoryByUserId);
router.post('/query', searchController.searchBooks);


module.exports = router;
