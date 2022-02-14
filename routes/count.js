const express = require('express')
const router = express.Router()

const Entry = require('../models/Entry')

router.get('/', async (req, res) => {
    try {
        let keys = []
        let catagories_db = await Entry.find({})

        for (let x = 0; x < catagories_db.length; x++) {
            for (const property in catagories_db[x].entry) {
                if (!keys.includes(property)) {
                    keys.push(property)
                }
            }
        }

        keys.sort()

        res.json({ keys })

    } catch (err) {
        console.error(err.message)
        res.status(500).json({ errors: [{ msg: 'Server Error' }] })
    }
})

module.exports = router