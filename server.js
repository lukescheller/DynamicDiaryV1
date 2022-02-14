const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./config/db')

connectDB()

app.use(express.json({ extended: false }))
app.use(cors({ origin: '*' }))

app.use('/entry', require('./routes/entry'))
app.use('/allentries', require('./routes/allEntries'))
app.use('/count', require('./routes/count'))
app.use('/totals', require('./routes/adv_count'))
app.use('/record', require('./routes/record'))
app.use('/time', require('./routes/time'))

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))