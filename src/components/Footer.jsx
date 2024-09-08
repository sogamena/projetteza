import { Link, NavLink } from "react-router-dom"

const Footer = ()=>{
    return (
        <>
        <div className="container">
          <footer>
            <div className="d-flex">
              <div className="col-5">
               
                <br />
                <h4>CONCTACT</h4>
                <br />
                <ul className="siege-social">
                  <li>
                    {/* <img className="ico" src={tel} alt="" /> */}
                    <button
                    className="btn-email"
                    //   onClick={handleWhatsAppClick}
                    >
                       000 00 000 00
                    </button>
                   
                  </li>
                  <li>
                    {/* <img className="ico" src={mess} alt="" /> */}
                    <button
                    className="btn-email"
                    //   onClick={handleEmailClick}
                    >
                      email.mg@hotmail.com
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <h4>MENU</h4>
                <ul
                  style={{
                    marginTop: "20px",
                    fontWeight: "lighter",
                    lineHeight: "1.5",
                  }}
                >
                   <li><Link to={"/"}>HOME </Link></li>
                    <li>
                        <Link  to={"vehicule/"}  >VEHICULES</Link>
                    </li>
                    <li><Link to={"apropos"}>SERVICES</Link></li>
                    <li><Link to={"contact"}>CONTACT US</Link></li>
                </ul>
              </div>
              <div
                className="d-flex"
                style={{ flexDirection: "column", alignItems: "end" }}
              >
                <h4>FOLLOW US</h4>
                
              </div>
            </div>
            <br />
            <hr />
            <br />
            <p style={{ textAlign: "center" }}>
              {" "}
              © 2024 copyright, Tous droits réservés.
            </p>
          </footer>
        </div>
      </>
    )
}
export default Footer