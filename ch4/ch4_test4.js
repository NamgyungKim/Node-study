const fs = require('fs');

fs.open('./output.txt','w',function(err,fd){
    if(err) throw err;
    
    const buf = new Buffer('Hello!\n');
    fs.write(fd, buf, 0, buf.length, null, function (err, written, buffer){
        if(err) throw err;
        
        console.log(err,written, buffer);
        
        fs.close(fd, function (){
            console.log('파일 열고 닫기 완료')
        })
    })
})

