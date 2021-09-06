const getCostsForCrop = (kostenPerPlant, aantalPlanten) => kostenPerPlant * aantalPlanten;
const getRevenueForCrop = (plant, environmentFactors) => {
    return getYieldForPlant(plant.crop, environmentFactors) * plant.numCrops * plant.crop.revenue
};

const getProfitForCrop = (opbrengsPerplant, aantalPlanten, cost) => (opbrengsPerplant * aantalPlanten) - cost;

const getTotalProfit = (crop1, crop2) => crop1 + crop2;

const setFactors = (plant, environmentFactors, factor) => {
    if (!environmentFactors) {
        return 1
    } else {
        switch (environmentFactors[factor]) {
            case "low":
                return (100 + plant.factors[factor].low) / 100;
            case "medium":
                return (100 + plant.factors[factor].medium) / 100
            case "high":
                return (100 + plant.factors[factor].high) / 100
            default: return 1
        }
    };
}

const getYieldForPlant = (plant, environmentFactors) => {
    if (!environmentFactors) {
        return plant.yield
    }
    let sun = setFactors(plant, environmentFactors, "sun")
    let rain = setFactors(plant, environmentFactors, "rain")
    return plant.yield * sun * rain
}
    ;

const getYieldForCrop = (input, environmentFactors) => {
    const YieldForPlant = getYieldForPlant(input.crop, environmentFactors)
    return YieldForPlant * input.numCrops
};


const getTotalYield = (input, environmentFactors) => input.crops
    .map(element => getYieldForCrop(element, environmentFactors))
    .reduce((current, total) => current + total);


module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
};
