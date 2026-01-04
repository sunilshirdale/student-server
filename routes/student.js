var express = require('express');
var router=express.Router();
router.post('/std-reg',function(req,res){
      res.json({
    message: 'Welcome To Post Method'
  });
})
module.exports=router;