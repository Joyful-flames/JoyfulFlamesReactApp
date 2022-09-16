const Board = require("./Board")
const Plant = require("./Plant")
const GameLogic = require("./GameLogic")
const Location = require("./TempData/Location.json")
const Species = require("./TempData/Species.json")
const {matrixMarker, printMatrix} = require("./Board");

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function test(matrix, location_id) {

    const run = 200
    var counter = 0

    var locationData = GameLogic.getLocationByID(location_id, Location)
    var locationSpecies = GameLogic.getSpeciesByID(locationData["speciesID"])

    // const testPlantPos = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]

    const testPlantPos = [[1, 1], [0, 1]]
    // console.log(locationData)
    // console.log(locationSpecies)

    testPlantPos.map(coordinate => Board.placePlantOnMatrix(matrix, coordinate, new Plant.Plant([1, 1], Species[0])))
    Board.printMatrix(matrix)

    while (counter < run) {
        console.log("Counter:", counter)
        matrix.map(row => row.map(function (colum) {
            if (colum instanceof Plant.Plant) {
                colum.frameLogic(matrix)
            }
        }))
        if (counter % 10 === 0) {
            Board.printMatrix(matrix).then()
        }


        counter++
        await sleep(100);
    }
}

/*const a = Board.blankMatrix(5,5)
Board.placePlantOnMatrix(a,[1,1], new Plant.Plant(1,1, Species[0]))
printMatrix(a)
console.log(a[1][1].rangeStats(a,a[1][1].getCircleCordByCenter(a,a[1][1].spreadRange)))*/


test(Board.blankMatrix(5, 5), "0")
