const output = 'Hello abcdefg'
const buffer1 = new Buffer(10) // 사이즈 지정
const len = buffer1.write(output, 'utf8')
console.log('첫번째 문자열 : %s', buffer1.toString())

const buffer2 = new Buffer('안녕!', 'utf8')
console.log('두번째 버퍼의 문자열 : %s', buffer2.toString())

console.log('버퍼의 객체 타입 : %s', Buffer.isBuffer(buffer1))

const byteLen = Buffer.byteLength(output)
const str1 = buffer1.toString('utf8', 0, byteLen)
const str2 = buffer2.toString('utf8')

buffer1.copy(buffer2, 0, 0, len)
console.log('두번째 버퍼에 복사한 후의 문자열 : %s', buffer2.toString('utf8'));

const buffer3 = Buffer.concat([buffer1, buffer2])
console.log('두개의 버퍼를 붙인 후의 문자열 : %s', buffer3.toString('utf8'));