const express=require('express')
const app=express()
const expresslayouts=require('express-ejs-layouts')
//ejs
app.use(expresslayouts);
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
const PORT=process.env.PORT||3000;
app.use('/',require('./routes/index'))
app.use('/users',require('./routes/user'))
app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
})