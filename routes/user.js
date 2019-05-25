const route=require('express').Router();
const User=require('../db')
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
        errors.push({msg:'password  should be atleast 6 characters'});
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
    //validation
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
        //render the same
        res.render('register',{
            errors,name,email,password,password2
        })
    }else{
        //check if user already exist or not
        User.findAll({
            where:{
                email:email
            }
        })
        .then((user)=>{
            if(user.length>0){
            errors.push({msg:'email already exist'});
            res.render('register',{
                errors,name,email,password,password2
            })
        }else{
              //create user
        User.create({
            name:name,
            email:email,
            password:password
        })
        .then((user)=>{
            console.log('user created with id',user.id)
            res.redirect('login')
        })
        .catch(err=>console.log(err))
        }
        })
        .catch(err=>{
            err=>console.log(err)
        })
    }
})
module.exports=route