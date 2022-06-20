import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {SessionCard} from './sessionCard'
import { Footer } from "../../components/footer"
import './session.css'


export const Session = () => {
    const {idFilme} = useParams()

    const [sessionData, setSessionData] = useState([])

    async function fetchSesssion () {
        const res = await fetch(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`)
        setSessionData(await res.json())
        return
    }

    useEffect(() => {
        fetchSesssion()
    }, [])


    return (
        <>
        <h2>Selecione o horário</h2>
        {
        Array.isArray(sessionData.days) && sessionData.days.map(day => (
            <SessionCard key={day.id} day={day}/>
        ))}
        <Footer movieData={{title: sessionData.title, poster: sessionData.posterURL}}/>
        </>
        
    )
}