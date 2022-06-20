import { useEffect, useReducer, useState } from "react"
import {useNavigate} from 'react-router-dom'
import { OrangeButton } from "../../components/button"
import './form.css'

export const SeatForm = ({formData}) => {

    useEffect(() => {console.log(formData);}, [])

    const navigate = useNavigate()

    const [cpf, setCpf] = useState('')
    const [nome, setNome] = useState('')

    const handleCpfChange = (value) => {
        setCpf(value)
        return
    }

    const handleNomeChange = (value) => {
        setNome(value)
        return
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        let postData = {
            name: nome,
            cpf: cpf,
            ids: formData.selectedSeats.map(seat => seat.id)
        }

        let redirectData = {
            formData,
            name: nome,
            cpf: cpf
        }

        try {
            const result = await fetch('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(postData),
            })

            navigate('/sucesso', {replace: true, state: {...formData,   name: nome, cpf: cpf}})

        } catch (error) {
            alert('error')
            console.log(error);
        }

    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div>
                <label htmlFor="nome">Nome do comprador:</label>
                <input name="nome" type="text" placeholder="Digite seu nome..." onChange={e => handleNomeChange(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="cpf">CPF do comprador:</label>
                <input name="cpf" type="text" placeholder="Digite seu cpf..." onChange={e => handleCpfChange(e.target.value)}/>
            </div>


            <OrangeButton type={'submit'} text={'Reservar assento(s)'}/>
            {/* <button type="submit">Reservar assento(s)</button> */}
        </form>
    )

}