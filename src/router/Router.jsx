import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Apropos from "../components/apropos/Apropos"
import Contact from "../components/contact/Contact"
import NotFound from "../components/notFound/NotFound"
import Texte1 from "../components/apropos/Texte1"
import Texte2 from "../components/apropos/Texte2"
import Texte3 from "../components/apropos/Texte3"
import Detail from "../components/vehicule/Detail"
import Vehicule from "../components/vehicule/Vehicules"

const AppRouter = ()=>{
   
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="vehicule" element={<Vehicule />} />
            <Route path="vehicule/info/:id" element={<Detail />} /> {/* Flattened */}
            <Route path="apropos" element={<Apropos />}>
                <Route index element={<Texte1 />} />
                <Route path="texte1" element={<Texte1 />} />
                <Route path="texte2" element={<Texte2 />} />
                <Route path="texte3" element={<Texte3 />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
    )
}
export default AppRouter