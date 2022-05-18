const express = require('express')
const router = express.Router()
const petController = require('../controllers/petController')

router.get('/pets', petController.index);
router.get('/pets/:id', petController.show);
router.post('/pets', petController.create);
router.put('/pets/:id',petController.update);
router.delete('/pets/:id', petController.destroy);



module.exports = router;