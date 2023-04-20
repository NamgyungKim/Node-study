const fs = require('fs');

// R
const data = fs.readFileSync('./package.json','utf8')
fs.readFile('./package.json', 'utf8', function(err, data){
    console.log(data)
})

console.log(data)

// U
fs.writeFile('./output.txt','Hello Node.js!', function (err){
    if(err){
        console.log('ERR: ' + err)
    }
    console.log('작성완료!')
})