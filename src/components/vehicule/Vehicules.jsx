import { useContext, useEffect, useState } from "react";
import Search from "../search/Search";
import DevWeb from "./Web";
import { ContextFirstPage, ContextVehicule, ContextReload } from "../../context/context";
import { vehicule } from "./Teste";

const Vehicule = () => {
  const [Vehicule, setVehicule] = useState([]);
  const [CopyVehicule, setCopyVehicule] = useState([]);
  const [reload, setReload] = useContext(ContextReload);
  const [firstPage, setFirstPage] = useState(false);

  // Remplace la fonction getVehicule par l'utilisation des données locales
  const getVehicule = () => {
    // Simule un fetch avec les données locales
    setVehicule(vehicule);
    setCopyVehicule(vehicule);
  };

  useEffect(() => {
    getVehicule();
  }, [reload]);

  return (
    <section id="vehicule">
      <h2 className="title">Vehicules</h2>
      <ContextVehicule.Provider value={[Vehicule, setVehicule]}>
        <ContextFirstPage.Provider value={[firstPage, setFirstPage]}>
          <Search propsCopyVehicule={CopyVehicule} />
          <DevWeb />
        </ContextFirstPage.Provider>
      </ContextVehicule.Provider>
    </section>
  );
};

export default Vehicule;
