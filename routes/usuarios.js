const {Router} = require('express')
const { getUsuarios, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios')

const router = Router()


router.get('/', getUsuarios )

router.put('/:id', usuariosPut )

router.post('/', usuariosPost )

router.patch('/', usuariosPatch)

router.delete('/', usuariosDelete )



module.exports = router