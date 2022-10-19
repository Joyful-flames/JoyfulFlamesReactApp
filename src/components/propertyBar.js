import "./propertyBar.css";
import { useState } from "react";
import { getSpecieProperties } from "../util/utils";

export default function PropertyBar({ specieId }) {
    const [rainfall, setRainfall] = useState(false);
    const [plantType, setPlantType] = useState(false);
    const [temperature, setTemperature] = useState(false);

    const properties = getSpecieProperties(specieId);
    /**
     * @param  {number} number - which property to show or close
     */
    function clickHandler(number) {
        if (number === 0) {
            if (rainfall) {
                setRainfall(false);
                setPlantType(false);
                setTemperature(false);
            } else {
                setRainfall(true);
                setPlantType(false);
                setTemperature(false);
            }
        } else if (number === 1) {
            if (plantType) {
                setRainfall(false);
                setPlantType(false);
                setTemperature(false);
            } else {
                setRainfall(false);
                setPlantType(true);
                setTemperature(false);
            }
        } else {
            if (temperature) {
                setRainfall(false);
                setPlantType(false);
                setTemperature(false);
            } else {
                setRainfall(false);
                setPlantType(false);
                setTemperature(true);
            }
        }
    }

    return (
        <div className="propertyBar">
            <div className="propertyBar-properties">
                <div
                    className="propertyBar-property"
                    onClick={() => clickHandler(0)}
                >
                    <img
                        className="propertyBar-property-image"
                        src="/images/icons/waterDrop.png"
                        alt="water drop"
                    ></img>
                </div>
                {rainfall ? (
                    <div className="propertyBar-property-content">
                        {properties[0]}
                    </div>
                ) : (
                    ""
                )}
                <div
                    className="propertyBar-property"
                    onClick={() => clickHandler(1)}
                >
                    <img
                        className="propertyBar-property-image"
                        src="/images/icons/plant.png"
                        alt="plant"
                    ></img>
                </div>
                {plantType ? (
                    <div className="propertyBar-property-content">
                        {properties[1]}
                    </div>
                ) : (
                    ""
                )}
                <div
                    className="propertyBar-property"
                    onClick={() => clickHandler(2)}
                >
                    <img
                        className="propertyBar-property-image"
                        src="/images/icons/temperature.png"
                        alt="temperature"
                    ></img>
                </div>
                {temperature ? (
                    <div className="propertyBar-property-content">
                        {properties[2]}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
