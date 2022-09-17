const fs = require('fs');

const Board = require("./Board")
const Plant = require("./Plant")
const GameLogic = require("./GameLogic")
const Location = require("./TempData/Location.json")
const Species = require("./TempData/Species.json")
const {updateAvailableSpecies} = require("./GameLogic");

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function test(matrix, location_id) {

    const run = 400000
    var counter = 0
    let logMode = false

    const locationData = GameLogic.getLocationByID(location_id, Location);
    const locationSpecies = GameLogic.getSpeciesByID(locationData["speciesID"])
    var availableSpecies

    // const testPlantPos = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]
    const testPlantPos = [[4, 4]]

    // console.log(locationData)
    // console.log(locationSpecies)


    testPlantPos.map(coordinate => matrix[coordinate[0]][coordinate[1]] = new Plant.Plant(coordinate, locationSpecies[0]))

    let totalBioMass;

    while (counter < run) {
        totalBioMass = 0
        matrix.map(row => row.map(function (colum) {
            if (colum instanceof Plant.Plant) {
                matrix = colum.frameLogic(matrix, logMode)
                totalBioMass += colum.getBioMass()
            }
        }))
        if (counter % 1 === 0 && counter > 0) {
            logMode = true
            consoleMatrix = Board.outputMatrix(matrix) + "Counter:" + counter + ' | TotalBioMass: ' + totalBioMass + "\n"
            console.log(consoleMatrix)
            totalBioMass = GameLogic.getTotalBioMass(matrix)
            availableSpecies = await updateAvailableSpecies(locationSpecies, matrix, totalBioMass)
            // console.log(availableSpecies.length)
            // availableSpecies.map(specie => console.log(specie["commonName"]))
        }


        counter++
        await sleep(100);
    }
}

/*const a = Board.blankMatrix(5,5)
Board.placePlantOnMatrix(a,[1,1], new Plant.Plant(1,1, Species[0]))
printMatrix(a)
console.log(a[1][1].rangeStats(a,a[1][1].getCircleCordByCenter(a,a[1][1].spreadRange)))*/


test(Board.blankMatrix(10, 10), "0")

/*const locationData = GameLogic.getLocationByID("0", Location);
const locationSpecies = GameLogic.getSpeciesByID(locationData["speciesID"])

console.log(locationSpecies[0]["property"]["tier"])
console.log(locationSpecies.filter(specie => specie["property"]["tier"] === 0))*/
