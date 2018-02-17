var express = require('express');
var router = express.Router();
var johnnyCtrl = require('../controllers/johnnyController');

router.get('/', (req, res) => {
    res.send('Hello')
})

router.get('/blink', johnnyCtrl.blink)

router.get('/off', johnnyCtrl.off)

router.get('/showStrip', johnnyCtrl.showStrip)

router.get('/stopStrip', johnnyCtrl.stopStrip)

module.exports = router