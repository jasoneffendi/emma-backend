var { board, five, pixel } = require('./helpers/board');

board.on("ready", function () {

    var strip = new pixel.Strip({
        board: board,
        controller: "FIRMATA",
        strips: [{ pin: 11, length: 58 },], // this is preferred form for definition
        gamma: 2.8, // set to a gamma that works nicely for WS2812
    });

    module.exports = { strip }

    strip.on("ready", function () {
        var express = require('express');
        var bodyParser = require('body-parser');
        var cors = require('cors')

        var johnny = require('./routes/johnny')

        var app = express()

        app.use(cors())
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }))

        app.use('/johnny', johnny)

        app.listen(3001, () => {
            console.log('Listening on 3001')
        })
    });
});