const express = require('express');
const app = express();
const port = 3000;

app.get("/naipe", (req, res) => {
    res.send("get naipe 2")
})

app.listen(port, () => {
    console.log(`isso aqui executa quando o servidor inicia na porta ${port}`)
})