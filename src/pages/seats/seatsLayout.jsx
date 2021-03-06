export const SeatsLayout = ({sessionData, handleSeatSelection}) => {
    return (
        <>
        <main>
        {Array.isArray(sessionData.seats) && sessionData.seats.map(seat => (
            <div key={seat.id}
            onClick={() => handleSeatSelection(seat)}
            className={
                `seat-display 
                ${seat.isAvailable? "" : "indisponivel"}
                ${seat.temporarySelect? "selecionado" : ""}`}
                >
                {seat.name}
        </div>
        ))}
    </main>
    <div className="seat-info-container">
        <div className="seat-info">
            <div className="seat-display selecionado"></div>
            <p>Selecionado</p>
        </div>

        <div className="seat-info">
            <div className="seat-display"></div>
            <p>Disponível</p>
        </div>

        <div className="seat-info">
            <div className="seat-display indisponivel"></div>
            <p>Indisponível</p>
        </div>
        </div>
        </>
    )
}