var mongoose=require('mongoose');
var passport=require('passport');
require('../config/passport')(passport);
var settings=require('../config/settings');
var express=require('express');
var jwt=require('jsonwebtoken');
var router=express.Router();
var respond=require('../config/respond');

var Task=require('../models/task');

var getToken = (headers) => {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1]
        } else {
            return null
        }
    }
}


function getDetails(token) {
    var value = jwt.verify(token, settings.secret)
    return {
        email: value.email,
        username: value.username,
        id: value._id
    };
}
//Works
router.post('/newTask', passport.authenticate('jwt', {session:false}),(req, res)=>{
    var token=getToken(req.headers);
    var details=getDetails(token);
    if(token){
        var newTask=new Task({
            title:req.body.title,
            description:req.body.description,
            endDate:req.body.endDate,
            createdBy:details.id
        });
    
        newTask.save().then(data=>{
            return res.status(200).json(respond(true,data));
        }).catch(err=>{
            console.log(err);
            return res.status(400).json(respond(false, {message:"Something went wrong"}));
        });
    }
});

//Get all my tasks
//Works 
router.get('/',passport.authenticate('jwt', {session:false}), (req, res)=>{
    var token=getToken(req.headers);
    var details=getDetails(token);
    new Error('make something wrong')
    if(token){
        Task.find({createdBy:details.id}).sort({createdDate:-1}).limit(10).then(data=>{
            return res.status(200).json(respond(true, data, 200));
        }).catch(err=>{
            return res.status(400).json(respond(false, err));
        });
    }
});

//Edit a particular task
//Works 
router.put('/update', passport.authenticate('jwt', {session:false}), (req, res)=>{
    var token=getToken(req.headers);
    var details=getDetails(token);

    if(token){
        var updatedTask={
            title:req.body.name,
            description:req.body.description,
            endDate:req.body.endDate,
            createdBy:details.id,
            createdDate:Date.now()
        }
        Task.update({_id:req.headers.id}, updatedTask, {upsert:true, new:true}).then(data=>{
            return res.status(200).json(data);
        }).catch(err=>{
            return res.status(400).json(err);
        });
    }
});

router.delete('/delete', passport.authenticate('jwt', {session:false}),(req, res)=>{
    var token=getToken(req.headers);
    var details=getDetails(token);
    if(token){
        Task.deleteOne({_id:req.headers.id}).then(data=>{
            console.log(data);
            if(data.n==1){
                return res.status(200).json(respond(true,{message:"Deleted Successfully",id:req.headers.id}));
            }
            else {
                return res.status(400).json(respond(false, {message:"This item doesnt exist"}))
            }
        }).catch(err=>{
            res.status(400).json(err);
        });
    }
})

module.exports=router;