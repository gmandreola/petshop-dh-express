const express = require('express')
const router = express.Router()


router.get('/pets', (req, res) => res.send('Lista de Pets'));
router.get('/pets/:id', (req,res) => res.send('Detalhes do pet: ' + req.params.id));
router.post('/pets', (req, res) => res.send('Cadastro de Pet'));
router.put('/pets/:id', (req,res) => res.send('Atualização do pet: ' + req.params.id));
router.delete('/pets/:id', (req,res) => res.send('Exclusãos do pet: ' + req.params.id));



module.exports = router;