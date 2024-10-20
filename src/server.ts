import express, { Request, Response, NextFunction } from "express";
import { routes } from "./routes/index.js";
import { AppError } from "./utils/AppError.js";
const PORT = 3333;

const app = express();

app.use(express.json());
app.use(routes);

app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }
  response.status(500).json({ message: error.message });
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
