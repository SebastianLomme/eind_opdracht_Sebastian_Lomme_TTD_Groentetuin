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

describe("getCostsForCrop", () => {
    test("calculate cost for crop", () => {
        const corn = {
            name: "corn",
            yield: 30,
            cost: 1,
            revenue: 2,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getCostsForCrop(input)).toBe(10);
    })
})

describe("getRevenueForCrop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        cost: 1,
        revenue: 2,
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
    test("calculate total revenue for crop", () => {
        expect(getRevenueForCrop(input)).toBe(600);
    })
    test("calculate total revenue for crop whit factor rain low", () => {
        const environmentFactors = {
            rain: "low",
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(300);
    })
})


describe("getRevenueForCrop whit factors ", () => {
    const corn = {
        name: "corn",
        yield: 30,
        cost: 1,
        revenue: 2,
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
    
    test("calculate total revenue for crop whit factor rain low", () => {
        const environmentFactors = {
            rain: "low",
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(300);
    })
})

describe("getProfitForCrop", () => {
    const corn = {
        name: "corn",
        yield: 30,
        cost: 1,
        revenue: 2,
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
    test("calculate profit for crop", () => {
        expect(getProfitForCrop(input)).toBe(590);
    })
    test("calculate profit for crop whit factor rain low", () => {
        const environmentFactors = {
            rain: "low",
        };
        expect(getProfitForCrop(input, environmentFactors)).toBe(290);
    })
    test("calculate profit for crop whit factor rain en sun low", () => {
        const environmentFactors = {
            rain: "low",
            sun:"low",
        };
        expect(getProfitForCrop(input, environmentFactors)).toBe(140);
    })
})

describe("getTotalProfit", () => {
    test("calculate total profit for all crops", () => {
        const crop1 = 4;
        const crop2 = 3;
        const total = crop1 + crop2;
        expect(getTotalProfit(crop1, crop2)).toBe(total)
    })
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
            rain: "low",
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

describe("getYieldForCrop whit factors", () => {
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
    const input = {
        crop: corn,
        numCrops: 10,
    };
    test("Get yield for crop, whit environmentFactor rain high", () => {
        const environmentFactors = {
            rain: "high",
        };
        const YieldForPlant = getYieldForPlant(corn, environmentFactors)
        let total = YieldForPlant * 10
        expect(getYieldForCrop(input, environmentFactors)).toBe(total);
    });
    test("Get yield for crop, whit environmentFactors rain and sun", () => {
        const environmentFactors = {
            rain: "high",
            sun: "low"
        };
        const YieldForPlant = getYieldForPlant(corn, environmentFactors)
        let total = YieldForPlant * 10
        expect(getYieldForCrop(input, environmentFactors)).toBe(total);
    });
});

describe("getTotalYield whit factors", () => {
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
    const pumpkin = {
        name: "pumpkin",
        yield: 50,
        factors: {
            sun: {
                low: -20,
                medium: 0,
                high: 70,
            },
            rain: {
                low: -80,
                medium: 0,
                high: 20,
            },
        },
    };

    const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
    ];


    test("Get yield for all crops, whit environmentFactor rain high", () => {
        const environmentFactors = {
            rain: "high",
        }
        expect(getTotalYield( {crops}, environmentFactors )).toBe(345);
    })
    test("Get yield for all crops, whit environmentFactors rain high and sun low", () => {
        const environmentFactors = {
            rain: "high",
            sun: "low",
        }
        expect(getTotalYield({crops}, environmentFactors )).toBe(208.5);
    })
});
