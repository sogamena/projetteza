import { useLocation, useMatch, useMatches } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRouter from "./router/Router"
import { useState } from "react"


import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { ContextReload } from "./context/context"
const App = ()=>{
    const location = useLocation()
    console.log(location);
    const [Reload,setReload] = useState(false);
    return (
        <>
        <ContextReload.Provider value={[Reload,setReload]}>
            {location.pathname !== "/not-found" && <Header/>}
            {/* <Home/> */}
            {/* <Formation/> */}
            {/* <Apropos/> */}
            {/* <Contact/> */}
            <AppRouter/>
            {location.pathname !== "/not-found" &&<Footer/>}
            <ToastContainer />
        </ContextReload.Provider>

        </>
    )
}
export default App