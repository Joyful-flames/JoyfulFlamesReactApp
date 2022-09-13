const testPlantSpecie = {
    specieId: 0,
    commonName: 'TestComName',
    property: {
        tier: 0,
        matureStage: 1,
        maturePercentage: 99,
        growthRate: 1,
        crowedRange: 1,
        crowedRate: 1,
        spreadRange: 1,
        waterConsume: 0,
        nutritionConsume: -1
    },
    info: {
        species: 'testSpecies',
        name: 'testName',
        introduction: 'EMPTY_INFO',
    }

}

const growthSpeedModifier = 1


class Plant {
    constructor(xCord, yCord, plantSpecie, stage = 0, percentage = 0) {
        // basic stats
        this.xCord = xCord
        this.yCord = yCord
        this.plantSpecie = plantSpecie
        this.stage = stage
        this.percentage = percentage

        // specie property
        this.tier = plantSpecie.property.tier
        this.matureStage = plantSpecie.property.matureStage
        this.maturePercentage = plantSpecie.property.maturePercentage
        this.growthRate = plantSpecie.property.growthRate
        this.crowedRange = plantSpecie.property.crowedRange
        this.crowedRate = plantSpecie.property.crowedRate
        this.waterConsume = plantSpecie.property.waterConsume
        this.nutritionCosume = plantSpecie.property.nutritionConsume

    }

    grow() {
        this.percentage += this.growthRate * growthSpeedModifier

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

    frameLogic() {
        this.grow()
    }
}

module.exports = {testPlantSpecie, Plant}