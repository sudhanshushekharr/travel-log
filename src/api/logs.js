const { Router } = require('express');

const router= Router();
const LogEntry = require('../models/LogEntry');
router.get('/', async (req,res,next)=>{
try{
const enteries=await LogEntry.find();
res.json(enteries);
}
catch(error){
    next(error);
}
});


router.post('/', async (req, res,next) => {

    try{
        const logEntry = new LogEntry(req.body);
        const createdEntry=await logEntry.save();
        res.status(201).json(createdEntry);
    }
    catch(error){
      if(error.name === 'ValidationError'){
        res.status(422);
      }
       next(error);
    }

  
   console.log(req.body);
   res.status(202).json(req.body);
    
 
  });
module.exports=router;
