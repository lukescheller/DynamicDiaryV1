const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EntrySchema = new Schema({
    entry: {
        type: Schema.Types.Mixed,
        default: {},
    },
    date: {
        type: String,
        default: Date
    }
}, { minimize: false })

module.exports = Entry = mongoose.model('entry', EntrySchema)