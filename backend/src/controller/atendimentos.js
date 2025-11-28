import ServiceAtendimento from "../service/Atendimentos.js"

class ControllerAtendimento {

    async FindAllCliente(req, res) {
        try {
            const idCliente = req.params.idCliente
            const Resultado = await ServiceAtendimento.FindAll(idCliente)
            console.log(Resultado)
            res.status(200).send({ Resultado })

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }

    async FindAll(_, res) {
        try {

            const atendimentos = await ServiceAtendimento.FindAll()
            console.log(atendimentos)
            res.status(200).send({ atendimentos })

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }

    async FindOne(req, res) {
        try {
            const id = req.params.id || req.headers?.atendimento?.id

            const atendimento = await ServiceAtendimento.FindOne(id)
            res.status(200).send({ atendimento })

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }

    async Create(req, res) {
        try {
            
            const { dia, hora, valor, concluido } = req.body
            await ServiceAtendimento.Create(dia, hora, valor, concluido)
            res.status(201).send("atendimento criado com sucesso")

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }

    async Update(req, res) {
        try {

            const id = req.params.id || req.headers?.atendimento?.id

            const { dia, hora, valor, concluido } = req.body
            ServiceAtendimento.Update(id, dia, hora, valor, concluido)
            res.status(200).send()

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }
    async Delete(req, res) {
        try {
            const id = req.params.id || req.headers?.atendimento?.id
            await ServiceAtendimento.Delete(id)
            res.status(204).send("atendimento deletado com sucesso")

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }

}

export default new ControllerAtendimento()