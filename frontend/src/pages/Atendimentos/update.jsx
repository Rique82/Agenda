import { useEffect, useState } from "react"
import { updateAtendimento } from "../../api/atendimentos";
import { useLocation, useNavigate } from "react-router-dom";
import './styles.css'
import { toast } from "react-toastify";

export default function UpdateAtendimento() {
    const navigate = useNavigate()
    const [atendimento, setAtendimento] = useState({
        dia: '',
        hora: '',
        valor: '',
        concluido: false
    })
   
    const location = useLocation()
    const { atendimento: prevAtendimento } = location.state

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAtendimento({
            ...atendimento,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
       
        setAtendimento(prevAtendimento)
    }

    const handleSave = async (e) => {
        e.preventDefault()
       
        const response = await updateAtendimento(prevAtendimento.id, atendimento)

        if (response.status === 200) {
            navigate('/atendimentos')
            toast("Atendimento alterado com sucesso")
        } else {
            toast("Erro ao criar Atendimento")
            console.log(response)
        }
    }

   
    useEffect(() => {
        setAtendimento(prevAtendimento)
    }, [])

    return (
        <div className="form">
            <form>
                <div>
                    <label>dia: </label>
                    <input type="text" name="dia" id='dia' value={atendimento.dia} onChange={handleChange} />
                </div>
                <div>
                    <label>hora: </label>
                    <input type="text" name="hora" id='hora' value={atendimento.hora} onChange={handleChange} />
                </div>
                <div>
                    <label>valor: </label>
                    <input type="text" name="valor" id='valor' value={atendimento.valor} onChange={handleChange} />
                </div>
                <div>
                    <label>concluido: </label>
                    <input type="text" name="concluido" id='concluido' value={atendimento.concluido} onChange={handleChange} />
                </div>
                <div className="actions">
                    <button
                        type="reset"
                        onClick={handleReset}
                    >Limpar</button>
                    <button
                        type="submit"
                        onClick={handleSave}
                    >Enviar</button>
                </div>
            </form>
        </div>
    )
}