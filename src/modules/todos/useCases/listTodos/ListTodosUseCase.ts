import { Todo } from '@modules/todos/infra/typeorm/entities/Todo';
import { listTodos } from '@modules/todos/infra/typeorm/repositories/TodosRepository';

const listTodosUseCase = async (
  is_complete: string,
  name: string
): Promise<Todo[]> => {
  const todos = await listTodos(is_complete, name);

  return todos;
};

export { listTodosUseCase };
