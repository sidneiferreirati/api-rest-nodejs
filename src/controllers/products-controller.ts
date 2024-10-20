import { Request, Response } from "express";
import { AppError } from "../utils/app-error.js";
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

    if (name.trim().length < 5) {
      throw new AppError("Nome deve ter pelo menos 5 caracteres");
    }

    if (price < 0) {
      throw new AppError("Preço deve ser maior que 0");
    }

    response
      .status(201)
      .json(`Produto ${name} criado com sucesso! Preço: ${price} - ID: ${id}`);
  }
}
