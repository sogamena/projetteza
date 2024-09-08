import { Link, NavLink, useMatch } from "react-router-dom"

const Header = ()=>{
    const match = useMatch("/vehicule/*")
    return (
        
        <>
            {/* <img src="/images/logo.png" alt="logo" /> */}
            <nav className="navbar">
                <a></a>
                <ul className="navbar-menu">
                    <li className="navbar-item"><NavLink to={"/"} className={({isActive})=>isActive ? "active" : null}>HOME </NavLink></li>
                    <li className="navbar-item">
                        <Link   to={"vehicule/"} className={match ? "active" : ""} >VEHICULES</Link>
                    </li>
                    <li className="navbar-item"><NavLink to={"apropos"}>SERVICES</NavLink></li>
                    <li className="navbar-item"><NavLink to={"contact"}>CONTACT US</NavLink></li>
                </ul>
            </nav>
        </>
    )
}
export default Header