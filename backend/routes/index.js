const Controller = require('../controller/controller')
const express = require('express')
const router = express.Router()

router.get('/nilaiByArea', Controller.getNilaiByArea)
router.get('/nilaiByBrand', Controller.getNilaiByBrand)


module.exports = router