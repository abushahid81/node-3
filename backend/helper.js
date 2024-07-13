const fs = require("fs");

function read(){
    try{
        const data = fs.readFileSync("./db.json", 'utf8');
        const parsedData = JSON.parse(data);
        return parsedData;
    }catch(err){
        throw new Error("Error reading file: ", err)
    }
}


function write(data){
    try {
        const StoredWrite = JSON.stringify(data);
        fs.writeFileSync('./db.json', StoredWrite, 'utf8');
        return;
    } catch (error) {
        throw new Error('This is Error:', error)
    }
}


module.exports = {read, write}