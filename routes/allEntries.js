const express = require('express')
const router = express.Router()
const Entry = require('../models/Entry')

router.get('/', async (req, res) => {
    try {
        let sub_find = await Entry.find({})
        // console.log(sub_find[0].date)
        // console.log(sub_find)
        res.send(sub_find)
        console.log('All Entries Requested')

    } catch (err) {
        console.error(err.message)
        res.status(500).json({ errors: [{ msg: 'Server Error' }] })
    }
})

module.exports = router