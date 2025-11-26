import express, { Router } from "express"
import ControllerCliente from '../controller/clientes.js'

const router = express.Router()

// router.get('/cliente/context',  ControllerCliente.FindOne)
// router.post('/cliente/', ControllerCliente.Create)
// router.put('/cliente/', ControllerCliente.Update)
// router.delete('/cliente/', ControllerCliente.Delete)

router.post('/login', ControllerCliente.Login)

router.get('/clientes', ControllerCliente.FindAll)
router.get('/cliente/:id', ControllerCliente.FindOne)
router.post('/cliente/admin', ControllerCliente.Create)
router.put('/cliente/:id', ControllerCliente.Update)
router.delete('/cliente/:id', ControllerCliente.Delete)

export default router