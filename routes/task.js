var mongoose=require('mongoose');
var passport=require('passport');

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

router.post('/newTask', passport.authenticate('jwt', {session:false}),(req, res)=>{
    var token=getToken(req.headers);
    var details=getDetails(token);
    if(token){
        var newTask=new Task({
            name:req.body.name,
            description:req.body.description,
            startDate:req.body.startDate,
            endDate:req.body.endDate,
            createdBy:details.id
        });
    
        newTask.save().then(data=>{
            return res.json(respond(true, data));
        }).catch(err=>{
            return res.json(respond(false, err));
        });
    }
});

//Get all my tasks
router.get('/',passport.authenticate('jwt', {session:false}), (req, res)=>{
    var token=getToken(req.headers);
    var details=getDetails(token);
    if(token){
        Task.find({createdBy:details.id}).then(data=>{
            return res.json(respond(true, data));
        }).catch(err=>{
            return res.json(respond(false, err));
        });
    }
});

//Edit a particular task
router.put('/:id', passport.authenticate('jwt', {session:false}), (req, res)=>{
    var token=getToken(req.headers);
    var details=getDetails(token);

    if(token){
        var updatedTask={
            name:req.body.name,
            description:req.body.description,
            startDate:req.body.startDate,
            endDate:req.body.endDate,
            createdBy:details.id
        }

        Task.update({_id:req.params.id}, updatedTask, {upsert:true, new:true}).then(data=>{
            return res.json(data);
        }).catch(err=>{
            return res.json(err);
        });
    }
});

module.exports=router;