const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
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
            rain: {
                low: -50,
                medium: 0,
                high: 50,
            },
        },
    };
    const tomato = {
        name: "tomato",
        yield: 50,
        factors: {
            sun: {
                low: -30,
                medium: 0,
                high: 80,
            },
            rain: {
                low: -20,
                medium: 0,
                high: 70,
            },
        },
    };
    test("Get yield for plant with factor sun low", () => {
        const environmentFactors = {
            sun: "low",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
    test("Get yield for plant with factor sun medium", () => {
        const environmentFactors = {
            sun: "medium",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(30);
    });
    test("Get yield for plant with factor sun high", () => {
        const environmentFactors = {
            sun: "high",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
    });
    test("Get yield for plant with factors sun and rain low", () => {
        const environmentFactors = {
            sun: "low",
            rain:"low",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(7.5);
    });
    test("Get yield for plant with factors sun and rain medium", () => {
        const environmentFactors = {
            sun: "medium",
            rain: "medium",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(30);
    });
    test("Get yield for plant with factors sun and rain high", () => {
        const environmentFactors = {
            sun: "high",
            rain: "high",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(67.5);
    });

    test("Get yield for plant with factor rain high", () => {
        const environmentFactors = {
            rain: "high",
        };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
    });
    
    test("Get yield for plant with factor rain high", () => {
        const environmentFactors = {
            rain: "high",
        };
        expect(getYieldForPlant(tomato, environmentFactors)).toBe(85);
    });
});



