import express from "express";

const PORT = 3333;

const app = express();

app.post("/products/:id", (req, res) => {
  const { id } = req.params;
  res.send(`produto ${id} criado com sucesso!`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
