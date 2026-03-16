var express = require('express');
var router = express.Router();

const livrosEmDestaque = [
  {
    id: 1,
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    capa: 'https://m.media-amazon.com/images/I/81hCVEC0ExL._SY466_.jpg',
    obras: ['O Senhor dos Anéis', 'O Hobbit', 'O Silmarillion']
  },
  {
    id: 2,
    titulo: '1984',
    autor: 'George Orwell',
    capa: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
    obras: ['1984', 'A Revolução dos Bichos']
  },
  {
    id: 3,
    titulo: 'Dom Quixote',
    autor: 'Miguel de Cervantes',
    capa: 'https://cdn.kobo.com/book-images/00d43f48-dffb-4ed1-960e-8803c64ec31a/1200/1200/False/dom-quixote-7.jpg',
    obras: ['La galatea', 'Novelas exemplares']
  }
];

/* GET home page. */
router.get('/', function(req, res, next ) {
  res.render('index', { title: 'Biblioteca Online - Início', livrosEmDestaque: livrosEmDestaque });
});

module.exports = router;
