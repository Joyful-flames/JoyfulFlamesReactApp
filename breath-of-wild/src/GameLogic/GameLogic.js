const Board = require("./Board")
const Plant = require("./Plant")
const Location = require("./TempData/Location.json")
const Species = require("./TempData/Species.json")

/** This function is used to get the species data with from Species.json based no given specie IDs
 *
 * @param {Array[String]} specieIDs
 * @return {Array[JSON]}
 */
function getSpeciesByID(specieIDs) {
    return Object.keys(Species).map((key) => Species[key])
        .filter(specie => specieIDs.includes(specie["specieId"]))
}

/** This function is used to get the location data from Location.json based on given Location ID.
 *
 * @param {String} location_id
 * @param {JSON} Location
 * @return {Array[JSON]}
 */
function getLocationByID(location_id, Location) {
    return Object.keys(Location).map((key) => Location[key])
        .filter(location => location["locID"] === location_id)[0]
}

/** Main game logic
 *
 * @param {Array[Array]} matrix
 * @param {String} location_id
 */
function gameLogic(matrix, location_id) {
    var locationData = getLocationByID(location_id, Location)
    var locationSpecies = getSpeciesByID(locationData["speciesID"])
    console.log(locationSpecies)
}

/**
 *
 * @param matrix
 * @returns {Promise<number>}
 */
async function getTotalBioMass(matrix) {
    let totalBioMass = 0
    matrix.map(row => row.map(function (colum) {
        if (colum instanceof Plant.Plant) {
            totalBioMass += colum.getBioMass()
        }
    }))
    return totalBioMass
}

async function updateAvailableSpecies(locationSpecies, matrix, totalBioMass, completionIndex = 0.7) {

    const totalCell = matrix.lenght * matrix[0].length

    if (totalBioMass >= totalCell * completionIndex * 2100) {
        return locationSpecies.filter(specie => specie["property"]["tier"] === 3)
    } else if (totalBioMass >= totalCell * completionIndex * 1100) {
        return locationSpecies.filter(specie => specie["property"]["tier"] === 2)
    } else if (totalBioMass >= totalCell * completionIndex * 100) {
        return locationSpecies.filter(specie => specie["property"]["tier"] === 1)
    } else {
        return locationSpecies.filter(specie => specie["property"]["tier"] === 0)
    }
}

function tempCSV2dateTempList(tempCSV) {
    dateTemp = []
    tempCSV.split("\r\n").map(date => dateTemp.push(date.split(",")))
    return dateTemp
}

module.exports = {
    tempCSV2dateTempList,
    gameLogic,
    getSpeciesByID,
    getLocationByID,
    getTotalBioMass,
    updateAvailableSpecies
}