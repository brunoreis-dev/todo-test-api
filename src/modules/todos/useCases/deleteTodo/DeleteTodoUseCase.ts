import { Todo } from '@modules/todos/infra/typeorm/entities/Todo';
import {
  deleteTodo,
  findTodoById,
} from '@modules/todos/infra/typeorm/repositories/TodosRepository';
import { error, ok, Result } from '@shared/types/Result';

export type ErrorsReason = 'Todo not found' | 'Internal server error';

const deleteTodoUseCase = async (
  id: string
): Promise<Result<Todo, ErrorsReason>> => {
  const todo = await findTodoById(id);

  return deleteTodo(id)
    .then((): Result<Todo, ErrorsReason> => {
      if (!todo) {
        return error('Todo not found');
      }

      return ok(todo);
    })
    .catch(() => error('Internal server error'));
};

export { deleteTodoUseCase };
