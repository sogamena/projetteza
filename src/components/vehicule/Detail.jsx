import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextReload } from "../../context/context";
import { vehicule } from "./Teste";

const Detail = () => {
    const [reload] = useContext(ContextReload); // Utilisation du contexte pour le rechargement
    const { id } = useParams(); // Récupération de l'ID depuis les paramètres de l'URL
    const [detail, setDetail] = useState({}); // État pour stocker le détail du véhicule

    // Fonction pour obtenir les détails du véhicule via l'ID
    const getDetailVehicule = () => {
        const vehiculeDetail = vehicule.find(v => v.id === id); // Recherche du véhicule correspondant à l'ID
        if (vehiculeDetail) {
            setDetail(vehiculeDetail); // Mise à jour de l'état avec les détails du véhicule
        }
    };

    useEffect(() => {
        getDetailVehicule(); // Appel de la fonction pour obtenir les détails à chaque changement de `reload` ou `id`
    }, [reload, id]);

    return (
        <section id="vehicule-info">
            <div className="container">
                {detail ? (
                    <>
                       
                        <div className="box">
                            <h2>{detail.make || "Marque inconnue"}</h2>
                            {/* Affichage des détails supplémentaires si disponibles */}
                            {detail.engineModel && (
                                <div className="specsDetails">
                               
                                    {/* Commence */}

                                  <div className="image-container">
                                      <img src={`/images/image/${detail.image}`} alt={`image-${detail.title || 'Vehicule'}`} />
                                  </div>
                                  <div class="specs-container">
                                      <h1>Spécifications Techniques</h1>
                                      
                                      <div class="spec-group">
                                          <h2>Engine Type</h2>
                                          <div class="spec-item">
                                              <span class="spec-label">Engine Model : </span>
                                              <span class="spec-value" id="engineType">{detail.engineModel}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Petrol :</span>
                                              <span class="spec-value">{detail.petrol}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Maximum Output :</span>
                                              <span class="spec-value">{detail.maximumOutput}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Maximum Torque :</span>
                                              <span class="spec-value">{detail.maximumTorque}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Number of Cylinder :</span>
                                              <span class="spec-value">{detail.NumberofCylinder}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Displacement :</span>
                                              <span class="spec-value">{detail.Displacement}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Bore :</span>
                                              <span class="spec-value"> {detail.Bore} mm</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Stroke :</span>
                                              <span class="spec-value">{detail.Stroke} mm</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Compression Ratio :</span>
                                              <span class="spec-value">{detail.CompressionRatio}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Lubricant Capacity :</span>
                                              <span class="spec-value">{detail.LubricationMethod}r</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Lubricant Capacity :</span>
                                              <span class="spec-value">{detail.LubricantCapacity}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Specific Fuel Consumption :</span>
                                              <span class="spec-value">{detail.SpeciChangeficFuelConsumption}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Oil Change Volume :</span>
                                              <span class="spec-value">{detail.OilVolume}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Cooling system filling quantity(Long term filling) :</span>
                                              <span class="spec-value">{detail.Coolingsystemfillingquantity}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label"> {detail.Thermostat}</span>
                                              <span class="spec-value"></span>
                                          </div>
                                      </div>


                                      {/* Embrayage */}
                                      
                                      <div class="spec-group">
                                          <h2>Clutch</h2>
                                          <div class="spec-item">
                                              <span class="spec-label">{detail.Clutch}</span>
                                              <span class="spec-value"></span>
                                          </div>
                                      </div>


                                      {/* Transmission */}

                                      <div class="spec-group">
                                          <h2>Transmission</h2>
                                          <div class="spec-item">
                                              <span class="spec-label">{detail.Transmission}</span>
                                              <span class="spec-value"></span>
                                          </div>
                                      </div>
                                      
                                      <div class="spec-group">
                                          <h2>Propeller Shaft</h2>
                                          <div class="spec-item">
                                              <span class="spec-label">{detail.PropellerShaft}</span>
                                              <span class="spec-value"></span>
                                          </div>
                                      </div>
                                      

                                      {/* Roues */}
                                      <div class="spec-group">
                                          <h2>Chassis</h2>
                                          <div class="spec-item">
                                              <span class="spec-label">Frame type :</span>
                                              <span class="spec-value">{detail.FrameType}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Front Suspension :</span>
                                              <span class="spec-value">{detail.FrontSuspension}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Rear Suspension :</span>
                                              <span class="spec-value"> {detail.RearSuspension}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Fuel Tank Capacity:</span>
                                              <span class="spec-value"> {detail.FuelTankCapacity}</span>
                                          </div>
                                      </div>
                                      
                                      {/* Frains */}
                                      <div class="spec-group">
                                          <h2>Brakes</h2>
                                          <div class="spec-item">
                                              <span class="spec-label">Front Brake :</span>
                                              <span class="spec-value">{detail.FrontBrake}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Rear Brake :</span>
                                              <span class="spec-value">{detail.RearBrake}</span>
                                          </div>
                                      </div>
                                      

                                      {/* Electronique */}
                                      <div class="spec-group">
                                          <h2>Électronique</h2>
                                          <div class="spec-item">
                                              <span class="spec-label">Operating Voltage :</span>
                                              <span class="spec-value">{detail.OperatingVoltage}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Battery :</span>
                                              <span class="spec-value">{detail.Battery}</span>
                                          </div>
                                          
                                      </div>
                                      
                                      {/* Tailles pneu */}
                                      <div class="spec-group">
                                          <h2>Wheels & Tyres</h2>
                                          <div class="spec-item">
                                              <span class="spec-label">Tyre/Rim size :</span>
                                              <span class="spec-value">{detail.TyreRimSize}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Tyres Type :</span>
                                              <span class="spec-value">{detail.TyresType}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Tyres Pressure :</span>
                                              <span class="spec-value">{detail.TyresPressure}</span>
                                          </div>
                                      </div>
                                      

                                      {/* Electronique */}
                                      <div class="spec-group">
                                          <h2>Electronics</h2>
                                          <div class="spec-item">
                                              <span class="spec-label">Operating Voltage :</span>
                                              <span class="spec-value">{detail.OperatingVoltage}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label">Battery :</span>
                                              <span class="spec-value">{detail.Battery}</span>
                                          </div>

                                          <div class="spec-item">
                                              <span class="spec-value">{detail.Electronics}</span>
                                          </div>
                                      </div>

                                      {/* Tableau de bord */}

                                      <div class="spec-group">
                                          <h2>Instrument Panel</h2>
                                          <div class="spec-item">
                                              <span class="spec-label">{detail.InstrumentPanel}</span>
                                          </div>
                                      </div>

                                      {/* Capacité des sièges */}
                                      <div class="spec-group">
                                          <h2>Seating Capacity</h2>
                                          <div class="spec-item">
                                              <span class="spec-label">{detail.SeatingCapacity}</span>
                                          </div>
                                      </div>

                                      {/* Empattement */}
                                      <div class="spec-group">
                                          <h2>Wheel Base</h2>
                                          <div class="spec-item">
                                              <span class="spec-label">{detail.WheelBase}</span>
                                          </div>
                                      </div>

                                      {/* Voie */}
                                      <div class="spec-group">
                                          <h2>Wheel Track</h2>
                                          <div class="spec-item">
                                              <span class="spec-label">{detail.WheelTrack}</span>
                                          </div>
                                      </div>

                                      {/* Longueur totale */}
                                      <div class="spec-group">
                                          <h2>Overall Length</h2>
                                          <div class="spec-item">
                                              <span class="spec-label"> {detail.OverallLength}</span>
                                          </div>
                                      </div>
                                      

                                      {/* Largeur totale */}
                                      <div class="spec-group">
                                          <h2>Overall Width</h2>
                                          <div class="spec-item">
                                              <span class="spec-label"> {detail.OverallWidth}</span>
                                          </div>
                                      </div>


                                      {/* Hauteur totale */}
                                      <div class="spec-group">
                                          <h2>Overall Height</h2>
                                          <div class="spec-item">
                                              <span class="spec-label"> {detail.OverallHeight}</span>
                                          </div>
                                      </div>

                                      {/* Poids */}
                                      <div class="spec-group">
                                          <h2>Weight Kgs</h2>
                                          <div class="spec-item">
                                              <span class="spec-label"> {detail.WeightKgs}</span>
                                          </div>
                                      </div>
                                      {/* Hauteur totale */}
                                      <div class="spec-group">
                                          <h2>Performance</h2>
                                          <div class="spec-item">
                                              <span class="spec-label"> {detail.Maximumdrivingspeed}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label"> {detail.Gradeability}</span>
                                          </div>
                                          <div class="spec-item">
                                              <span class="spec-label"> {detail.TurningCircle}</span>
                                          </div>
                                      </div>
                                  </div>
                                </div>
                            )}
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
