const fs = require('fs');

const Board = require("./Board")
const Plant = require("./Plant")
const GameLogic = require("./GameLogic")
const Location = require("./TempData/Location.json")
const Species = require("./TempData/Species.json")
const Terrain = require("./TempData/Terrain.json")
var Temperature = require("fs").readFileSync("./TempData/BNE2021_temp.csv", "utf8")
const {updateAvailableSpecies} = require("./GameLogic");

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function logic_test(plantMatrix, landMatrix, location_id) {

    const run = 400000
    var cycle = 0
    let logMode = false

    const dateTemp = GameLogic.tempCSV2dateTempList(Temperature)
    const locationData = GameLogic.getLocationByID(location_id, Location);
    const locationSpecies = GameLogic.getSpeciesByID(locationData["speciesID"])
    const speciesScore = locationData["speciesScore"]
    const climate = locationData["weatherList"]

    console.log(speciesScore)
    var availableSpecies

    // const testPlantPos = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]
    const testPlantPos = [[4, 4]]

    // console.log(locationData)
    // console.log(locationSpecies)
    testPlantPos.map(coordinate => plantMatrix[coordinate[0]][coordinate[1]] = new Plant.Plant(coordinate, locationSpecies[0]))

    let totalBioMass;

    while (cycle < run) {

        const currentWeather = GameLogic.randomWeather(climate)
        totalBioMass = 0

        var currentTemp = {minTemp: dateTemp[cycle % 365 + 1][1], maxTemp: dateTemp[cycle % 365 + 1][2]}

        plantMatrix.map(row => row.map(function (colum) {
            if (colum instanceof Plant.Plant) {
                plantMatrix = colum.frameLogic(plantMatrix, landMatrix[colum.yCord][colum.xCord], currentTemp, logMode)
                totalBioMass += colum.getBioMass()
            }}))

        if (cycle % 1 === 0 && cycle > 0) {
            logMode = true
            consoleMatrix =
                Board.outputMatrix(plantMatrix) +
                `Counter: ${cycle} | TotalBioMass: ${totalBioMass} ` +
                `Temp: ${currentTemp.minTemp} - ${currentTemp.maxTemp} Weather: ${currentWeather} ` +
                `Available: ${availableSpecies}`
            console.log(consoleMatrix)
            totalBioMass = GameLogic.getTotalBioMass(plantMatrix)
            availableSpecies = updateAvailableSpecies(locationData, totalBioMass)
        }

        cycle++
        await sleep(100);
    }
}

/*const a = Board.blankMatrix(5,5)
Board.placePlantOnMatrix(a,[1,1], new Plant.Plant(1,1, Species[0]))
printMatrix(a)
console.log(a[1][1].rangeStats(a,a[1][1].getCircleCordByCenter(a,a[1][1].spreadRange)))*/


logic_test(Board.blankMatrix(10, 10), Board.blankMatrix(10, 10), "0")

/*const locationData = GameLogic.getLocationByID("0", Location);
const locationSpecies = GameLogic.getSpeciesByID(locationData["   "])

console.log(locationSpecies[0]["property"]["tier"])
console.log(locationSpecies.filter(specie => specie["property"]["tier"] === 0))*/
