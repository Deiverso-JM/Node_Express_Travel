import  Sequelize  from "sequelize";
import dotenv  from "dotenv/config";


const db = new Sequelize(process.env.DB_Name, process.env.DB_root, process.env.DB_Password, {
    host: process.env.DB_host,
    port: '3306',
    dialect: 'mysql',
    define:{
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    operatoraliases: false

})

export default db;