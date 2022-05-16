const express = required("express");
const router = express.Router();

router.get('/servicos', (req, res) => res.send('Lista de Serviços'));
router.get('/servicos/:id', (req,res) => res.send('Detalhes do serviço: ' + req.params.id));
router.post('/servicos', (req, res) => res.send('Cadastro de Serviços'));
router.put('/servicos/:id', (req,res) => res.send('Atualização de serviços: ' + req.params.id));
router.delete('/servicos/:id', (req,res) => res.send('Exclusãos de serviços: ' + req.params.id));

module.exports = router