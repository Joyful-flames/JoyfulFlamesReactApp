const Plant = require("./Plant")
const Species = require("./TempData/Species.json");

const xWindShift = 1
const yWindShift = 1

/*function blankBoard(width = 1, height = 1,) {
    return Array(width * height).fill(null)
}*/

function blankMatrix(width = 1, height = 1,) {
    return Array(height).fill(null).map(item => item = Array(width).fill(null))
}

/*function placePlantOnBoard(xCord, yCord, plantSpecie) {
    board.splice(xCord * yCord, 1, new Plant.Plant(xCord, yCord, plantSpecie))
}

function placePlantOnMatrix(xCord, yCord, plantSpecie) {
    board[yCord].splice(xCord, 1, new Plant.Plant(xCord, yCord, plantSpecie))
}*/

/** Print Matrix to Console
 *
 * @param board
 * @returns {Promise<void>}
 */
async function printMatrix(board) {
    var printString = ""
    board.map(function (row) {
        row.map(function (column) {
            printString += "["
            if (column instanceof Plant.Plant) {
                printString += column.consoleView()
            } else {
                printString += "____"
            }
            printString += "]"
        })
        printString += "\n"
    })
    console.log(printString)
}

/**
 *
 * @param board
 * @param {Array[Number]} position
 * @param {Plant.Plant}plant
 */
function placePlantOnMatrix(board, position, plant) {
    const xCord = position[1]
    const yCord = position[0]
    board[yCord][xCord] = plant
    // console.log("A", plant.name, "place on", xCord, ",", yCord)
}

function boundaryLimiter(boundary, num) {
    if (num > boundary) {
        return boundary
    } else if (num < 0) {
        return 0
    } else {
        return num
    }
}

/** Work in Progress
 *
 * @param {Array} board
 * @param {Number} centerX
 * @param {Number} centerY
 * @param {Number} radius
 */
function getCircleCordByCenter(board, centerX, centerY, radius) {

    const xBound = board[0].length
    const yBound = board.length

    const xRange = [centerX - radius, centerX + radius].map(cord => boundaryLimiter(xBound, cord))
    const yRange = [centerY - radius, centerY + radius].map(cord => boundaryLimiter(yBound, cord))
    console.log(xBound, yBound)
    var cordInRadius = []

    board.map(function (row) {
        var postInBoard = board.indexOf(row)
        if (yRange[1] >= postInBoard && yRange[0] <= postInBoard) {
            for (var postInRow = xRange[0]; postInRow <= xRange[1]; postInRow++) {
                cordInRadius.push([postInRow, postInBoard])
            }
        }
    })
    return cordInRadius

}


module.exports = {placePlantOnMatrix, printMatrix, blankMatrix, getCircleCordByCenter, boundaryLimiter}