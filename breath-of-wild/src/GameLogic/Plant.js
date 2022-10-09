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
        this.coordinate = coordinate
        this.xCord = coordinate[1]
        this.yCord = coordinate[0]
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
        // this.nutritionCosume = this.specieProperty["nutritionConsume"]
        this.sutableLand = this.plantSpecie["conditions"]["terrainID"]

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
        } else if (this.percentage < 0 ){
            if (this.stage > 0) {
                this.stage -= 1
            } else {
                matrix[this.yCord][this.xCord]
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
            var cell = matrix[coordinate[0]][coordinate[1]]
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
        return (crowedRangeStats["sameTierPos"].length / crowedRangePosLen) > this.crowedRate
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
     * @param {Number} spreadChance
     */
    multiSpread(matrix, spreadCords, spreadChance = 0.3) {

        const newPlantSpecie = this.plantSpecie
        var newSpreadCords = []

        const self_pos = this.coordinate
        var chance

        spreadCords.map(function (cord) {
            chance = Math.random()
            if (chance < 0.3 && cord !== self_pos) {
                newSpreadCords.push(cord)
            }
        })

        if (newSpreadCords.length !== 0){
            this.percentage = 0
            console.log(this.name, "at", this.coordinate, "spread to:", newSpreadCords)
            console.log("Within Cords:", spreadCords)
        }

        newSpreadCords.map(function (cord) {
            matrix[cord[1]][cord[0]] = new Plant(cord, newPlantSpecie)
        })

        return matrix
    }

    /** This method used to spread current plant to a nearby coordinate
     *  based on given matrix(map), array of spreadable coordinates and current Plant's specie data.
     *
     * @param {Array[Array]} matrix
     * @param {Array} spreadCords
     * @param {Number} spreadChance
     */

    singleSpread(matrix, spreadCords, spreadChance = 0.3) {
        const newPlantSpecie = this.plantSpecie
        const newPlantCords = spreadCords[Math.floor(Math.random() * spreadCords.length)]
        if (Math.random() < spreadChance) {
            this.percentage = 0
            matrix[newPlantCords[1]][newPlantCords[0]] = new Plant(newPlantCords, newPlantSpecie)
        }
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

        if (this.crowed) {
            returnString += "C"
        } else {
            returnString += "_"
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

        const xRange = [centerX - radius, centerX + radius].map(cord => boundaryLimiter(matrix[0].length - 1, cord))
        const yRange = [centerY - radius, centerY + radius].map(cord => boundaryLimiter(matrix.length - 1, cord))

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

    getBioMass() {
        return this.tier * 1000 + this.stage * 100 + this.percentage
    }

    /** This method used to execute sequential components within a logic frame. Return with new matrix
     *
     * @param {Array} matrix
     * @param {boolean} logMode
     * @param landType
     * @param weather
     * @return {Array} matrix
     */
    frameLogic(matrix, logMode = false, landType, weather) {
        // grow plant
        this.grow()

        // get coordinates in crowed range and extract stats
        const crowedRangePos = this.getCircleCordByCenter(matrix, this.crowedRange) // List
        const crowedRangeStats = this.rangeStats(matrix, crowedRangePos) //

        let spreadRangePos
        let spreadRangeStats

        // determine plant mature and crowed stats
        this.mature = this.isMature()
        this.crowed = this.isCrowed(crowedRangeStats, crowedRangePos.length)

        if (this.crowed) {
            matrix[this.yCord][this.xCord] = null
            return matrix

        } else if (this.mature) {
            // check if crowed range is same as spread range, use simplified actions if there are same
            if (this.crowedRange === this.spreadRange) {
                spreadRangePos = crowedRangePos
                spreadRangeStats = crowedRangeStats
            } else {
                spreadRangePos = this.getCircleCordByCenter(matrix, this.spreadRange)
                spreadRangeStats = this.rangeStats(matrix, spreadRangePos)
            }
            const availablePos = spreadRangeStats["nullPos"].concat(spreadRangeStats["lowTierPos"])
            console.log(spreadRangeStats)

            // console.log(this.coordinate)
            // console.log(spreadRangeStats)

            return this.multiSpread(matrix, availablePos)
        }

        if (logMode) {
            // console.log(this.name, "in", this.coordinate, "availablePos:", availablePos)
        }

        return matrix
    }
}

module.exports = {Plant}