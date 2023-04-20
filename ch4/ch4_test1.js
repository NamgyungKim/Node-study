const url = require('url');

const curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&here=m&sm=mtp_thy');

const curStr = url.format(curURL)
console.log('주소 문자열 : %s', curStr)
console.dir(curURL)

// 파라미터 구분
const querystring = require('querystring')
const param = querystring.parse(curURL.query)

console.log('파라미터중 query 값 : %s',param.query);
console.log(querystring.stringify(param))