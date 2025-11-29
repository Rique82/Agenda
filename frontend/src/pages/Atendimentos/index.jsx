import { useEffect, useState } from 'react'
import { deleteAtendimento, getAtendimentos } from '../../api/atendimentos'
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { toast } from 'react-toastify'

function Atendimentos() {
    const navigate = useNavigate()
    const [atendimentos, setAtendimentos] = useState([])

    const handleUpdate = async (atendimento) => {
        navigate('/update/atendimento', { state: { atendimento } })
    }

    const handleDelete = async (id) => {
        const response = await deleteAtendimento(id)

        if (response.status !== 204) {
            toast("Erro ao deletar, tente novamente, mais tarde")
            return
        }

        setAtendimentos(atendimentos => atendimentos.filter(atendimento => atendimento.id !== id))
    }

    useEffect(() => {
        async function carregar() {
            const todosatendimentos = await getAtendimentos()
            setAtendimentos(todosatendimentos)
        }
        carregar()
    }, [])

    return (
        <main>
            <div className='atendimento-list'>
                <div>
                    <Link to={'/create/atendimento'}>
                        <button>Criar</button>
                    </Link>
                </div>
                <div className='atendimento header' key='header'>
                    <label>dia</label>
                    <label>hora</label>
                    <label>valor</label>
                    <label>concluido</label>
                </div>
                {
                    atendimentos.length == 0
                        ? <div className='atendimento'>
                            <label>Não existe nenhuma tarefa</label>
                        </div>
                        : atendimentos.map(atendimento =>
                            <div className='atendimento' key={atendimento.id}>
                                <label>{atendimento.dia}</label>
                                <label>{atendimento.hora}</label>
                                <label>{atendimento.valor}</label>
                                <label>{atendimento.concluido}</label>
                                <div className='actions'>
                                    <button
                                        type='button'
                                        onClick={() => handleUpdate(atendimento)}
                                    >Alterar</button>
                                    <button
                                        type='button'
                                        onClick={() => handleDelete(atendimento.id)}
                                    >Deleta</button>
                                </div>
                            </div>)
                }
            </div>
        </main>
    )
}

export default Atendimentos
