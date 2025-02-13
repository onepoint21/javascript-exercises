const repeatString = function (string, number) {
    if (number < 0) return `ERROR`;
    let userString = ``;
    for (let i = 0; i < number; i++) {
        userString += string;
    }
    return userString;
};

// Do not edit below this line
module.exports = repeatString;
