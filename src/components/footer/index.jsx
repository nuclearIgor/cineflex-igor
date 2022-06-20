import './footer.css'
import { useLocation } from 'react-router-dom'

export const Footer = ({movieData}) => {

    const location = useLocation()

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