import { Request, Response } from "express";
import { AppError } from "../utils/AppError.js";
export class ProductsController {
  index(request: Request, response: Response) {
    response.status(200).json({ message: "Lista de produtos" });
  }

  create(request: Request, response: Response) {
    const { id } = request.params;
    const { name, price } = request.body;

    if (!name || !price) {
      throw new AppError("Nome e preço são obrigatórios");
    }

    response
      .status(201)
      .json(`Produto ${name} criado com sucesso! Preço: ${price} - ID: ${id}`);
  }
}
