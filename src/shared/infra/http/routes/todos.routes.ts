import { createTodoController } from '@modules/todos/useCases/createTodo/CreateTodoController';
import { deleteTodoController } from '@modules/todos/useCases/deleteTodo/DeleteTodoController';
import { getTodoController } from '@modules/todos/useCases/getTodo/GetTodoController';
import { listTodosController } from '@modules/todos/useCases/listTodos/ListTodosController';
import { updateTodoCompletedController } from '@modules/todos/useCases/updateTodoCompleted/UpdateTodoCompletedController';
import { Request, Response } from 'express';
import { Router } from 'express';

const todosRoutes = Router();

todosRoutes.post('/', async (req: Request, res: Response) =>
  createTodoController(req, res)
);

todosRoutes.get('/', async (req: Request, res: Response) =>
  listTodosController(req, res)
);

todosRoutes.get('/:id', async (req: Request, res: Response) =>
  getTodoController(req, res)
);

todosRoutes.patch('/:id', async (req: Request, res: Response) =>
  updateTodoCompletedController(req, res)
);

todosRoutes.delete('/:id', async (req: Request, res: Response) =>
  deleteTodoController(req, res)
);

export { todosRoutes };
