import { Request, Response } from 'express';
import { deleteTodoUseCase, ErrorsReason } from './DeleteTodoUseCase';

const errorStatus = (reason: ErrorsReason): number => {
  switch (reason) {
    case 'Todo not found':
      return 404;
    case 'Internal server error':
      return 500;
  }
};

const deleteTodoController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  const result = await deleteTodoUseCase(id);

  switch (result.type) {
    case 'Result/Ok':
      return res.status(200).json(result.data);
    case 'Result/Error':
      const statusCode = errorStatus(result.reason);
      return res.status(statusCode).json(result.reason);
  }
};

export { deleteTodoController };
