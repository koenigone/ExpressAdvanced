const express = require('express')
const app = express()

const users = require('./routes/users')

const PORT = process.env.PORT || 3000;
app.use(express.static('public'))
app.set('view engine', 'ejs')


app.listen(PORT, ()=> {
    console.log(`Server is listening on PORT ${PORT}`)
})