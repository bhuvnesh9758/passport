const route=require('express').Router();
route.get('/',(req,res)=>{
    res.render('welcome')
})
module.exports=route