import express from "express";
import { myMiddleware } from "./middlewares/my-middleware.js";

const PORT = 3333;

const app = express();

app.use(express.json());
app.use(myMiddleware);

app.get("/home", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;
  res.status(201).json(`Produto ${name} criado com sucesso! Preço: ${price}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
