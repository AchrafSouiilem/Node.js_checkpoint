const fs = require("fs")

fs.readFile('./welcome.txt',(err, data)=> {
    if(err) {
        console.error(err)
        return;
    }
    console.log(data.toString());
})