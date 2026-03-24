import {body, validationResult} from 'express-validator';

export const runValidations= (validations) => {
    return async (req,res,next)=>{
        for(const validation of  validations){
            await validation.run(req)
        }

        const errors = validationResult(req);

        if(errors.isEmpty()){
            return next();
        }
        return res.status(400).json({
            status:'error',
            errors: errors.array

        })    
    }
}

export const deleteUsuario =[

]

export const createUserValidators =[
    body('nombre').trim().notEmpty().isLength({min:3}).withMessage('El nombre es obligatorio!!!!!!'),
    body('email').trim().notEmpty().isEmail().withMessage('El email no es valido!!!'),
    body('contrasenia').isLength({min:8}).withMessage('La contraseña no es valida!!!!')

]