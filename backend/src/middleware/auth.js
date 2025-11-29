import jwt from "jsonwebtoken"
import ServiceCliente from "../service/clientes.js"

const JWT_SEGREDO = "blackdiamond"

export default function authMiddleware(roles = []) {
    return async (req, res, next) => {
        try {

        const token = req.headers['authorization']
        

        if (!token) {
            throw new Error("não pode acessar")
        }

        const decoded = jwt.verify(token.split(' ')[1], JWT_SEGREDO)

        const cliente = await ServiceCliente.FindOne(decoded.id)

        console.log(cliente)

        if(roles.length && !roles.includes(cliente.permissao)){
            throw new Error("voce nao tem permissao para realizar esta ação")
        }
        req.headers.cliente = cliente
        console.log(decoded)
        next()

    } catch (error) {

        res.status(403).send({
            data: null,
            msg: error.message,
            error: true
        })

    }
    }
}