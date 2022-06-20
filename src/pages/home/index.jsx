import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import './home.css'

export const Home = () => {

    const [movies, setMovies] = useState([])

    async function fetchMovies(){        
        const res = await fetch('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies')
        setMovies(await res.json())
        return
    }

    useEffect(() => {
        fetchMovies()
    }, [])


    return (
        <>
        <h1>Selecione o filme</h1>
        <main>
        {
             Array.isArray(movies) && movies.map(movie => (
                <div key={movie.id}>
                <Link to={`/sessoes/${movie.id}`}>
                    <img src={movie.posterURL} alt="movie poster"/>
                </Link>
                </div>
             ))
            
        }
        </main>
        </>
    )

}