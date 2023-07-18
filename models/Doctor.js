const mongoose=require('mongoose');

const doctorSchema =new mongoose.Schema({
      
    email:{
        type:String,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true       
    },
    password:{
        type:String,
        require:true       
    },
},{
    timestamps:true
});

const Doctor=mongoose.model('Doctor',doctorSchema);
module.exports=Doctor;