const corn = {
    name: "corn",
    yield: 30,
    cost: 1,
    factors: {
        sun: {
            low: -50,
            medium: 0,
            high: 50,
        },
        rain: {
            low: -50,
            medium: 0,
            high: 50,
        },
    },
};

const input = {
    crop: corn,
    numCrops: 10,
};

const pumpkin = {
    name: "pumpkin",
    yield: 4,
};
const crops = [
    { crop: corn, numCrops: 5 },
    { crop: pumpkin, numCrops: 2 },
];

const environmentFactors = {
    sun: "high",
    rain: "high",
};

const getCostsForCrop = (kostenPerPlant, aantalPlanten) => kostenPerPlant * aantalPlanten;
const getRevenueForCrop = (opbrengsPerplant, aantalPlanten) => opbrengsPerplant * aantalPlanten;

const getProfitForCrop = (opbrengsPerplant, aantalPlanten, cost) => (opbrengsPerplant * aantalPlanten) - cost;

const getTotalProfit = (crop1, crop2) => crop1 + crop2;


const getYieldForPlant = (plant, environmentFactors) => {
    if (!environmentFactors){
        return plant.yield
    }
    let sun = 1;
    if (environmentFactors.sun){
        switch (environmentFactors.sun) {
            case "low":
                sun = (100 + plant.factors.sun.low) / 100;
                break
            case "medium":
                sun = (100 + plant.factors.sun.medium) / 100
                break
            case "high":
                sun = (100 + plant.factors.sun.high) / 100
                break
        }
    };
    let rain = 1;
    if (environmentFactors.rain) {
        switch (environmentFactors.rain) {
            case "low":
                rain = (100 + plant.factors.rain.low) / 100;
                break
            case "medium":
                rain = (100 + plant.factors.rain.medium) / 100
                break
            case "high":
                rain  = (100 + plant.factors.rain.high) / 100
                break
        }
    };
    return plant.yield * sun * rain
}
    ;

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = (crops) => crops.crops.map(element => element.crop.yield * element.numCrops).reduce((current, total) => current + total);

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
};


console.log(getYieldForPlant(corn, environmentFactors))
