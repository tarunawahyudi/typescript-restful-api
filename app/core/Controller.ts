class Controller {
    protected _request: unknown;
    protected _response: unknown;

    public constructor(request: unknown, response: unknown) {
        this._request = request;
        this._response = response;
    }
}

export default Controller;