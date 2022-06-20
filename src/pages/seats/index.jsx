import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SeatForm } from "./form"
import { SeatsLayout } from "./seatsLayout"
import { Footer } from "../../components/footer"
import './seats.css'

export const Seats = () => {

    const {idSessao} = useParams()
    const [sessionData, setSessionData] = useState({})
    const [loading, setLoading] = useState(false)
    const [selectedSeats, setSelectedSeats] = useState([])

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
            setSelectedSeats([...selectedSeats, {id: seat.id, name: seat.name}])

            const otherSeats = sessionData.seats.filter(item => item.id !== seat.id)
            
            seat['temporarySelect'] = true
            setSessionData({...sessionData, seats: [...otherSeats, seat].sort((prev, cur) => prev.name - cur.name) })
            return
        }

        // retira a seleção temporaria do assento
        if(seat.temporarySelect === true) {
            const otherSeats = sessionData.seats.filter(item => item.id !== seat.id)
            
            const stillSelected = selectedSeats.filter(item => item !== seat.id) 
            setSelectedSeats(stillSelected)

            seat['temporarySelect'] = undefined
            setSessionData({...sessionData, seats: [...otherSeats, seat].sort((prev, cur) => prev.name - cur.name) })


            return
        }

    }

    const formData = {
        movie: sessionData.movie?.title,
        day: sessionData.day?.date,
        time: sessionData.name,
        selectedSeats: selectedSeats
    }
    
    return (
        <>
            <SeatsLayout sessionData={sessionData} handleSeatSelection={handleSeatSelection}/>
            <SeatForm formData={formData}/>
            <Footer movieData={{
                title: sessionData.movie?.title,
                poster: sessionData.movie?.posterURL,
                day: sessionData.day?.weekday,
                time: sessionData.name}}/>
        </>
    )
}