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

        let record = []
        let record_obj = {}
        let record_arr = []

        for (let x = 0; x < keys.length; x++) {
            record_obj[keys[x]] = ''
            for (let y = 0; y < catagories_db.length; y++) {
                if (catagories_db[y].entry.hasOwnProperty(keys[x])) {
                    record_arr.push('yes')
                } else {
                    record_arr.push('X')
                }
            }
            record.push(record_obj)
            record_obj[keys[x]] = record_arr
            record_obj = {}
            record_arr = []
        }

        res.send({ 'record': record })
        console.log('all records requested')

    } catch (err) {
        console.error(err.message)
        res.status(500).json({ errors: [{ msg: 'Server Error' }] })
    }
})

module.exports = router