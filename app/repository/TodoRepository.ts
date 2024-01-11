import Todo from "../entity/Todo";

interface TodoRepository {
    getTodos: () => Todo[];
    addTodo: (todo: Todo) => void;
    removeTodo: (id: string) => void;
}

export default TodoRepository;