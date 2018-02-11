var five = require("johnny-five");
var board = new five.Board({
    port: "COM9"
});

module.exports = {board, five}