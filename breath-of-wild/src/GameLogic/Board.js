const Plant = require("./Plant")
const board = []

const xWindShift = 1
const yWindShift = 1

function blankBoard(width = 1, height = 1,) {
    return Array(width * height).fill(null)
}

function placePlant(xCord, yCord, plantSpecie) {
    const index = xCord * yCord
    board.splice(index, 1, new Plant.Plant(xCord, yCord, plantSpecie))
}

async function printBoard() {
    for (const index in board) {
        if (board[index] == null) {
            // console.log(' null ')
        } else {
            console.log(board[index].percentage)
        }
    }
}

// Work in progress
function cellInRange (xCord, yCord, boardWidth, boardHeight, range = 1) {
    // cut board coordinate with square
    const xStart = xCord - range
    const yStart = yCord - range
    const xEnd = xCord + range
    const yEnd = xCord + range

    // matrix board
    let matrix = Array(boardWidth)

}


module.exports = {blankBoard, placePlant, printBoard}