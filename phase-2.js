const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let total = [];

  for (let i = 1; i <= 10; i++) {
    total.push(addNums(i * increment));
  }
  return total;
}


// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let total = []
  for (let i = 1; i <= 10; i++) {
    total.push(addManyNums(increment * i));
  }
  return total;
}

console.log(addManyNums10(10));

module.exports = [addNums10, addManyNums10];
