const mongoose = require('mongoose'); 
const teamschema = mongoose.Schema({
    name: {
        type:String,
        require: true
    },
    foundation: {
        type: Number
    },
    victories: {
        type:Number
    },
    championshipswins: {
        type:Number
    },
    lastdriver1: {
        type:String,
        require:true
    },
    lastdriver2: {
        type:String,
        require:true
    },
}); 

module.exports = mongoose.model('teams', teamschema);