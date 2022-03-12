const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => {
    res.send('In articles') /* All article contents will be in sub folder */
})

module.exports = router