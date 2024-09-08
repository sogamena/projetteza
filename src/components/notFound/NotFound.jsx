import { Link } from "react-router-dom"

const NotFound = ()=>{
    return (
        <section id="notfound">
            <h2>Page Not Found</h2>
            <Link to={"/"}>aller à la page d'Accueil</Link>
        </section>
    )
}
export default NotFound