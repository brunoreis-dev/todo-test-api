import { Todo } from '@modules/todos/infra/typeorm/entities/Todo';
import { findTodoById } from '@modules/todos/infra/typeorm/repositories/TodosRepository';
import { error, ok, Result } from '@shared/types/Result';

const getTodoUseCase = async (id: string): Promise<Result<Todo>> => {
  const todo = await findTodoById(id);

  if (!todo) {
    return error('Todo not found');
  }

  return ok(todo);
};

export { getTodoUseCase };
