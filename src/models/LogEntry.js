
const mongoose = require('mongoose');
const { Schema } = mongoose;


const requiredString = {
    type:String,
    required:true,
};

// #log entry


// *title-text
// *description-text
// *comments-text
// *rating-scale of 1-10
// *image-text-URL
// *start date -DateTime
// *end date -DateTime
// *latitude-Number
// *longitude-Number
// *created at-datetime
// *updated at-datetime


const logEntrySchema= new Schema({
  title: requiredString,// String is shorthand for {type: String}
  description: String,
  comments: String,
  rating:{
    type: Number,
    min: 0,
    max: 10,
    default:0,
  },
   image:String,
   latitude:{
    type:Number,
    required:true,
    min:-90,
    max:90,
   },
   longitude:{
    type:Number,
    required:true,
    min:-180,
    max:180,
   },

  visitDate:{
    type:Date,
    required:true,
  },
 
},{
    timestamps:true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;