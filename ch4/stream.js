import fs from 'fs';

const infile = fs.createReadStream('./output.txt', {flags: 'r'});
const outfile = fs.createWriteStream('./output.txt',{flags: 'w'});

infile.on('data', (data)=>{
    console.log('읽어들인 데이터', data);
    outfile.write(data)
})


