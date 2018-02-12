var { board, five } = require('../helpers/board')
var led = new five.Led(13);

class johnnyCtrl {
    static blink(req,res) {
        // led.on();
        led.blink(500);
        res.send('Led blink')
    }

    static off(req,res) {
        led.stop().off()
        res.send('Led off')
    }
}

module.exports = johnnyCtrl