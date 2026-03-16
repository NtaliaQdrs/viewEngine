var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Harmony Hub - Sua Música, Seu Ritmo",
    pageTitle: "Harmony Hub",
    welcomeMessage: "Bem-vindo ao Harmony Hub! Descubra novas músicas e artistas.",
    featuredArtists: [
      { name: "Anitta", genre: "Pop, Funk", image: "https://br.web.img2.acsta.net/pictures/20/11/19/16/21/4456129.jpg" },
      { name: "Djavan", genre: "MPB, Jazz", image: "https://www.cartacapital.com.br/wp-content/uploads/2025/01/djavan1.jpg" },
      { name: "IZA", genre: "Pop, R&B", image: "https://escaesco.com.br/wp-content/uploads/2023/11/IZA.jpg" },
      { name: "Luan Santana", genre: "Sertanejo", image: "https://www.fgmusic.com.br/admin/image/artista/9/49lg.jpg" }
    ],
    latestReleases: [
      { title: "Batidão Tropical Vol. 2", artist: "Pabllo Vittar", cover: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/capa-pablo-vittar.png?w=1080&h=597&crop=1" },
      { title: "Doce 22", artist: "Luísa Sonza", cover: "https://tracklist.com.br/wp-content/uploads/media/2021/07/Luisa-Sonza-DOCE-22.jpg" },
      { title: "Solar", artist: "Silva", cover: "https://plus.unsplash.com/premium_photo-1750557381510-4a5d131d180d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ]
  });



  /* NOVA ROTA: Página de Explorar */
  router.get("/explorar", function (req, res) {
    res.render("explorar", {
      title: "Explorar Gêneros - Harmony Hub",
      pageTitle: "Explorar",
      genres: [
        { name: "Rock", icon: "🎸", description: "Do clássico ao indie, sinta a energia das guitarras." },
        { name: "Jazz", icon: "🎷", description: "Improviso e sofisticação para os seus ouvidos." },
        { name: "Eletrônica", icon: "🎧", description: "Batidas envolventes para qualquer momento." },
        { name: "MPB", icon: "🇧🇷", description: "A riqueza da música popular brasileira." },
        { name: "Hip Hop", icon: "🎤", description: "Ritmo, poesia e cultura urbana." },
        { name: "Clássica", icon: "🎻", description: "A beleza eterna das grandes composições." }
      ]
    });
  });
});

module.exports = router;
