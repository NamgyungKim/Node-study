const calc = require('./calc');
console.log(calc.add(1,2))

// -------------------------------------------------
// 시스템 환경변수 접근 nconf
const nconf = require('nconf');
nconf.env()

console.log('OS 환경 변수값 : %s', nconf.get('OS'))
console.dir(nconf)