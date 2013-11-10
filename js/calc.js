function Model() {};

Model.prototype.attributes = {
    "first_value": undefined,
    "second_value": undefined,
    "operator": undefined,
    "active_input": undefined,
    "result_value": undefined
};

Model.prototype.set = function (key, value) {
    this.attributes[key] = value;
};


Model.prototype.get = function (key) {
    return this.attributes[key];
};

Model.prototype.getResult = function () { 
    
    var first_value = parseInt(this.attributes.first_value),
        second_value = parseInt(this.attributes.second_value), 
        result;
   
    if (this.attributes.operator === "+") {
        result = first_value + second_value;
    }

    if (this.attributes.operator === "-") {
        result = first_value - second_value;
    }

    if (this.attributes.operator === "*") {
        result = first_value * second_value;
    }

    if (this.attributes.operator === "/") {
        result = first_value / second_value;
    }

    return result;
};