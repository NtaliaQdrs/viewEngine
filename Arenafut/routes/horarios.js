var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Voce está em Horários' });
});

router.get('/agendamentos', function(req, res, next) {
  res.render('agendamentos', { title: 'Voce está em agendamentos' });
});


module.exports = router;
