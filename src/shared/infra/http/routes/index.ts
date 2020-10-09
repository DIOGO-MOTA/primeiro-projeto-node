import { Router } from 'express';
import appointmentsRoutes from '@modules/appointments/infra/http/routes/appointments.route';
import usersRoutes from '@modules/users/infra/http/routes/users.route';
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.route';
import passwordRoutes from '@modules/users/infra/http/routes/password.route';

const routes = Router();

routes.use('/appointments', appointmentsRoutes);
routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/password', passwordRoutes);

export default routes;
