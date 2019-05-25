const route=require('express').Router();
route.get('/login',(req,res)=>{
    res.render('login')
})
route.get('/register',(req,res)=>{
    res.render('register')
})
route.post('/login',(req,res)=>{
    const {email,password}=req.body;
    let errors=[];
    if( !email || !password){
        errors.push({msg:'please fill all mandatory fields'});
    }
    if(password.length <6){
        errors.push({msg:'password  should be atleast 6 characters'})
    }
    if(errors.length >0){
        res.render('login',{
            errors,email,password
        })
    }else{
        res.send('success')
    }
})
route.post('/register',(req,res)=>{
    const {name,email,password,password2}=req.body;
    let errors=[];
    if(!name || !email || !password || !password2){
        errors.push({msg:'please fill all mandatory fields'});
    }
    if(password!==password2){
        errors.push({msg:'password do not match'})
    }
    if(password.length <6){
        errors.push({msg:'password  should be atleast 6 characters'})
    }
    if(errors.length >0){
        res.render('register',{
            errors,name,email,password,password2
        })
    }else{
        res.send('pass')
    }
})
module.exports=route