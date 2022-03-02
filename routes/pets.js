//importaciones
const express = require('express');
const router = express.Router();

const petsController = require('../controllers/petsController')
//router
router.get('/', petsController.getPets)
router.post('/create', petsController.createPet)



//exportacion
module.exports = router