var express = require('express');
var router = express.Router();

/* ROTA HOME: Listagem de Arenas */
router.get('/', function(req, res, next) {
    const arenas = [
        { id: 1, nome: "Arena Maracanãzinho", local: "Centro", preco: 150, img: "https://images.unsplash.com/photo-1529900948632-58674ba19308?auto=format&fit=crop&q=80&w=400" },
        { id: 2, nome: "Society Premium", local: "Bairro Nobre", preco: 120, img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=400" },
        { id: 3, nome: "Gol de Placa", local: "Zona Sul", preco: 100, img: "https://images.unsplash.com/photo-1575361394609-035189bcfa7d?auto=format&fit=crop&q=80&w=400" }
    ];
    
    // Passamos o 'title' e as 'arenas' em um único objeto
    res.render('index', { 
        title: 'Arena Soccer - Home', 
        arenas: arenas, 
        msg: req.query.msg 
    });
});

/* ROTA SOBRE */
router.get('/sobre', function(req, res, next) {
    res.render('sobre', { title: 'Sobre Nós' });
});

/* NOVA ROTA: Formulário de Agendamento */
router.get('/agendar', function(req, res, next) {
    // Pegamos o ID da arena pela URL (ex: /agendar?arena=1)
    const arenaSelecionada = req.query.arena || null;
    res.render('agendar', { title: 'Reservar Horário', arenaId: arenaSelecionada });
});

/* ROTA POST: Receber os dados do formulário */
router.post('/agendar', function(req, res) {
    const dados = req.body;
    console.log("Reserva recebida:", dados);
    // Redireciona para a home com mensagem de sucesso
    res.redirect('/?msg=sucesso');
});

module.exports = router;
