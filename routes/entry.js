const express = require('express')
const router = express.Router()
const { validationResult } = require('express-validator')

const Entry = require('../models/Entry')

router.post('/', async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const newEntry = new Entry({
            entry: req.body
        })

        const entry = await newEntry.save()

        res.json(entry)
        console.log("entry successfully submitted")

    } catch (err) {
        console.error(err.message)
        res.status(500).json({ errors: [{ msg: 'Server Error' }] })
    }
})

module.exports = router