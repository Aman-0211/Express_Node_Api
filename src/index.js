let express = require('express')
let app = express()
let customerRoute = require("./routes/customer")
let personRoute = require("./routes/person")
let path = require("path")
let bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use((req ,res , next ) =>{
    console.log(`${new Date().toString()} => ${req.originalUrl}` ,req.body)
    next()
})
app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

// handler for (400) - Resources Not Found
app.use((req , res , next)=>{ 
    res.status(400).send('we think you were lost');
})

// Handler for (500) - internal server error
app.use((err , req , res , next) =>{
    console.log(err.stack)
    res.sendFile(path.join(__dirname,'../public/500.html'))
})

const PORT = process.env.PORT || 8080
app.listen(PORT , ()=> console.info(`Server listen port ${PORT}`))