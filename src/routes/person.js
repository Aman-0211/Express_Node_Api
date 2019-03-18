let express = require('express')
let router = express.Router()

// Query String => query property on the request object
// localhost:808/person?id=1&title=abc
router.get("/person" ,(req ,res) =>{
    if(req.query.id){
        res.send(`you have requested a person ${req.query.id}`)
    }
    else{
        res.send("you have requested a person")
    }
})

// Params property on the request body
// localhost:808/person/id 
router.get('/person/:id' ,(req, res) =>{
    res.send(`you have requested a person ${req.params.id}`)
})

router.get('/error' , (req ,res) =>{
    throw new Error('This is forced error .')
})
module.exports = router 