import { useState } from "react"
import { createAtendimento } from "../../api/atendimentos";
import { useNavigate } from "react-router-dom";
import './styles.css'
import { toast } from "react-toastify";

const INITIAL_STATE = {
    dia: '',
    hora: '',
    valor: '',
    concluido: false
}

export default function CreateAtendimento() {
    const navigate = useNavigate()
    const [atendimento, setAtendimento] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAtendimento({
            ...atendimento,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        setAtendimento(INITIAL_STATE)
    }

    const handleSave = async (e) => {
        e.preventDefault()
        // seria idela validar os valores do objeto antes de enviar
        const response = await createAtendimento(atendimento)

        if (response.status === 201) {
            toast("atendimentos criado com sucesso")
            navigate('/atendimentos')
        } else {
            toast("Erro ao criar Usuário")
            console.log(response)
        }
    }

    return (
        <div className="form-container">
         <form className="form-box">

        <div className="form-group">
            <label>Dia:</label>
            <input
                type="text"
                name="dia"
                id="dia"
                value={atendimento.dia}
                onChange={handleChange}
            />
        </div>

        <div className="form-group">
            <label>Hora:</label>
            <input
                type="text"
                name="hora"
                id="hora"
                value={atendimento.hora}
                onChange={handleChange}
            />
        </div>

        <div className="form-group">
            <label>Valor:</label>
            <input
                type="text"
                name="valor"
                id="valor"
                value={atendimento.valor}
                onChange={handleChange}
            />
        </div>

        <div className="form-group">
            <label>Concluído:</label>
            <input
                type="text"
                name="concluido"
                id="concluido"
                value={atendimento.concluido}
                onChange={handleChange}
            />
        </div>

        <div className="form-actions">
            <button type="reset" onClick={handleReset} className="btn-reset">Limpar</button>
            <button type="submit" onClick={handleSave} className="btn-submit">Enviar</button>
        </div>

    </form>
</div>
    )
}