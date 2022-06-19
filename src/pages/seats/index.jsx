import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './seats.css'

export const Seats = () => {

    const {idSessao} = useParams()
    const [sessionData, setSessionData] = useState({})
    const [loading, setLoading] = useState(false)

    async function fetchSeats() {
        setLoading(true)

        const res = await fetch(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`)
        setSessionData(await res.json()) 
        
        setLoading(false)
        return
    }

    useEffect(() => { 
        fetchSeats()
    }, [])


    const handleSeatSelection = (seat) => {
        if(!seat.isAvailable){
            alert('Esse assento não está disponível')
            return
        }

        // seleciona temporariamente o assento caso este esteja disponivel e ainda nao selecionado 
        if(seat.temporarySelect === undefined && seat.isAvailable === true){
            const otherSeats = sessionData.seats.filter(item => item.id !== seat.id)
            
            seat['temporarySelect'] = true
            console.log('selected seat', seat);
            setSessionData({...sessionData, seats: [...otherSeats, seat].sort((prev, cur) => prev.name - cur.name) })
            return
        }

        // retira a seleção temporaria do assento
        if(seat.temporarySelect === true) {
            const otherSeats = sessionData.seats.filter(item => item.id !== seat.id)
            
            seat['temporarySelect'] = undefined
            console.log('selected seat', seat);
            setSessionData({...sessionData, seats: [...otherSeats, seat].sort((prev, cur) => prev.name - cur.name) })
            return
        }

    }


    return (
        <main>
            {Array.isArray(sessionData.seats) && sessionData.seats.map(seat => (
                <div key={seat.id}
                onClick={() => handleSeatSelection(seat)}
                className={
                    `seat-display 
                    ${seat.isAvailable? "" : "indisponivel"}
                    ${seat.temporarySelect? "selecionado" : ""}`}
                >{seat.name}</div>
            ))}
     </main>
    )
}