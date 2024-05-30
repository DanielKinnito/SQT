const{ sum, product, quo, maximum, diff} = require("./calculator.js")

describe(" Function sum", ()=>{
    test("should return correct sum of two integers", ()=>{
        const var_x = 2;
        const var_y = 3;
        const result = sum(var_x, var_y);
        expect(result).toBe(5);
    })
    test("should return a string showing error", ()=>{
        const var_x = 2;
        const var_y = "a";
        const result = sum(var_x, var_y);
        expect(result).toBe("Input numbers only.");
    })

})

describe(" Function diff", ()=>{
    test("should return correct result of two integers", ()=>{
        const var_x = 2;
        const var_y = 3;
        const result = diff(var_x, var_y);
        expect(result).toBe(-1);
    })

    test("should return a concatinated string result if any of the two inputs are strings", ()=>{
        const var_x = 2;
        const var_y = "a";
        const result = diff(var_x, var_y);
        expect(result).toBe(NaN);
    })

})

describe(" Function product", ()=>{
    test("should return correct result of two integers", ()=>{
        const var_x = 2;
        const var_y = 3;
        const result = product(var_x, var_y);
        expect(result).toBe(6);
    })
})


describe(" Function quo", ()=>{
    test("should return correct result of two integers", ()=>{
        const var_x = 6;
        const var_y = 3;

        const result = quo(var_x, var_y);
        expect(result).toBe(2);
    })
    test("should return cannot divide by zero", ()=>{
        const var_x = 2;
        const var_y = 0;
        const result = quo(var_x, var_y);
        expect(result).toBe("Can't Divide by Zero.");
    })
})

describe(" Function maximum", ()=>{
    test("should return correct result of two integers", ()=>{
        const var_x = 2;
        const var_y = 3;
        const result = maximum(var_x, var_y);
        expect(result).toBe(3);
    })
})