import { Router } from 'express';
import appointmentsRoutes from './appointments.route';
import usersRoutes from './users.route';
import sessionsRoutes from './sessions.route';

const routes = Router();

routes.use('/appointments', appointmentsRoutes);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
