const mysql = require('mysql')

const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'blogs'
})


DB.connect((err)=>{
    console.log("connected to database");
    // console.log(err);
    if(!err){
        DB.query(`SELECT 1 FROM blogs`,(err,result)=>{
            if(err){
                console.log("creating table");
                DB.query(`CREATE TABLE blogs(
                    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                    title VARCHAR(60) NOT NULL,
                    img_url TEXT NOT NULL,
                    description VARCHAR(100) NOT NULL,
                    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )`)
                console.log("table created");
            }else{
                console.log("table already exists");
            }
            
        })
    }else{
        console.log("failed to connect")
    }
})

module.exports = DB;