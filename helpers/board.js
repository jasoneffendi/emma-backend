var five = require("johnny-five");
var pixel = require("node-pixel");
var board = new five.Board({
    port: "COM9"
});

module.exports = { board, five, pixel }