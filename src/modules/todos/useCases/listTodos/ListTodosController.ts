import { Request, Response } from 'express';
import { listTodosUseCase } from './ListTodosUseCase';

const listTodosController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { is_complete, name } = req.query;

  const todos = await listTodosUseCase(is_complete as string, name as string);

  return res.json(todos);
};

export { listTodosController };
