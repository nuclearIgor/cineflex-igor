import { useEffect } from "react"
import { useLocation } from "react-router-dom";
import './sucesso.css'

export const Sucesso = (props) => {

    const {state} = useLocation()

    useEffect(() => {
        console.log(state);
    }, [state])

    return (
        <>
            <div className="page-container">
                <h1>Pedido feito com sucesso!</h1>

                <div className="info-block">
                    <p>Filme e sessão</p>
                    <p>{state.movie}</p>
                    <p>{state.day} {state.time}</p>
                </div>

                <div className="info-block">
                    <p>Ingressos</p>
                    {Array.isArray(state.selectedSeats) && state.selectedSeats.map(seat =>
                         <p key={seat.id}>Assento {seat.name}</p>)}
                </div>

                <div className="info-block">
                    <p>Comprador</p>
                    <p>Nome: {state.name}</p>
                    <p>CPF: {state.cpf}</p>
                </div>
            </div>
        </>
    )
}