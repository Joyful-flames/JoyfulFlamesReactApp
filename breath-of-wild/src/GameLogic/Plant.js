const Board = require("./Board")

const growthSpeedModifier = 1


/** Plant class
 *
 */
class Plant {
    function

    /** the class constructor
     *
     * @param coordinate
     * @param {JSON} plantSpecie
     * @param {Number} stage
     * @param {Number} percentage
     */
    constructor(coordinate, plantSpecie, stage = 0, percentage = 0) {
        // basic stats
        this.xCord = coordinate[0]
        this.yCord = coordinate[1]
        this.plantSpecie = plantSpecie
        this.stage = stage
        this.percentage = percentage

        // specie property
        this.specieProperty = this.plantSpecie["property"]
        this.tier = this.specieProperty["tier"]
        this.matureStage = this.specieProperty["matureStage"]
        this.maturePercentage = this.specieProperty["maturePercentage"]
        this.growthRate = this.specieProperty["growthRate"]
        this.crowedRange = this.specieProperty["crowedRange"]
        this.crowedRate = this.specieProperty["crowedRate"]
        this.spreadRange = this.specieProperty["spreadRange"]
        this.waterConsume = this.specieProperty["waterConsume"]
        this.nutritionCosume = this.specieProperty["nutritionConsume"]

        // specie info
        this.name = plantSpecie.info.name

    }

    /** This method used to add growth stats of a plant based on given cycle number.
     *
     * @param {Number} cycle
     */
    grow(cycle = 1) {
        this.percentage += this.growthRate * growthSpeedModifier * cycle

        if (this.percentage > 99) {
            if (this.stage < this.tier) {
                this.stage += 1
                this.percentage = 0
            } else {
                this.percentage = 99
            }
        }
    }

    /** This method used to get the overall stats of given coordinates.
     *
     * @param {Array} matrix
     * @param {Array} coordinates
     * @param {Number} tier
     * @return {{nullPos: *[], highTierPos: *[], sameTierPos: *[], lowTierPos: *[]}}
     */
    rangeStats(matrix, coordinates, tier = this.tier) {

        var nullPos = []
        var lowTierPos = []
        var sameTierPos = []
        var highTierPos = []


        coordinates.map(function (coordinate) {
            var cell = matrix[coordinate[1]][coordinate[0]]

            if (cell instanceof Plant) {
                if (cell.tier > tier) {
                    highTierPos.push(coordinate)
                } else if (cell.tier === tier) {
                    sameTierPos.push(coordinate)
                } else {
                    lowTierPos.push(coordinate)
                }
            } else {
                nullPos.push(coordinate)
            }
        })
        return {nullPos, lowTierPos, sameTierPos, highTierPos}
    }

    /** This method used to determent whether the plant is over crowed in is crowed range
     *  based on given crowed range stats and cell count in range.
     *
     * @param {Object} crowedRangeStats
     * @param {Number} crowedRangePosLen
     * @return {boolean} is plant crowed
     */
    isCrowed(crowedRangeStats, crowedRangePosLen) {
        return (crowedRangeStats["sameTierPos"].length + crowedRangeStats["highTierPos"].length) / crowedRangePosLen > this.crowedRate
    }

    /** This method used to determent whether the plant is mature for spreading seeds
     *  based on current Plant's stage and grow percentage.
     *
     * @return {boolean} is plant ready to spread
     */
    isMature() {
        return this.stage >= this.matureStage && this.percentage >= this.maturePercentage
    }

    /** This method used to spread current plant to nearby coordinates
     *  based on given matrix(map), array of spreadable coordinates and current Plant's specie data.
     *
     * @param {Array[Array]} matrix
     * @param {Array} spreadCords
     */
    spread(matrix, spreadCords) {
        console.log(spreadCords)

        const newPlantCords = []
        const newPlantSpecie = this.plantSpecie

        spreadCords.map(function (cord) {
            if (Math.random() < 0.3) {
                newPlantCords.push(cord)
            }
        })

        if (newPlantCords.length > 0) {this.percentage = 0}

        newPlantCords.map(function (cord) {
            matrix[cord[1]][cord[0]] = new Plant(cord, newPlantSpecie)
        })

        return matrix
    }

    /** This method used to return current Plants information for print in console.
     *
     * @return {string}
     */
    consoleView() {
        var returnString = this.name[0] + String(this.stage)
        if (this.percentage > 9) {
            returnString += String(this.percentage)
        } else {
            returnString += "0" + String(this.percentage)
        }
        return returnString
    }

    /** This method use to get the coordinates within a circle based on given radius and board.
     *
     * @param {Array} matrix
     * @param {Number} centerX
     * @param {Number} centerY
     * @param {Number} radius
     * @return {Array} coordinates
     */
    getCircleCordByCenter(matrix, radius, centerX = this.xCord, centerY = this.yCord) {

        /** This function used to limit the input number's max and min value based on given boundary.
         *
         * @param {Number} boundary
         * @param {Number} num
         * @return {number|*}
         */
        function boundaryLimiter(boundary, num) {
            if (num > boundary) {
                return boundary
            } else if (num < 0) {
                return 0
            } else {
                return num
            }
        }

        const xRange = [centerX - radius, centerX + radius].map(cord => boundaryLimiter(matrix[0].length, cord))
        const yRange = [centerY - radius, centerY + radius].map(cord => boundaryLimiter(matrix.length, cord))

        var cordInRadius = []

        // map evey cell in matrix
        matrix.map(function (row) {
            var postInBoard = matrix.indexOf(row)
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

    /** This method used to execute sequential components within a logic frame. Return with new matrix
     *
     * @param {Array} matrix
     * @return {Array} matrix
     */
    frameLogic(matrix) {
        // grow plant
        this.grow()

        // get coordinates in crowed range and extract stats
        const crowedRangePos = this.getCircleCordByCenter(matrix, this.xCord, this.crowedRange)
        const crowedRangeStats = this.rangeStats(matrix, crowedRangePos)

        let spreadRangePos
        let spreadRangeStats

        // check if crowed range is same as spread range, use simplified actions if there are same
        if (this.crowedRange === this.spreadRange) {
            spreadRangePos = crowedRangePos
            spreadRangeStats = crowedRangeStats
        } else {
            spreadRangePos = this.getCircleCordByCenter(matrix, this.xCord, this.spreadRange)
            spreadRangeStats = this.rangeStats(matrix, spreadRangePos)
        }

        // determine plant mature and crowed stats
        const mature = this.isMature()
        const crowed = this.isCrowed(crowedRangeStats, crowedRangePos.length)

        if (mature && (!crowed)) {

            const availablePos = spreadRangeStats["nullPos"].concat(spreadRangeStats["lowTierPos"])
            return this.spread(matrix, availablePos)
        }
        return matrix
    }
}

module.exports = {Plant}