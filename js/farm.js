// const corn = {
//     name: "corn",
//     yield: 30,
//     cost: 1,
//     factors: {
//         sun: {
//             low: -50,
//             medium: 0,
//             high: 50,
//         },
//     },
// };

// const input = {
//     crop: corn,
//     numCrops: 10,
// };

const corn = {
    name: "corn",
    yield: 3,
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
    sun: "low",
};

const getCostsForCrop = (kostenPerPlant, aantalPlanten) => kostenPerPlant * aantalPlanten;
const getRevenueForCrop = (opbrengsPerplant, aantalPlanten) => opbrengsPerplant * aantalPlanten;

const getProfitForCrop = (opbrengsPerplant, aantalPlanten, cost) => (opbrengsPerplant * aantalPlanten) - cost;

const getTotalProfit = (crop1, crop2) => crop1 + crop2;

const getYieldForPlant = (plant) => plant.yield;

const getYieldForCrop = (input) => input.crop.yield * input.numCrops;

const getTotalYield = (crops) => crops.crops.map(element => element.crop.yield * element.numCrops).reduce((current, total) => current + total);


console.log(getTotalYield({crops}))




module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
};