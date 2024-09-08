import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <div className="container">
        <div className="home-content">
            <div className="gauche">
                 <div className="gc">
                    <img src="/images/new.png" alt="" />
                 </div>
                 <div className="gc">
                     <img src="/images/deca_pmtext 1.png" alt="" />
                 </div>
                 <div className="gc">
                    <img src="/images/Tezraftar_1.png" alt="" />
                 </div>
                 <div className="gc">
                    <img src="/images/soratra.png" alt="" />    
                 </div>
            </div>
            <div className="droite">
                <img src="/images/mot.png" alt="" />
            </div>
        </div>
        <div className="container">
          <div className="latest-content">
            <h2>Latest news</h2>
            <br />
            <hr />
            <br />
            <div className="news-content">
              <div className="cadre-new">
                <div className="cadre-new-img">
                  <img className="photo-new" src="/images/image/150cchighcabin_2.png" alt="sary" />
                </div>
                <div>
                  <h2>150cc loader HI Cabin</h2>
                </div>
              </div>
              <div className="cadre-new">
                <div className="cadre-new-img">
                  <img className="photo-new" src="/images/image/deca_pm_front.png" alt="sary" />
                </div>
                <h2>DECA</h2>
                <h3>Rs 296770</h3>
              </div>
              <div className="cadre-new">
                <div className="cadre-new-img">
                  <img className="photo-new" src="/images/image/rustamplus01.jpg" alt="sary" />
                </div>
                <h2>Rustam plus</h2>
                <h3>Rs 365000</h3>
              </div>
            </div>
            <br />
            <h2>
              <Link className="new-more btn-header" to={"/vehicule/"}>
                View more
              </Link>
            </h2>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Home;
