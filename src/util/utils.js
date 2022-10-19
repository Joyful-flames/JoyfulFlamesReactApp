import specieData from "../data/specie";
/**
 * This function is used to get the properties of a specie
 *
 * @param  {string} specieId - specie id
 * @returns {array} - a list of properties with the order of rainfall, landType and temperature
 */
export function getSpecieProperties(specieId) {
    const specie = specieData[specieId];
    const temperature = constructTemperatureString(
        specie.conditions.temp.suitableLowTemp,
        specie.conditions.temp.suitableHighTemp
    );
    return [specie.info.rainfall, specie.info.landType, temperature];
}
/**
 * @param  {string} specieId - specie id
 * @returns {string} - get the specie generic name and information name
 */
export function getSpecieGenericName(specieId) {
    const specie = specieData[specieId];
    return specie.info.generic + " " + specie.info.name;
}
/**
 * @param  {string} specieId - specie id
 * @returns (string) - the common name of the specie
 */
export function getCommonName(specieId) {
    const specie = specieData[specieId];
    return specie.commonName;
}
/**
 * @param  {string} specieId - specie id
 * @returns {string} - the number of stages for a specie
 */
export function getNumberOfStages(specieId) {
    const specie = specieData[specieId];
    return specie.stages;
}
/**
 * @param  {string} specieId - specie id
 * @returns {string} - the infotmation of the specie
 */
export function getInformation(specieId) {
    const specie = specieData[specieId];
    return [
        specie.info.description,
        specie.info.distribution,
        specie.info["Suitable Climate"],
        specie.info.protection,
        specie.info.animalHabitat,
    ];
}

/**
 * @param  {int} suitableLowTemp - the low temperature of a specie
 * @param  {int} suitableHighTemp - the high temperature of a specie
 * @returns {string} - a string of temperature
 */
function constructTemperatureString(suitableLowTemp, suitableHighTemp) {
    return suitableLowTemp + "°C" + " to " + suitableHighTemp + "°C";
}
