var express = require('express');
var router = express.Router();
var johnnyCtrl = require('../controllers/johnnyController')

router.get('/', (req, res) => {
    res.send('Hello')
})

router.get('/blink', johnnyCtrl.blink)
module.exports = router