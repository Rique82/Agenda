import express, { Router } from "express"
import ControllerUser from '../controller/clientes.js'

const router = express.Router()

// router.get('/user/context',  ControllerUser.FindOne)
// router.post('/user/', ControllerUser.Create)
// router.put('/user/', ControllerUser.Update)
// router.delete('/user/', ControllerUser.Delete)

router.post('/login', ControllerUser.Login)

router.get('/users', ControllerUser.FindAll)
router.get('/user/:id', ControllerUser.FindOne)
router.post('/user/admin', ControllerUser.Create)
router.put('/user/:id', ControllerUser.Update)
router.delete('/user/:id', ControllerUser.Delete)

export default router