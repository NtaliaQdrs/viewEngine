var express = require('express');
var router = express.Router();

const livrosEmDestaque = [
  {
    id: 1,
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    capa: 'https://covers.openlibrary.org/b/id/8231996-L.jpg'
  },
  {
    id: 2,
    titulo: '1984',
    autor: 'George Orwell',
    capa: 'https://covers.openlibrary.org/b/id/7222246-L.jpg'
  },
  {
    id: 3,
    titulo: 'Dom Quixote',
    autor: 'Miguel de Cervantes',
    capa: 'https://covers.openlibrary.org/b/id/8228691-L.jpg'
  }
];

/* GET home page. */
router.get('/', function(req, res, next ) {
  res.render('index', { title: 'Biblioteca Online - Início', livrosEmDestaque: livrosEmDestaque });
});

module.exports = router;
