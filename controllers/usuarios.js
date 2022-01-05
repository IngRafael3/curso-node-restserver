const {response, request} = require('express');


const usuariosGet = (req = request,res = response)=>{

    const {q, nombre='No mame', apikey, page, limit} = req.query;   //

    res.json({  //siempre en get json se envia un objeto
          msg: 'get API - Controlador',
          q,
          nombre,
          apikey,
          page,
          limit
    })
}

const usuariosPost = (req,res = response)=>{
    
    const {nombre, edad} = req.body;
    
    res.json({  //siempre en get json se envia un objeto
          msg: 'post API - Copntrolador',
          nombre,
           edad
    })
}

const usuariosPut = (req,res = response)=>{

    const { id } = req.params;
    res.json({  //siempre en get json se envia un objeto
          msg: 'put API - Controlador',
          id
    })
}

const usuariosPatch =  (req,res= response)=>{
    res.json({  //siempre en get json se envia un objeto
          msg: 'patch API - Controlador'
    })
}

const usuariosDelete = (req,res = response)=>{
    res.json({  //siempre en get json se envia un objeto
          msg: 'delete API - Controlador'
    })
}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}