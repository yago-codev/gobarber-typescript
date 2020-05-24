// Dependências
import { Router } from 'express';

// Módulos
import appointmentsRouter from './appointments.routes';
import usersRouter from './user.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
