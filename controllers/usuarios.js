const { response = request, request } = require('express')

const getUsuarios = (req = request, res = response) => {
    const { q, nombre, apikey = null } = req.query;

    res.json({
        msg: 'get API -controller',
        q,
        nombre,
        apikey,
    })
}


const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body
    res.json({
        msg: 'Post API - controller',
        nombre, 
        edad,
    })
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params
    res.json({
        msg: 'Put API - controller',
        id,
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - controller'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - controller'
    })
}


module.exports = {
    getUsuarios,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}