import { Todo } from '@modules/todos/infra/typeorm/entities/Todo';
import { createTodo } from '@modules/todos/infra/typeorm/repositories/TodosRepository';

const createTodoUseCase = async (name: string): Promise<Todo> => {
  const todo = await createTodo(name);

  return todo;
};

export { createTodoUseCase };
