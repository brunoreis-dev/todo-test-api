import { Request, Response } from 'express';
import { createTodoUseCase } from './CreateTodoUseCase';

const createTodoController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name } = req.body;

  const todo = await createTodoUseCase(name);

  return res.status(201).json(todo);
};

export { createTodoController };
