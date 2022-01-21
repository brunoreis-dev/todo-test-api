import { getRepository, Repository } from 'typeorm';
import { Todo } from '../entities/Todo';

const createTodo = async (name: string): Promise<Todo> => {
  const repository = getRepository(Todo);

  const todo = repository.create({ name });

  await repository.save(todo);

  return todo;
};

const listTodos = async (
  is_complete: string,
  name: string
): Promise<Todo[]> => {
  const repository = getRepository(Todo);

  if (is_complete === 'true' && !name) {
    const todos = repository
      .createQueryBuilder()
      .orderBy('created_at', 'DESC')
      .where('is_complete = :is_complete', { is_complete: true })
      .getMany();

    return todos;
  }

  if (name && (is_complete === 'false' || !is_complete)) {
    const todos = repository
      .createQueryBuilder()
      .orderBy('created_at', 'DESC')
      .where('name ilike :name', { name: `%${name}%` })
      .getMany();

    return todos;
  }

  if (name && is_complete === 'true') {
    const todos = await repository
      .createQueryBuilder()
      .orderBy('created_at', 'DESC')
      .where('name like :name', { name: `%${name}%` })
      .andWhere('is_complete = :is_complete', { is_complete: true })
      .getMany();

    return todos;
  }

  const todos = repository.find({
    order: {
      created_at: 'DESC',
    },
  });

  return todos;
};

const findTodoById = async (id: string): Promise<Todo> => {
  const repository = getRepository(Todo);

  const todo = repository.findOne(id);

  return todo;
};

const updateTodoCompleted = async (
  id: string,
  is_complete: boolean
): Promise<void> => {
  const repository = getRepository(Todo);

  await repository
    .createQueryBuilder()
    .update()
    .set({ is_complete })
    .where('id = :id')
    .setParameters({ id })
    .execute();
};

const deleteTodo = async (id: string): Promise<void> => {
  const repository = getRepository(Todo);

  await repository.delete(id);
};

export { createTodo, findTodoById, deleteTodo, listTodos, updateTodoCompleted };
