import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

productsRouter.post("/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  res
    .status(201)
    .json(`Produto ${name} criado com sucesso! Preço: ${price} - ID: ${id}`);
});

export { productsRouter };
