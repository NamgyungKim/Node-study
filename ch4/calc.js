const util = require('util');
// EventEmitter는 특정 이벤트에 리스너 함수를 달아서, 이벤트가 발생했을 때 이를 캐치할 수 있도록 만들어진 api이다.
const EventEmitter = require('events').EventEmitter;

const Calc = function (){
    const self = this;

    this.on('stop',()=>{
        console.log('Calc에 stop event 전달');
    })
}

util.inherits(Calc, EventEmitter);

Calc.prototype.add =  (a,b) => a+b

module.exports = Calc
module.exports.title= 'calculation';

