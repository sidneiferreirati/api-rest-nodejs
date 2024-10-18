import { Router } from "express";
import { ProductsController } from "../controllers/ProductsController.js";

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.get("/", productsController.index);
productsRouter.post("/:id", productsController.create);

export { productsRouter };
