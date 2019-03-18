let CustomerModel = require('../models/customer_model')
let express = require('express')
let router = express.Router()

//post localhost:8080/customer
// create a new customer
router.post('/customer', (req , res) =>{
    // req.body
    if(!req.body){
        return res.status(400).send('request Body Is Missing')
    }

    let model = new CustomerModel(req.body)
    model.save()
    .then(doc =>{
        if(!doc || doc.length === 0){
            return res.status(500).send(doc)
        }
        res.status(201).send(doc)
    })
    .catch(err =>{
        res.status(500).json(errr)
    })
})


module.exports = router