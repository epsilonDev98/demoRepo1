//here all schemas defineds
let mongoose=require('mongoose')
let contactSchema=mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
       
    }

})
let Contact=module.exports=mongoose.model('Contact',contactSchema)