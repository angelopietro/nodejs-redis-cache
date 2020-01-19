import { Router } from 'express';
import PostsController from './app/controllers/PostsController';

const routes = new Router();

routes.get('/posts', PostsController.index);
routes.get('/posts/:permalink', PostsController.show);

export default routes;
