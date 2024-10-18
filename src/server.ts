import express from "express";

const PORT = 3333;

const app = express();

app.use(express.json());

app.post("/products", (req, res) => {
  const { name, price } = req.body;
  res.send(`Produto ${name} criado com sucesso! Preço: ${price}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
