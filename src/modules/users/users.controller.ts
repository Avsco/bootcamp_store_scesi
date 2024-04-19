import { Request, Response } from 'express';
import { createUserModel, getAllUserModel, getOneUserModel } from './user.model';

// LOS CONTROLADORES SON FUNCIONES QUE SE ENCARGAN DE RECIBIR LAS PETICIONES HTTP Y DEVOLVER UNA RESPUESTA
// TAMBIEN SON PARA RECIBIR LOS DATOS DE LA PETICION Y ENVIARLOS A LOS MODELOS PARA QUE SE REALICEN LAS OPERACIONES
// TAMBIEN FORMATEAR LOS DATOS QUE RECIBIMOS

export const getAllUserController = (req: Request, res: Response) => {
  const users = getAllUserModel();

  res.json(users);
};

export const getOneUserController = (req: Request, res: Response) => {
  const { id } = req.params;

  if (id.length < 5) {
    return res.status(400).json('Invalid ID');
  }

  const user = getOneUserModel(id);

  res.json(user);
};

export const createUserController = (req: Request, res: Response) => {
  const { body } = req;

  if (!body.firstName) {
    return res.status(400).json('Name is required');
  }

  if (!body.age) {
    return res.status(400).json('Last name is required');
  }

  body.age = parseInt(body.age, 10);

  const newUser = createUserModel(body);

  res.json(newUser);
};
