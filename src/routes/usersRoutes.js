import {Router} from 'express';



import * as usersController from '../Controllers/usersControllers.js';
import { createUserValidators,deleteUsuario,runValidations } from '../Middlewares/validator.js';

const router = Router();

router.get('/', usersController.getObtenerTodosLosUsuarios);


router.get('/buscarPorEmail/:email', usersController.getObtenerPorEmail);

router.get('/buscarPorNombre/:nombre', usersController.getObtenerPorNombre);

router.delete('/:id_usuario', runValidations(deleteUsuario), usersController.deleteuser)

router.post('/',runValidations(createUserValidators), usersController.postCrearUsuario);


router.put('/:id_usuario', usersController.putActualizar)
