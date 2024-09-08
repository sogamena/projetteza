import { NavLink, Outlet } from "react-router-dom"

const Apropos = ()=>{
    return (
        <section id="apropos">
            <h2 className="title">A propos</h2>
          
            <Outlet/>
            
        </section>
    )
}
export default Apropos