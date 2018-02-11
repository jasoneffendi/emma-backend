var { board, five } = require('../helpers/board')

class johnnyCtrl {
    static blink(req,res) {
        var led = new five.Led(13);
        // led.on();
        led.blink(500)
        res.send('Led blink')
    }
}

module.exports = johnnyCtrl