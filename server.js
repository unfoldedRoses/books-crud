const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const booksRoutes=require('./routes/bookRoutes')

const app = express()
const port = 3000
//import dbConfig file
const db = require('./config/dbConfig')


app.use(morgan('dev')) //this is for debug purpose whenver route hits it will show in terminal which is invoked 
app.use(cors())  //this is cors for client to connect to server
app.use(express.json()) //this is to parse json body as request cycle
app.use(express.urlencoded({ extended: true }))
app.use('/books', booksRoutes) //now we test this route using postman 


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})