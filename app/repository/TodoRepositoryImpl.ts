import Todo from "../entity/Todo";
import TodoRepository from "./TodoRepository";

class TodoRepositoryImpl implements TodoRepository {

    private _todo: Todo[] = [];

    public getTodos(): Todo[] {
        return this._todo;
    }

    public addTodo(todo: Todo): void {
        this._todo?.push(todo);
    }

    public removeTodo(id: string): void {
        // todo something
    }
}