let CustomerModel = require('../models/customer_model')
let express = require('express')
let router = express.Router()

//post localhost:8080/customer
// create a new customer
router.post('/customer', (req , res) =>{
    // req.body
    if(!req.body){
        return res.status(400).send('Request Body Is Missing')
    }

    if(!req.body.email){
        // ...
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
        res.status(500).json(err)
    })
})

// GET Request  =======================

router.get('/customer' , (req ,res) =>{

    if(!req.query.email){
        return res.status(400).send("missing URL parametere: email")
    }

    CustomerModel.findOne({
        email:req.query.email
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})


// Update Request =====================

router.put('/customer',( req , res ) =>{

    if(!req.query.email){
        return res.status(400).send("missing URL parametere: email")
    }

    CustomerModel.findOneAndUpdate({
        email : req.query.email
    }, req.body,{
        new : true
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

//  DELETE Request ===============

router.delete('/customer' , (req ,res) =>{
    if(!req.query.email){
        return res.status(400).send("Missing URL parameter: email")
    }
    CustomerModel.findOneAndRemove({
        email: req.query.email
    })
    .then(doc =>{
        res.json(doc)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

module.exports = router