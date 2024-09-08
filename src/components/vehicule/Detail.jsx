import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextReload } from "../../context/context";
import { vehicule } from "./Teste"; // Importez vos données de véhicules

const Detail = () => {
  const [reload] = useContext(ContextReload);
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  const getDetailVehicule = () => {
    const vehiculeDetail = vehicule.find((v) => v.id === id);
    if (vehiculeDetail) {
      setDetail(vehiculeDetail);
    } else {
      setDetail(null);
    }
  };

  useEffect(() => {
    getDetailVehicule();
  }, [reload, id]);

  return (
    <section id="vehicule-info">
      <div className="container">
        {detail ? (
          <>
            {/* Affichage de l'image */}
            <img
              src={`/images/image/${detail.image}`}
              alt={`image-${detail.title || detail.make}`}
            />
            <div className="box">
              <h2>{detail.title || detail.make}</h2>
              <p>{detail.describe}</p>
              <p><strong>Prix :</strong> {detail.prix}</p>

              {/* Affichage de toutes les spécifications */}
              <div className="specs">
                <h3>Spécifications Techniques</h3>
                <ul className="detailAuto">
                  <h2>Engine type</h2>
                  {detail.engineModel && (
                    <li><strong>Modèle du moteur :</strong> {detail.engineModel}</li>
                  )}
                  {detail.petrol && (
                    <li><strong>Type de carburant :</strong> {detail.petrol}</li>
                  )}
                  {detail.maximumOutput && (
                    <li><strong>Puissance maximale :</strong> {detail.maximumOutput}</li>
                  )}
                  {detail.maximumTorque && (
                    <li><strong>Couple maximal :</strong> {detail.maximumTorque}</li>
                  )}
                  {detail.NumberofCylinder && (
                    <li><strong>Nombre de cylindres :</strong> {detail.NumberofCylinder}</li>
                  )}
                  {detail.Displacement && (
                    <li><strong>Cylindrée :</strong> {detail.Displacement} cc</li>
                  )}
                  {detail.Bore && (
                    <li><strong>Alésage :</strong> {detail.Bore} mm</li>
                  )}
                  {detail.Stroke && (
                    <li><strong>Course :</strong> {detail.Stroke} mm</li>
                  )}
                  {detail.CompressionRatio && (
                    <li><strong>Rapport de compression :</strong> {detail.CompressionRatio}</li>
                  )}
                  {detail.LubricationMethod && (
                    <li><strong>Méthode de lubrification :</strong> {detail.LubricationMethod}</li>
                  )}
                  {detail.LubricantCapacity && (
                    <li><strong>Capacité de lubrifiant :</strong> {detail.LubricantCapacity}</li>
                  )}
                  {detail.StartingMethod && (
                    <li><strong>Méthode de démarrage :</strong> {detail.StartingMethod}</li>
                  )}
                  {detail.SpeciChangeficFuelConsumption && (
                    <li><strong>Consommation spécifique de carburant :</strong> {detail.SpeciChangeficFuelConsumption}</li>
                  )}
                  {detail.OilVolume && (
                    <li><strong>Volume d'huile :</strong> {detail.OilVolume}</li>
                  )}
                  {detail.Coolingsystemfillingquantity && (
                    <li><strong>Capacité du système de refroidissement :</strong> {detail.Coolingsystemfillingquantity}</li>
                  )}
                  {detail.Thermostat && (
                    <li><strong>Thermostat :</strong> {detail.Thermostat}</li>
                  )}
                  <h2>Cluttch</h2>
                  {detail.Clutch && (
                    <li><strong>Embrayage :</strong> {detail.Clutch}</li>
                  )}
                  <h2>Transmission</h2>
                  {detail.Transmission && (
                    <li><strong>Transmission :</strong> {detail.Transmission}</li>
                  )}
                  <h2>Propeller Shaft</h2>
                  {detail.PropellerShaft && (
                    <li><strong>Arbre de transmission :</strong> {detail.PropellerShaft}</li>
                  )}
                  <h2>Chassis</h2>
                  {detail.FrameType && (
                    <li><strong>Type de châssis :</strong> {detail.FrameType}</li>
                  )}
                  {detail.FrontSuspension && (
                    <li><strong>Suspension avant :</strong> {detail.FrontSuspension}</li>
                  )}
                  {detail.RearSuspension && (
                    <li><strong>Suspension arrière :</strong> {detail.RearSuspension}</li>
                  )}
                  {detail.FuelTankCapacity && (
                    <li><strong>Capacité du réservoir :</strong> {detail.FuelTankCapacity} litres</li>
                  )}
                  <h2>Brakes</h2>
                  {detail.FrontBrake && (
                    <li><strong>Frein avant :</strong> {detail.FrontBrake}</li>
                  )}
                  {detail.RearBrake && (
                    <li><strong>Frein arrière :</strong> {detail.RearBrake}</li>
                  )}
                  <h2>Wheels & Tyres</h2>
                  {detail.TyreRimSize && (
                    <li><strong>Taille des pneus :</strong> {detail.TyreRimSize}</li>
                  )}
                  {detail.TyresType && (
                    <li><strong>Type de pneus :</strong> {detail.TyresType}</li>
                  )}
                  {detail.TyresPressure && (
                    <li><strong>Pression des pneus :</strong> {detail.TyresPressure} PSI</li>
                  )}

                  <h2>Electronics</h2>
                  {detail.OperatingVoltage && (
                    <li><strong>Tension de fonctionnement :</strong> {detail.OperatingVoltage}</li>
                  )}
                  <h2>Instrument Panel</h2>
                  {detail.Battery && (
                    <li><strong>Batterie :</strong> {detail.Battery}</li>
                  )}
                  <h2>Seating Capacity</h2>
                  {detail.Electronics && (
                    <li><strong>Électronique :</strong> {detail.Electronics}</li>
                  )}
                  <h2>Wheel Base</h2>
                  {detail.InstrumentPanel && (
                    <li><strong>Tableau de bord :</strong> {detail.InstrumentPanel}</li>
                  )}
                  <h2>Wheel Track</h2>
                  {detail.SeatingCapacity && (
                    <li><strong>Capacité des sièges :</strong> {detail.SeatingCapacity}</li>
                  )}
                  <h2>Overall Length</h2>
                  {detail.WheelBase && (
                    <li><strong>Empattement :</strong> {detail.WheelBase}</li>
                  )}
                  <h2>Overall Width</h2>
                  {detail.WheelTrack && (
                    <li><strong>Voie :</strong> {detail.WheelTrack}</li>
                  )}
                  <h2>Overall Height</h2>
                  {detail.OverallLength && (
                    <li><strong>Longueur totale :</strong> {detail.OverallLength}</li>
                  )}
                  <h2>Weight Kgs</h2>
                  {detail.OverallWidth && (
                    <li><strong>Largeur totale :</strong> {detail.OverallWidth}</li>
                  )}
                  {detail.OverallHeight && (
                    <li><strong>Hauteur totale :</strong> {detail.OverallHeight}</li>
                  )}
                  {detail.WeightKgs && (
                    <li><strong>Poids :</strong> {detail.WeightKgs}</li>
                  )}
                  <h2>Performance</h2>
                  {detail.Maximumdrivingspeed && (
                    <li><strong>Vitesse maximale :</strong> {detail.Maximumdrivingspeed}</li>
                  )}
                  {detail.Gradeability && (
                    <li><strong>Pente maximale :</strong> {detail.Gradeability}</li>
                  )}
                  {detail.TurningCircle && (
                    <li><strong>Cercle de braquage :</strong> {detail.TurningCircle}</li>
                  )}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <p>Véhicule non trouvé</p>
        )}
      </div>
    </section>
  );
};

export default Detail;
