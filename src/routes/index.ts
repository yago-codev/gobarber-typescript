// Dependências
import { Router } from 'express';

// Módulos
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

export default routes;
