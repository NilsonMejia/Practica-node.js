import * as usersServices from '../services/usersServices.js';



export const getObtenerTodosLosUsuarios = async( req, res, next) => {
   
      try {
        
        const resultUsuarios = await usersServices.getAllUsers();
        res.json(resultUsuarios);
        
      } catch (err) {
        //res.status(500).json({error: err.message})
        return next(err);
        
      }

}


export const getObtenerPorEmail = async( req, res, next) => {
   
      try {
        const {email}= req.params;
        const resultPorEmail = await usersServices.getUserByEmail(email);
        res.json(resultPorEmail);
        
      } catch (err) {
        //res.status(500).json({error: err.message})
        return next(err);
        
      }

}

export const getObtenerPorNombre = async( req, res, next) => {
   
      try {
        const {nombre}= req.params;
        const resultPorNombre = await usersServices.getBuscarNombre(nombre);
        res.json(resultPorNombre);
        
      } catch (err) {
        //res.status(500).json({error: err.message})
        return next(err);
        
      }

}



export const deleteuser = async(req,res,next) =>{
    try {
    
     const { id_usuario } = req.params;

     const result = await eliminarUsuario(id_usuario);

    
     res.status(200).json(result);
   } catch (err) {
    // res.status(500).json({ error: err.message });
    return next(err);
   }
}