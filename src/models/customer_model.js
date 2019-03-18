let mongoose = require('mongoose')

const mongoDB = 'mongodb+srv://user:aman@66614@cluster0-k2eqq.azure.mongodb.net/node_api?retryWrites=true'



mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let CustomerSchema = new mongoose.Schema({
    name:"String",
    email:{
        type:"String",
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer' , CustomerSchema)