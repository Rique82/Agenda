import Cliente from "../model/clientes.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
const JWT_SEGREDO = "blackdiamond"
const SALT = 10

class ServiceCliente {

    async FindAll(){
        return Cliente.findAll()
    }

    async FindOne(id){
        if(!id){
            throw new Error("favor informar o ID")
        }

        const cliente = await Cliente.findByPk(id)

        if(!cliente){
            throw new Error(`cliente ${id} não enontrado`)
        }

        return cliente
    }
    
    async Create(nome, email, senha){
        if (!nome || !email || !senha ) {
            throw new Error("Favor preencher todos os campos")
        }

        const senhaCrip = await bcrypt.hash(String(senha), SALT)

        await Cliente.create({
            nome, email, senha: senhaCrip
        })
    }

    async Update(id, nome, email, senha){
        
        const antigoCliente = await Cliente.findByPk(id)
        antigoCliente.senha = senha
        ? await bcrypt.hash(String(senha), SALT)
        : antigoCliente.senha
        
        antigoCliente.nome = nome || antigoCliente.nome
        antigoCliente.email = email || antigoCliente.email
        
        await antigoCliente.save()
    }

    async Delete(id){
        if(!id){
            throw new Error("Informar ID valido")
        }

        const cliente = await Cliente.findByPk(id)
        
        if(!cliente){
            throw new Error(`cliente ${id} não foi encontrado`)
        }

        await cliente.destroy()
    }

    async Login(email,senha){

        if(!email || !senha){
            throw new Error("email ou senha invalidos")
        }

        const cliente = await Cliente.findOne({ where: { email }} )
        console.log(cliente)
        if(
            !cliente
            || 
            !(await bcrypt.compare(String(senha), cliente.senha))){
            throw new Error("email ou senha invalidos 2")
        }

        

        return jwt.sign(
            { id: cliente.id,nome: cliente.nome}, JWT_SEGREDO, {expiresIn: 60*60})
    }

}

export default new ServiceCliente()