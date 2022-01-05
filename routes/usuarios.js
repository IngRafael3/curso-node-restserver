const {Router} = require('express')
const {usuariosGet, 
      usuariosPost, 
      usuariosPut, 
      usuariosPatch, 
      usuariosDelete} = require('../controllers/usuarios');
const router = Router();

 //****SERVIDOR EXPRESS */
 router.get('/', usuariosGet  )
router.put('/:id', usuariosPut)  //se coloca :id, porque es como se va a buscar y actualizar
router.post('/', usuariosPost )
router.delete('/', usuariosDelete)
router.patch('/', usuariosPatch)








module.exports = router;