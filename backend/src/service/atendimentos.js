import Atendimento from "../model/atendimento.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
const JWT_SEGREDO = "blackdiamond"
const SALT = 10

class ServiceAtendimento {

    async FindAll(){
        return Atendimento.findAll()
    }

    async FindOne(id){
        if(!id){
            throw new Error("favor informar o ID")
        }

        const atendimento = await Atendimento.findByPk(id)

        if(!atendimento){
            throw new Error(`atendimento ${id} não enontrado`)
        }

        return atendimento
    }
    
    async Create(dia, hora, valor, concluido){
        if (!dia || !hora || !valor) {
            throw new Error("Favor preencher todos os campos")
        }
        await Atendimento.create({
            dia, hora, valor, concluido
        })
    }

    async Update(id, dia, hora, valor, concluido){

        if(!id){
            throw new Error("favor informar o ID")
        }
        
        const antigoAtendimento = await Atendimento.findByPk(id)

        antigoAtendimento.dia = dia || antigoAtendimento.dia
        antigoAtendimento.hora = hora || antigoAtendimento.hora
        antigoAtendimento.valor = valor || antigoAtendimento.valor
        antigoAtendimento.concluido = concluido || antigoAtendimento.concluido
        
        await antigoAtendimento.save()
    }

    async Delete(id){
        if(!id){
            throw new Error("Informar ID valido")
        }

        const atendimento = await Atendimento.findByPk(id)
        
        if(!atendimento){
            throw new Error(`atendimento ${id} não foi encontrado`)
        }

        await atendimento.destroy()
    }

}

export default new ServiceAtendimento()