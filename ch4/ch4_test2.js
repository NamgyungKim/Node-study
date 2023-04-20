process.on("exit", (num) => {
  console.log("exit 이벤트 발생 %s", num);
});

setTimeout(() => {
  console.log("2초후 종료");
  process.exit(3);
}, 2000);

// ------------------------

const Calc = require("./calc.js");

const calc = new Calc();

calc.emit("stop");
console.log(calc.add(1, 200));


console.log(Calc.title + "에 stop 이벤트 전달");
