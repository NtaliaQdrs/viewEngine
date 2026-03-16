var express = require('express');
var router = express.Router();

const livros = [
  { 
    id: 1, 
    titulo: 'O Senhor dos Anéis', 
    autor: 'J.R.R. Tolkien', 
    ano: 1954, 
    capa: 'https://m.media-amazon.com/images/I/81hCVEC0ExL._SY466_.jpg'
  },

  { 
    id: 2, 
    titulo: '1984', 
    autor: 'George Orwell', 
    ano: 1949, 
    capa: 'https://covers.openlibrary.org/b/id/7222246-L.jpg'
  },

  { 
    id: 3, 
    titulo: 'Dom Quixote', 
    autor: 'Miguel de Cervantes', 
    ano: 1605, 
    capa: 'https://cdn.kobo.com/book-images/00d43f48-dffb-4ed1-960e-8803c64ec31a/1200/1200/False/dom-quixote-7.jpg'
  },

  { 
    id: 4, 
    titulo: 'Orgulho e Preconceito', 
    autor: 'Jane Austen', 
    ano: 1813, 
    capa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/500px-PrideAndPrejudiceTitlePage.jpg'
  },

  { 
    id: 5, 
    titulo: 'Cem Anos de Solidão', 
    autor: 'Gabriel García Márquez', 
    ano: 1967, 
    capa: 'https://m.media-amazon.com/images/I/511NRhFHZbL._SY445_SX342_ML2_.jpg'
  }
];

/* GET livros page. */
router.get('/', function(req, res, next ) {
  res.render('books', { title: 'Biblioteca Online - Livros', livros: livros });
});


module.exports = router;
