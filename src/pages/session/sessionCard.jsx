import { Link } from "react-router-dom";
import './sessionCard.css'

export const SessionCard = ({day}) => {
    const {weekday, date, showtimes} = day

    return (
        <>
        <h4>{weekday} - {date}</h4>
        {Array.isArray(showtimes) && showtimes.map(time => (
            <Link key={time.id} to={`/assentos/${time.id}`}>
                <button>{time.name}</button>
            </Link>    
        ))}
        </>
    )

}