const specieData = {
    1: {
        specieId: "1",
        commonName: "Tankmos",
        property: {
            tier: 0,
            matureStage: 0,
            maturePercentage: 99,
            growthRate: 10,
            crowedRange: 1,
            crowedRate: 1,
            spreadRange: 1,
            waterConsume: 0,
            nutritionConsume: 0,
        },
        conditions: {
            temp: {
                minTemp: 0,
                suitableLowTemp: 10,
                suitableHighTemp: 25,
                maxTemp: 35,
            },
            terrainID: [null, 0],
        },
        info: {
            generic: "Campylopus",
            name: "Introflexus",
            landType: "Plain",
            rainfall: "Moderate rainfall",
            description:
                "Individual plants measure 0.5-5 centimetres, with lanceolate leaves 4-6 mm. The costa is wide and occupies about half the leaf width. The plants are found in dense mats and extensive carpets and are yellowish to olive green",
            distribution: "Southern and eastern Australia",
            "Suitable Climate": "Warm temperate climate, wet all year",
            protection: "None",
            animalHabitat: "None",
        },
        stages: 1
    },
    2: {
        specieId: "2",
        commonName: "Cockatoo Grass",
        property: {
            tier: 1,
            matureStage: 0,
            maturePercentage: 99,
            growthRate: 5,
            crowedRange: 1,
            crowedRate: 1,
            spreadRange: 1,
            waterConsume: 0,
            nutritionConsume: 0,
        },
        conditions: {
            temp: {
                minTemp: 3,
                suitableLowTemp: 18,
                suitableHighTemp: 24,
                maxTemp: 38,
            },
            terrainID: [null, 0],
        },
        info: {
            generic: "Alloteropsis",
            name: "Semialata ",
            landType: "Plain",
            rainfall: "Moderate rainfall",
            description:
                "This plant typically reaches 20-150 centimeters tall, growing from a short, white rhizome.  The leaf blades are typically 10-50 centimeters long and 1-10 millimeters wide. The plant produces 2-flowered fertile spikelets.",
            distribution:
                "In Queensland extends below 18°S to northern New South Wales ",
            "Suitable Climate": "Monsoonal, summer dominant rainfall",
            protection: "None",
            animalHabitat: "None",
        },
        stages: 1
    },
    3: {
        specieId: "3",
        commonName: "Hare's foot fern",
        property: {
            tier: 3,
            matureStage: 2,
            maturePercentage: 50,
            growthRate: 3,
            crowedRange: 2,
            crowedRate: 0.9,
            spreadRange: 1,
            waterConsume: 0,
            nutritionConsume: 0,
        },
        conditions: {
            temp: {
                minTemp: 13,
                suitableLowTemp: 21,
                suitableHighTemp: 24,
                maxTemp: 30,
            },
            terrainID: [null, 0],
        },
        info: {
            generic: "Davallia",
            name: "Solida",
            landType: "Plain",
            rainfall: "Moderate rainfall",
            description:
                "Usually epiphytic or epipetric. Rhizomes dictyostelic, dorsiventral, densely scaly. Stipes articulate at base. Phyllopodia short. veins free. Sporangium stalk 3-rowed. Annulus vertical. Spores monolete",
            distribution: "Eastern Australia",
            "Suitable Climate": "Subtropical monsoon climate",
            protection: "None",
            animalHabitat: "Small insect",
        },
        stages: 2
    },
    4: {
        specieId: "4",
        commonName: "Creek bottlebrush",
        property: {
            tier: 3,
            matureStage: 2,
            maturePercentage: 50,
            growthRate: 3,
            crowedRange: 2,
            crowedRate: 0.9,
            spreadRange: 1,
            waterConsume: 0,
            nutritionConsume: 0,
        },
        conditions: {
            temp: {
                minTemp: -6,
                suitableLowTemp: 10,
                suitableHighTemp: 32,
                maxTemp: 44,
            },

            terrainID: [null, 0],
        },
        info: {
            generic: "Rhizophora",
            name: "Stylosa",
            landType: "Plain",
            rainfall: "Moderate rainfall",
            description:
                "Rhizophora stylosa grows up to 15 metres (50 ft) tall with a trunk diameter of up to 25 centimetres (10 in). The bark is dark brown to black. The fruits are ovoid to pear-shaped and measure up to 4 cm (2 in) long",
            distribution: "New South Wales and Queensland",
            "Suitable Climate":
                "Tropical savanna climate or tropical wet climate",
            protection: "None",
            animalHabitat: "None",
        },
        stages: 2
    },
    5: {
        specieId: "5",
        commonName: "Red Mangroves",
        property: {
            tier: 3,
            matureStage: 2,
            maturePercentage: 50,
            growthRate: 3,
            crowedRange: 2,
            crowedRate: 0.9,
            spreadRange: 1,
            waterConsume: 0,
            nutritionConsume: 0,
        },
        conditions: {
            temp: {
                minTemp: 10,
                suitableLowTemp: 20,
                suitableHighTemp: 26,
                maxTemp: 30,
            },
            terrainID: [null, 0],
        },
        info: {
            generic: "Rhizophora",
            name: "Stylosa",
            landType: "Salt water beach",
            rainfall: "Moderate rainfall",
            description:
                "Rhizophora stylosa grows up to 15 metres (50 ft) tall with a trunk diameter of up to 25 centimetres (10 in). The bark is dark brown to black. The fruits are ovoid to pear-shaped and measure up to 4 cm (2 in) long",
            distribution: "New South Wales and Queensland",
            "Suitable Climate":
                "Tropical savanna climate or tropical wet climate",
            protection: "None",
            animalHabitat: "None",
        },
        stages: 2
    },
    6: {
        specieId: "6",
        commonName: "White gum",
        property: {
            tier: 4,
            matureStage: 4,
            maturePercentage: 50,
            growthRate: 1,
            crowedRange: 4,
            crowedRate: 0.6,
            spreadRange: 1,
            waterConsume: 0,
            nutritionConsume: 0,
        },
        conditions: {
            temp: {
                minTemp: -10,
                suitableLowTemp: 21,
                suitableHighTemp: 33,
                maxTemp: 45,
            },
            terrainID: [null, 0],
        },
        info: {
            generic: "Eucalyptus",
            name: "Argophloia",
            landType: "Plain",
            rainfall: "Moderate rainfall",
            description:
                "Eucalyptus argophloia is a medium to tall tree growing to 40m. The trunk is free of branches for one-half or more of the total tree height. The smooth bark is shed in strips and has a mottled appearance with patches of yellow, pinkish grey, reddish grey, bluish grey and white.",
            distribution:
                "Eucalyptus argophloia is restricted to a small area north of Chinchilla, in south east Queensland",
            "Suitable Climate": "Sub-humid climate",
            protection: "None",
            animalHabitat: "This species is a habitat for koalas.",
        },
        stages: 3
    },
    7: {
        specieId: "7",
        commonName: "Red gum",
        property: {
            tier: 4,
            matureStage: 4,
            maturePercentage: 50,
            growthRate: 1,
            crowedRange: 4,
            crowedRate: 0.6,
            spreadRange: 1,
            waterConsume: 0,
            nutritionConsume: 0,
        },
        conditions: {
            temp: {
                minTemp: 8,
                suitableLowTemp: 19,
                suitableHighTemp: 25,
                maxTemp: 36,
            },
            terrainID: [null, 0],
        },
        info: {
            generic: "Eucalyptus",
            name: "Tereticornis",
            landType: "Plain",
            rainfall: "Moderate rainfall",
            description:
                "Eucalyptus tereticornis is a tree that typically grows to a height of 20-50 m (66-164 ft) and forms a lignotuber. The trunk is straight, usually unbranched for more than half of the total height of the tree and has a girth of up to 2 m (6 ft 7 in) dbh",
            distribution:
                "From southern Papua New Guinea at latitude 15°S, to southeastern Victoria at latitude 38°S.",
            "Suitable Climate": "Sunny and dry climates",
            protection: "None",
            animalHabitat: "This species is a habitat for koalas.",
        },
        stages: 3
    },
    8: {
        specieId: "8",
        commonName: "Jacaranda",
        property: {
            tier: 4,
            matureStage: 4,
            maturePercentage: 50,
            growthRate: 1,
            crowedRange: 4,
            crowedRate: 0.6,
            spreadRange: 1,
            waterConsume: 0,
            nutritionConsume: 0,
        },
        conditions: {
            temp: {
                minTemp: -3,
                suitableLowTemp: 18,
                suitableHighTemp: 28,
                maxTemp: 40,
            },
            terrainID: [null, 0],
        },
        info: {
            generic: "Jacaranda",
            name: "Mimosifolia",
            landType: "Plain",
            rainfall: "Moderate rainfall",
            description:
                "The species are shrubs to large trees ranging in size from 20 to 30 m (66 to 98 ft) tall. The leaves are bipinnate in most species, pinnate or simple in a few species. The flowers are produced in conspicuous large panicles, each flower with a five-lobed blue to purple-blue corolla; a few species have white flowers. The fruit is an oblong to oval flattened capsule containing numerous slender seeds. The genus differs from other genera in the Bignoniaceae in having a staminode that is longer than the stamens, tricolpate pollen, and a chromosome number of 18.",
            distribution: "Most tropical and subtropical regions of Australia",
            "Suitable Climate": "Tropical and warm temperate climates.",
            protection: "None",
            animalHabitat: "Birds",
        },
        stages: 3
    },
};

export default specieData;
