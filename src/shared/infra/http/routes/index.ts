import { Router } from 'express';
import appointmentsRoutes from '@modules/appointments/infra/http/routes/appointments.route';
import usersRoutes from '@modules/users/infra/http/routes/users.route';
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.route';

const routes = Router();

routes.use('/appointments', appointmentsRoutes);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);

export default routes;
