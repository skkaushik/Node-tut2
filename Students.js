const mongoose=require('mongoose');
const studentSchema =new mongoose.Schema({
    name:String,
    Class:Number,
    Father:String,
    marks:Number
});

module.exports =  mongoose.model('studen',studentSchema);