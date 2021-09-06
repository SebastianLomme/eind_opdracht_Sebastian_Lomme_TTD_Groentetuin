const getCostsForCrop = (input) => input.crop.cost * input.numCrops;
const getRevenueForCrop = (plant, environmentFactors) => getYieldForPlant(plant.crop, environmentFactors) * plant.numCrops * plant.crop.revenue;
const getProfitForCrop = (input, environmentFactors) => getRevenueForCrop(input, environmentFactors) - getCostsForCrop(input);
const getTotalProfit = (crops, environmentFactors) => crops.map((crop) => getProfitForCrop(crop, environmentFactors)).reduce((current, total) => current + total);

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
