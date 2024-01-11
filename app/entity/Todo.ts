class Todo {
    private _id: string = '';
    private _name: string = '';
    private _isComplete: boolean = false;

    public getId(): string {
        return this._id;
    }

    public setId(id: string): void {
        this._id = id;
    }

    public getName(): string {
        return this._name;
    }

    public setName(name: string): void {
        this._name = name;
    }

    public getIsComplete(): boolean {
        return this._isComplete;
    }

    public setIsComplete(isComplete: boolean): void {
        this._isComplete = isComplete;
    }
}

export default Todo;