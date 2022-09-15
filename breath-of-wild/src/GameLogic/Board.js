const Plant = require("./Plant")

const xWindShift = 1
const yWindShift = 1

function blankBoard(width = 1, height = 1,) {
    return Array(width * height).fill(null)
}

function blankMatrix(width = 1, height = 1,) {
    return Array(height).fill(null).map(item => item = Array(width).fill(null))
}

function placePlantOnBoard(xCord, yCord, plantSpecie) {
    board.splice(xCord * yCord, 1, new Plant.Plant(xCord, yCord, plantSpecie))
}

function placePlantOnMatrix(xCord, yCord, plantSpecie) {
    board[yCord].splice(xCord, 1, new Plant.Plant(xCord, yCord, plantSpecie))
}

async function printMatrix(board) {
    printString = ""
    board.map(row => row.map(function (column){
        printString += "["
        if (column instanceof Plant.Plant){
            printString += column.
        }
        printString += "]"
    }))
}


module.exports = {blankBoard, placePlantOnBoard, printMatrix, blankMatrix, placePlantOnMatrix}