const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
router.get('/', professionalController.getAll);
//router.get('/', professionalController.getSingle);
router.get('/:id', professionalController.getSingle);
// localhost:8080/professional/
module.exports = router;