// LOGICA DEL NEGOCIO

import { getUserService } from './user.service';

export const getAllUserModel = () => {
  return 'Get all user model';
};

export const getOneUserModel = (id: string) => {
  const userdb = getUserService('1');
  return `Get one user model ${id}`;
};

export const createUserModel = (user: any) => {
  // NOTICIA notificar a todos los demas usuarios que hay un nuevo usuario

  return `Create user model ${user}`;
};

// TORNEOS

export const getAllTournamentModel = (userId: string) => {
  const userdb = getUserService('1');
};
