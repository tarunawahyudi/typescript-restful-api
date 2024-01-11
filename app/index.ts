import http from 'http';
import Controller from './core/Controller';
import TodoController from './controller/TodoController';

function requestListener(req: any, res: any) {
   
}

let controller: Controller;
controller = new TodoController(requestListener);

http.createServer(requestListener).listen(8080);