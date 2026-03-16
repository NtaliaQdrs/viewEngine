var express = require('express');
var router = express.Router();

const usuario = {
  nome: 'João Silva',
  email: 'joao.silva@example.com',
  dataNascimento: '1990-05-15',
  membroDesde: '2022-01-20',
  preferencias: {
    tema: 'claro',
    notificacoes: true,
    idioma: 'pt-BR'
  }
};

/* GET perfil page. */
router.get('/', function(req, res, next) {
  res.render('perfil', { title: 'Meu Perfil', usuario: usuario });
});

/* GET configuracoes page. */
router.get('/configuracoes', function(req, res, next) {
  res.render('configuracoes', { title: 'Configurações do Perfil', preferencias: usuario.preferencias });
});

/* NOVA ROTA: GET historico page. */
router.get('/historico', function(req, res, next) {
  res.render('historico', { title: 'Meu Histórico', historico: usuario.historico });
});

module.exports = router;