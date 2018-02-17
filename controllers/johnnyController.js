var { board, five } = require('../helpers/board')
var { strip } = require('../index')
var led = new five.Led(13);
var fps = 80;


class johnnyCtrl {
    static blink(req,res) {
        
        // led.on();
        led.blink(500);
        // strip.show();
        res.send('Led blink')
    }

    static off(req,res) {
        led.stop().off()
        res.send('Led off')
    }

    static showStrip(req,res) {
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
        res.send('Show is on')
    }

    static stopStrip(req,res) {
        strip.off();
        res.send('Strip has been turned off')
    }
}

module.exports = johnnyCtrl