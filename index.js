const express = require("express");
const app = express();
require("dotenv").config();
const championsData = require('./data/champions.json')
const port = process.env.PORT || 3000; // Escolha a porta que desejar

// Rota de exemplo
app.get("/api/champions", (req, res) => {
  const name =  req.url.split("champions?")[1];
  console.log(name)

  if (name) {
    const nomeCampeao = name.toLowerCase();
    const campeaoEncontrado = championsData.find(campeao => campeao.name.toLowerCase() === nomeCampeao);

    if (campeaoEncontrado) {
      return res.json(campeaoEncontrado);
    } else {
      return res.json({ error: 'Campeão não encontrado' }, { status: 404 });
    }
  }

  return res.json(championsData);
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`O servidor está ouvindo na porta ${port}`);
});
