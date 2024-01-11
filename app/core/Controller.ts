class Controller {
    protected _request: unknown;
    protected _response: unknown;

    public setRequest(request: unknown): void {
        this._request = request;
    }

    public setResponse(response: unknown): void {
        this._response = response;
    }
}

export default Controller;