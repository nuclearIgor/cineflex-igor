import { useNavigate, useLocation } from 'react-router-dom'
import './header.css'

export const Header = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <header>
                <h1 className='header'>
                    {location.pathname !== '/' && <span onClick={handleNavigate}>voltar</span>}
                    CINEFLEX
                </h1>
      
        </header>
    )
}