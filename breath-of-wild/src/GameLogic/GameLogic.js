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

/** This function is used to get the location data from Location.json based on given Location ID
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
 * @param {Array[Array]} board
 * @param {String} location_id
 */
function gameLogic(board, location_id) {
    var locationData = getLocationByID(location_id, Location)
    var locationSpecies = getSpeciesByID(locationData["speciesID"])
    console.log(locationSpecies)
}

module.exports = {gameLogic, getSpeciesByID, getLocationByID}