// ES6가 나오면서 기본적으로 제공되는 기능들로 대체가 가능해졌다.
const util = require('util');

const EventEmitter = require('events').EventEmitter;

const Calc = function (){
    const self = this;

    this.on('stop',()=>{
        console.log('Calc에 stop event 전달');
    })
}

// `util.inherits(Calc, EventEmitter)는 Calc 클래스가 EventEmitter 클래스를 상속받도록 만드는 코드.
util.inherits(Calc, EventEmitter);


/**
 * Adds two numbers.
 *
 * @static
 * @memberOf _
 * @since 3.4.0
 * @category Math
 * @param {number} a The first number in an addition.
 * @param {number} b The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * _.add(6, 4);
 * // => 10
 */
Calc.prototype.add = (a,b) => a+b;

module.exports.title= 'calculation';
module.exports = Calc

