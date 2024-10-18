import express from "express";

const PORT = 3333;

const app = express();

app.post("/products", (req, res) => {
  const { page, limit } = req.query;
  res.send(`Pagina ${page} com ${limit} produtos`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
