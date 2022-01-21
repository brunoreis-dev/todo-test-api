import { Todo } from '@modules/todos/infra/typeorm/entities/Todo';
import {
  findTodoById,
  updateTodoCompleted,
} from '@modules/todos/infra/typeorm/repositories/TodosRepository';
import { error, ok, Result } from '@shared/types/Result';

export type ErrorsReason = 'Todo not found' | 'Internal server error';

const updateTodoCompletedUseCase = async (
  id: string,
  is_complete: boolean
): Promise<Result<string, ErrorsReason>> => {
  const todo = await findTodoById(id);

  return updateTodoCompleted(id, is_complete)
    .then((): Result<string, ErrorsReason> => {
      if (!todo) {
        return error('Todo not found');
      }

      return ok('success');
    })
    .catch(() => error('Internal server error'));
};

export { updateTodoCompletedUseCase };
