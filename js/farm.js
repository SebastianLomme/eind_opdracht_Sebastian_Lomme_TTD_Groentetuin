const corn = {
    name: "corn",
    yield: 30,
    factors: {
        sun: {
            low: -50,
            medium: 0,
            high: 50,
        },
    },
};

const environmentFactors = {
    sun: "low",
};

console.log(corn.yield)

const getYieldForPlant = (str) => str;
const getYieldForCrop = (str) => str;
const getTotalYield = (str) => str;

const getCostsForCrop = (kostenPerPlant, aantalPlanten) => kostenPerPlant * aantalPlanten;
const getRevenueForCrop = (opbrengsPerplant, aantalPlanten) => opbrengsPerplant * aantalPlanten;

const getProfitForCrop = (opbrengsPerplant, aantalPlanten, cost) => (opbrengsPerplant * aantalPlanten) - cost

const getTotalProfit = (crop1, crop2) => crop1 + crop2






module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
};