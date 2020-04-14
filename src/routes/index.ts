import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ messagem: 'Hello' }));

export default routes;
