const Board = require("./Board")
const Plant = require("./Plant")

boardWidth = 5
boardHeight = 5

board = Board.blankBoard(boardWidth, boardHeight)

// console.log(board)

Board.placePlant(Math.round(boardWidth / 2), Math.round(boardHeight / 2), Plant.testPlantSpecie)

// console.log(board)
Board.printBoard().then()
