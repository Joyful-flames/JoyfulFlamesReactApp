const Board = require("./Board")
const Plant = require("./Plant")
const GameLogic = require("./GameLogic")
const Location = require("./TempData/Location.json")
const Species = require("./TempData/Species.json")
const {matrixMarker} = require("./Board");

// GameLogic.gameLogic("0")

// console.log(new Plant.Plant(0,0,Species["0"]))

/*
var board = blankMatrix(3,3)
Board.printMatrix(board)

Board.placePlantOnMatrix(board,[1,1], new Plant.Plant(1,1, Species[0]))
Board.printMatrix(board)*/
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function test(board, location_id) {

    const run = 100
    var counter = 0

    var locationData = GameLogic.getLocationByID(location_id, Location)
    var locationSpecies = GameLogic.getSpeciesByID(locationData["speciesID"])

    Board.printMatrix(board)
    Board.placePlantOnMatrix(board, [1, 1], new Plant.Plant(1, 1, Species[0]))

    while (counter < run) {

        board.map(row => row.map(function (colum) {
            if (colum instanceof Plant.Plant) {
                colum.frameLogic()
            }
        }))
        Board.printMatrix(board).then()

        counter++
        await sleep(100);

    }
}

const a = Board.blankMatrix(10,10)
const c = Board.getCircleCordByCenter(a,5,5,4)
console.log(c.includes([5,3]))

matrixMarker(a,c)

//test(Board.blankMatrix(5, 5), "0")
