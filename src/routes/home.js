const express = require('express');
const router = express.Router();

const homeController = require('../app/controller/HomeController');
const searchController = require('../app/controller/HomeController');

router.get('/search', searchController.indexsearch);
router.get('/', homeController.index);



module.exports = router;