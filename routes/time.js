const express = require('express')
const router = express.Router()

const Entry = require('../models/Entry')

router.get('/', async (req, res) => {
    try {
        let time = []
        let catagories_db = await Entry.find({})

        for (let x = 0; x < catagories_db.length; x++) {
            for (const property in catagories_db[x].entry) {
                //value -> console.log(catagories_db[x].entry[property])
                if (property == 'wake') {
                    time.push(catagories_db[x].entry[property])
                }
            }
        }

        let count = 0
        for (let x = 0; x < time.length; x++) {
            let number = Number(time[x])
            count += number
        }
        let average_wake = (count / time.length).toFixed(2)
        res.send({ "average_wake": average_wake })

    } catch (err) {
        console.error(err.message)
        res.status(500).json({ errors: [{ msg: 'Server Error' }] })
    }
})

module.exports = router