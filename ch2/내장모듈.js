const os = require('os')

console.log('시스템의 hostname: %s', os.hostname());
console.log('시스템의 메모리: %s / %s', os.freemem(), os.totalmem());
console.log('시스템의 CPU 정보\n');
console.dir(os.cpus())
console.log('시스템의 네트워크 인터페이스 정보 \n');
console.dir(os.networkInterfaces());
//-----------------------------------------------------
const path = require('path');

const directories = ['users','mike','docs'];
const docsDirectory = directories.join(path.sep);
console.log('문서 디렉터리 : %s', docsDirectory)

const curPath = path.join('/Users/mike','notepad.exe');
console.log('파일 패스 : %s', curPath)

const fullFileName = 'C:\\Users\\mike\\notepad.exe';
const dirname = path.dirname(fullFileName)
const basename = path.basename(fullFileName)
const extname = path.extname(fullFileName)

console.log('디렉터리 : %s, 파일이름 : %s, 확장자 : %s', dirname, basename, extname)