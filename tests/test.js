var five = require("johnny-five");
var pixel = require("node-pixel");

var board = new five.Board({
    port: "COM9"
});
var strip = null;

var fps = 90;

board.on("ready", function () {
    console.log("Board is ready")
    // var led = new five.Led(11);
    // led.blink(500);
    strip = new pixel.Strip({
        board: this,
        controller: "FIRMATA",
        strips: [{ pin: 11, length: 58 },], // this is preferred form for definition
        gamma: 2.8, // set to a gamma that works nicely for WS2812
    });

    strip.on("ready", function () {
        console.log("Strip is ready")
        // do stuff with the strip here.
        var colors = ["red", "green", "blue", "yellow", "cyan", "magenta", "white"];
        var current_colors = [0, 1, 2, 3, 4];
        var current_pos = [0, 1, 2, 3, 4];
        var blinker = setInterval(function () {

            strip.color("#000"); // blanks it out

            for (var i = 0; i < current_pos.length; i++) {
                if (++current_pos[i] >= strip.length) {
                    current_pos[i] = 0;
                    if (++current_colors[i] >= colors.length) current_colors[i] = 0;
                }
                strip.pixel(current_pos[i]).color(colors[current_colors[i]]);
            }

            strip.show();
        }, 1000 / fps);
    });
});