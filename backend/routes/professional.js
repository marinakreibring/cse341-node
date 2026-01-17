const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET /feed/posts
router.get('/', professionalController.getAll);
//router.get('/', professionalController.getSingle);
router.get('/:id', professionalController.getSingle);
// localhost:8080/professional/
// week 2
router.post('/', professionalController.createProfessional);
router.put('/:id', professionalController.updateProfessional);
router.delete('/:id', professionalController.deleteProfessional);   

// e[port the router - must be at the end of the file
module.exports = router;