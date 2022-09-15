const growthSpeedModifier = 1

/** Plant class
 *
 */
class Plant {
    /** the class constructor
     *
     * @param {Number} xCord
     * @param {Number} yCord
     * @param {JSON} plantSpecie
     * @param {Number} stage
     * @param {Number} percentage
     */
    constructor(xCord, yCord, plantSpecie, stage = 0, percentage = 0) {
        // basic stats
        this.xCord = xCord
        this.yCord = yCord
        this.specieProperty = plantSpecie["property"]
        this.stage = stage
        this.percentage = percentage

        // specie property
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
            if (this.stage <= this.tier) {
                this.stage += 1
                this.plantSpecie = 0
            }
        }
    }

    isCrowed() {

    }

    isMature() {
        return this.stage >= this.matureStage && this.percentage >= this.maturePercentage
    }

    spread() {

    }

    consoleView(){
        var returnString = this.name[0] + String(this.stage)
        if (this.percentage>9){
            returnString += String(this.percentage)
        }
        else {
            returnString += "0" + String(this.percentage)
        }
        return returnString
    }

    frameLogic() {
        this.grow()

        const mature = this.isMature()
        const crowed = this.isCrowed()

        if (mature && (!crowed)) {
            this.spread()
        }
    }
}

module.exports = {Plant}