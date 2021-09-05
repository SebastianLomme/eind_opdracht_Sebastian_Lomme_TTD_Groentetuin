const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
    getYieldForPlantFacter,
} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
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
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

test("calculate cost for crop", () => {
    const costPlant = 1;
    const numberPlants = 230;
    const total = costPlant * numberPlants;
    expect(getCostsForCrop(costPlant, numberPlants)).toBe(total);
})

test("calculate total revenue for crop", () => {
    const opbrengsPerPlant = 10;
    const aantalPlanten = 230;
    const total = opbrengsPerPlant * aantalPlanten;
    expect(getRevenueForCrop(opbrengsPerPlant, aantalPlanten)).toBe(total);
})

test("calculate profit for crop", () => {
    const opbrengsPerPlant = 10;
    const aantalPlanten = 230;
    const cost = 50;
    const profit = (aantalPlanten * opbrengsPerPlant) - cost;
    expect(getProfitForCrop(aantalPlanten, opbrengsPerPlant, cost)).toBe(profit);
})

test("calculate total profit for all crops", () => {
    const crop1 = 4;
    const crop2 = 3;
    const total = crop1 + crop2;
    expect(getTotalProfit(crop1, crop2)).toBe(total)
})

describe("getYieldForPlant", () => {
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

    test("Get yield for plant with factors", () => {
        expect(getYieldForPlantFacter(corn, -50)).toBe(15);
    });
});


