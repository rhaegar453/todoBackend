var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var taskSchema=new Schema({
    name:String,
    createdDate:{
        type:Date,
        default:Date.now()
    },
    description:{
        type:String
    },
    endDate:{
        type:Date,
        required:true
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        required:true
    }
});


module.exports=mongoose.model('task', taskSchema);

