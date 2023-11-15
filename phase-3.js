const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  let total = [];
  // console.time()
  let start = Date.now();
  for (let i = 1; i <= 10; i++) {
    total.push(addNums(i * increment));
    let end = Date.now()
    console.log(end - start)
  }
  // console.timeEnd();

  return total;
}


function addManyNums10Timing(increment) {
  let total = []
  // console.time()

  for (let i = 1; i <= 10; i++) {
    // let start = Date.now();
    total.push(addManyNums(increment * i));
  //   let end = Date.now()
  //   console.log(end - start)
  }

  return total;
}


n = 1000000
console.log(`addNums(${n}): `);

addNums10Timing(1000000);


console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);


