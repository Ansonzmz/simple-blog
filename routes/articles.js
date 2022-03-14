const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('articles/new') /* All article contents will be in sub folder */
})

router.post('/',(req, res) => {
    
})

module.exports = router