import './footer.css'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const Footer = ({movieData}) => {

    const location = useLocation()

    useEffect(() => {
        console.log('location', location.pathname.includes('sessoes'));

        console.log('location', location.pathname.includes('assentos'));
        console.log(movieData);
    }, [location])

    return  (
        <footer>
            <div className='poster-container'>
                <img src={movieData.poster} alt="movie poster" />
            </div>
            <div className='info-container'>
                <p>{movieData.title}</p>
                {location.pathname.includes('assentos') && 
                <p>{movieData.day} {movieData.time}</p>
                }
            </div>
        </footer>
    )
}