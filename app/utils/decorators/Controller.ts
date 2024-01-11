function Controller(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

export default Controller;