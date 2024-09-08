import { useContext, useEffect, useState } from "react";
import { ContextFirstPage, ContextVehicule, ContextReload } from "../../context/context";
import { Link } from "react-router-dom";
import Paginate from "./Paginate";

const DevWeb = () => {
    const [Vehicule] = useContext(ContextVehicule);
    const [reload, setReload] = useContext(ContextReload);

    const [firstPage, setFirstPage] = useContext(ContextFirstPage);

    console.log(Vehicule);

    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(6);
    const lastIndex = currentPage * dataPerPage;
    const firstIndex = lastIndex - dataPerPage;
    const Data = Vehicule.slice(firstIndex, lastIndex);

    useEffect(() => {
        setCurrentPage(1);
    }, [firstPage]);

    return (
        <div className="dev-web">
            <div className="container">
                {
                    Data.map((vehicule) => (
                        <div className="box-content" key={vehicule.id}>
                            <img src={`/images/image/${vehicule.image}`} alt={'image-' + vehicule.title} />
                            <div className="left">
                                <h4>{vehicule.make}</h4>
                                <h5>{vehicule.prix}</h5>
                            </div>
                            <Link to={`/vehicule/info/${vehicule.id}`}>detail</Link>
                        </div>
                    ))
                }
            </div>
            <Paginate 
                propsNbrVehicule={Vehicule.length} 
                propsDataPerPage={dataPerPage} 
                propsSetCurrentPage={setCurrentPage}  
                propsCurrentPage={currentPage}
            />
        </div>
    );
};

export default DevWeb;


