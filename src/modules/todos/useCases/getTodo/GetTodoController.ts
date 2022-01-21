import { Request, Response } from 'express';
import { getTodoUseCase } from './GetTodoUseCase';

const getTodoController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  const result = await getTodoUseCase(id);

  switch (result.type) {
    case 'Result/Ok':
      return res.status(200).json(result.data);
    case 'Result/Error':
      return res.status(404).json(result.reason);
  }
};

export { getTodoController };
