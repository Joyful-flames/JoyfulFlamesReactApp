const Plant = require("./Plant")
const Species = require("./TempData/Species.json");

/** This function used to generate a blank matrix with given size.
 *
 * @param {Number} width
 * @param {Number} height
 * @return {any[][]} blank matrix
 */
function blankMatrix(width = 1, height = 1,) {
    return Array(height).fill(null).map(item => item = Array(width).fill(null))
}

/** This function used to print Matrix to Console with given matrix.
 *
 * @param matrix
 * @returns {Promise<void>}
 */
async function printMatrix(matrix) {
    var printString = ""
    matrix.map(function (row) {
        row.map(function (column) {
            printString += "["
            if (column instanceof Plant.Plant) {
                printString += column.consoleView()
            } else if (column === "MK") {
                printString += "_MK_"
            } else {
                printString += "____"
            }
            printString += "]"
        })
        printString += "\n"
    })
    console.log(printString)
}

/** This function used to place a plant on matrix with given matrix, coordinate and plant specie.
 *
 * @param {Array} matrix
 * @param {Array[Number]} position
 * @param {Plant.Plant}plant
 */
function placePlantOnMatrix(matrix, position, plant) {
    matrix[position[0]][position[1]] = plant
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

/** This function use to get the coordinates within a circle based on given radius and board.
 *
 * @param {Array} board
 * @param {Number} centerX
 * @param {Number} centerY
 * @param {Number} radius
 * @return {Array} coordinates
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
                // Get the distance from center to current position,
                // push coordinates if the distance is smaller than radius.
                if (Math.hypot(Math.abs(postInRow - centerX), Math.abs(postInBoard - centerY)) <= radius) {
                    cordInRadius.push([postInRow, postInBoard])
                }
            }
        }
    })
    return cordInRadius

}

/** This function is used to get the coordinate within a square based on given radius and board. (Not in used)
 *
 * @param {Array} board
 * @param {Number} centerX
 * @param {Number} centerY
 * @param {Number} radius
 * @return {Array} coordinates
 */
function getSqrCordByCenter(board, centerX, centerY, radius) {

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

/** This function is used to generate a matrix with given coordinates marked.
 *
 * @param {Array} matrix
 * @param {Number} coordinates
 * @return {Promise<void>}
 */
async function matrixMarker(matrix, coordinates) {
    var board = blankMatrix(matrix.length, matrix[0].length)
    coordinates.map(cell => board[cell[1]][cell[0]] = "MK")
    printMatrix(board).then()
}

module.exports = {
    placePlantOnMatrix,
    printMatrix,
    blankMatrix,
    getCircleCordByCenter,
    boundaryLimiter,
    getSqrCordByCenter,
    matrixMarker
}