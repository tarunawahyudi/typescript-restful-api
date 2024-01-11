import http from 'http';
import Controller from './core/Controller';
import TodoController from './controller/TodoController';


const controller = new Controller();
const todoController = new TodoController();

http.createServer((request, response) => {
    controller.setRequest(request);
    controller.setResponse(response);

    if (request.url === '/todo' && request.method === 'GET') {
        todoController.get();
    }
}).listen(8080);