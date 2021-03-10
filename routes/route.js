const express=require('express')
const router=express.Router();
//bring Model
const Contact =require('../models/contacts')
//retreiving data

router.get('/contacts',function(req,res,next){
   // res.send('Retrieve contact list')
   Contact.find(function(err,contacts){
       res.json(contacts)
   })
})

//add contacts

router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    });



    newContact.save((err,contact) => {

        if(err){
            res.json({msg : 'Failed to add contact'});
        }
        else{
           res.json({msg : 'Contact added successfully'}); 
        }

    });
});
//update contacts
router.post('/contact/:id',function(req,res){
    let newContact={}
    newContact.first_name=req.body.first_name
    newContact.last_name=req.body.last_name
    newContact.phone=req.body.phone
   
   let query={_id:req.params.id}

    Contact.update(query,newContact,function(err){
        if(err){
            console.log(err);
            return
        }else{
          // req.flash('success','Article Updated')
          res.json({msg:'Updated Successfully'})
          //  res.redirect('/')
        }
    })
  
})

//deleting contacts

router.delete('/contact/:id',function(req,res,next){
    Contact.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })

})
module.exports=router;