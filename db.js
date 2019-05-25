const Sequelize=require('sequelize')
const db=new Sequelize('mydb','bhuvi','Bhuvi@123',
{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:3
    }
});
const User=db.define('myusers',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
}
)
db.sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  module.exports=User