var express = require('express');
var router = express.Router();


const autores = [
  { 
    id: 1, 
    nome: 'J.R.R. Tolkien', 
    nacionalidade: 'Britânico', 
    biografia: 'Autor de O Senhor dos Anéis.',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/J._R._R._Tolkien%2C_ca._1925.jpg',
    obras: ['O Senhor dos Anéis', 'O Hobbit', 'O Silmarillion']
  },

  { 
    id: 2, 
    nome: 'George Orwell', 
    nacionalidade: 'Britânico', 
    biografia: 'Autor de 1984 e A Revolução dos Bichos.',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/George_Orwell_press_photo.jpg',
    obras: ['1984', 'A Revolução dos Bichos']
  },

  { 
    id: 3, 
    nome: 'Jane Austen', 
    nacionalidade: 'Britânica', 
    biografia: 'Romancista conhecida por Orgulho e Preconceito.',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/CassandraAusten-JaneAusten%28c.1810%29_hires.jpg',
    obras: ['Orgulho e Preconceito', 'Razão e Sensibilidade']
  },

  { 
    id: 4, 
    nome: 'Gabriel García Márquez', 
    nacionalidade: 'Colombiano', 
    biografia: 'Nobel de Literatura, autor de Cem Anos de Solidão.',
    foto: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Gabriel_Garcia_Marquez.jpg',
    obras: ['Cem Anos de Solidão', 'O Amor nos Tempos do Cólera']
  }
];

/* GET autores page. */
router.get('/', function(req, res, next) {
  res.render('authors', { title: 'Biblioteca Online - Autores', autores: autores });
});

/* NOVA ROTA: GET detalhes do autor page. */
router.get('/detalhes/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  const autor = autores.find(a => a.id === id);

  if (autor) {
    res.render('detalhes', { title: 'Detalhes do Autor - ' + autor.nome, autor: autor });
  } else {
    res.status(404).send('Autor não encontrado');
  }
});

module.exports = router;
