var {board, five} = require('./helpers/board');

board.on("ready", function () {
    var express = require('express');
    var bodyParser = require('body-parser');
    var cors = require('cors')

    var johnny = require('./routes/johnny')

    var app = express()

    app.use(cors())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use('/johnny', johnny)

    app.listen(3000, () => {
        console.log('Listening on 3000')
    })
});