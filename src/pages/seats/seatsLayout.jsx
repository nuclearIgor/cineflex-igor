export const SeatsLayout = ({sessionData, handleSeatSelection}) => {
    return (
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
    )
}