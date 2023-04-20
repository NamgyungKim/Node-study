let result = 0;

console.time('duration_sum');

for (let i = 1; i<=1000; i++){
    result += 1;
}

console.timeEnd('duration_sum');
console.log('1부터 1000까지의 합 : '+ result)

// ------------------------------------------

console.log('현재 실행한 파일이름 : %s', __filename);
console.log('현재 실행한 파일패스 : %s', __dirname);

// ------------------------------------------

// 프로그램을 실행했을 때 만ㄷ르어지는 프로세스 정보
// console.dir(process)

process.argv.forEach((item,index)=>{
    console.log(index + ':' , item)
})

// -------------------------------------------

console.dir(process.env)
console.log('OS의 환경 변수 값 : ' + process.env['OS'])