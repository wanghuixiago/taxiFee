var calculateDistanceFee = function (inputs) {
    return inputs.distance < 2 ? 6 : 6 + (inputs.distance < 8 ? (inputs.distance - 2) * 0.8 : 6 * 0.8 + (inputs.distance - 8) * 1.2);
}

var calculateParkFee = function (inputs) {
    return inputs.parkTime * 0.25;
}
var calculateFee = function (DistanceFee, ParkFee) {
    var baseFee = DistanceFee + ParkFee;
    return Math.round(baseFee);
}

module.exports = function main(inputs) {
    return calculateFee(calculateDistanceFee(inputs), calculateParkFee(inputs))
};