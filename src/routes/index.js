import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { Seats } from "../pages/seats"
import { Session } from "../pages/session"
import { Sucesso } from "../pages/sucesso"

const Router = () => {
    return (

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sessoes/:idFilme" element={<Session/>} />
            <Route path="/assentos/:idSessao" element={<Seats/>} />
            <Route path="/sucesso" element={<Sucesso/>} />

        </Routes>

    )
}

export default Router