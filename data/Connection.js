import mysql from 'mysql'

console.log("get connection....");

const connection = mysql.createConnection({
    database : "api_back",
    host: "localhost",
    user: "root",
    password:""
})

export default connection;

