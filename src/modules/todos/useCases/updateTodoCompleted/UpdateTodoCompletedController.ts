import { Request, Response } from 'express';
import {
  ErrorsReason,
  updateTodoCompletedUseCase,
} from './UpdateTodoCompletedUseCase';

const errorStatus = (reason: ErrorsReason): number => {
  switch (reason) {
    case 'Todo not found':
      return 404;
    case 'Internal server error':
      return 500;
  }
};

const updateTodoCompletedController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const { is_complete } = req.body;

  const result = await updateTodoCompletedUseCase(id, is_complete);

  switch (result.type) {
    case 'Result/Ok':
      return res.status(201).json(result.data);
    case 'Result/Error':
      const statusCode = errorStatus(result.reason);
      return res.status(statusCode).json(result.reason);
  }
};

export { updateTodoCompletedController };
