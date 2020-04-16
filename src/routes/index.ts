import { Router } from 'express';
import appointmentsRoutes from './appointments.route';

const routes = Router();

routes.use('/appointments', appointmentsRoutes);

export default routes;
