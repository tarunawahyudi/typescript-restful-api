import http from 'http';
import Controller from './core/Controller';
import TodoController from './controller/TodoController';


const controller = new Controller();

http.createServer((request, response) => {
    controller.setRequest(request);
    controller.setResponse(response);
}).listen(8080);