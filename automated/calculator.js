function sum(var_x, var_y){
    if(typeof var_x == "string" || typeof var_y == "string") return "Input numbers only."
    return var_x + var_y;
}

function product(var_x, var_y){
    return var_x * var_y;
}

function diff(var_x, var_y){
    return var_x - var_y;
}

function quo(var_x, var_y){
    if (var_y === 0) return "Can't Divide by Zero."
    return var_x / var_y;
}

function maximum(var_x, var_y){
    if (var_x > var_y){
        return var_x
    }
    else if (var_y > var_x){
        return var_y
    }
    return var_x
}

module.exports = {sum, diff, product, maximum, quo};