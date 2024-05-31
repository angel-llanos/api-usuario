const {request, response} = require("express");
const { usuarios } = require("../usuarios")

const getUsuarios = (req = request, res = response)=>{


    return res.json({
        ok:true,
        statuscode: 200,
        Ususarios:usuarios
    })

}

const getUsuarioById = (req, res)=>{
    
    let id = parseInt(req.params.id);

    let usuariobuscar = "";

    usuariobuscar = usuarios.find((usuario)=>{
        return usuario.id === id;

    })
    if (usuariobuscar){
        return res.json({
            oka:true,
            statuscode:200,
            usuariobuscar
        })
    }else{
        return res.json({
            oka:true,
            statuscode:404,
            msg: "no hay usuario con ese id"
        })
    }

}

module.exports = {
    getUsuarios,
    getUsuarioById
}