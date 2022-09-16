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

    const run = 400
    var counter = 0

    var locationData = GameLogic.getLocationByID(location_id, Location)
    var locationSpecies = GameLogic.getSpeciesByID(locationData["speciesID"])

    // const testPlantPos = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]

    const testPlantPos = [[1, 1]]
    // console.log(locationData)
    // console.log(locationSpecies)


    testPlantPos.map(coordinate => matrix[coordinate[0]][coordinate[1]] = new Plant.Plant(coordinate, locationSpecies[0]))
    Board.printMatrix(matrix)

    while (counter < run) {
        console.log("Counter:", counter)
        matrix.map(row => row.map(function (colum) {
            if (colum instanceof Plant.Plant) {
                matrix = colum.frameLogic(matrix)
            }
        }))
        console.log("Counter:", counter)
        Board.printMatrix(matrix).then()
        if (counter % 10 === 0) {
            /*console.log("Counter:", counter)
            Board.printMatrix(matrix).then()*/
        }


        counter++
        await sleep(10);
    }
}

/*const a = Board.blankMatrix(5,5)
Board.placePlantOnMatrix(a,[1,1], new Plant.Plant(1,1, Species[0]))
printMatrix(a)
console.log(a[1][1].rangeStats(a,a[1][1].getCircleCordByCenter(a,a[1][1].spreadRange)))*/


test(Board.blankMatrix(10, 10), "0")
