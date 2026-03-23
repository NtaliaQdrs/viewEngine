const express = require('express');
const router = express.Router();

// Rota para exibir a página de agendamento
router.get('/agendar', (req, res) => {
    res.render('agendar');
});

// Rota POST para processar o agendamento (Exemplo simples)
router.post('/agendar', (req, res) => {
    const { equipe, data, campo } = req.body;
    console.log(`Reserva recebida: ${equipe} para o dia ${data} no campo ${campo}`);
    
    // Após agendar, redireciona para a home com um aviso (opcional)
    res.redirect('/?msg=sucesso');
});

module.exports = router;