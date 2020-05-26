import { Router } from 'express';

import CreateSessionService from '../services/CreateSessionService';

const sessionsRoutes = Router();

sessionsRoutes.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const createSessionUser = new CreateSessionService();

    const { user, token } = await createSessionUser.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default sessionsRoutes;
