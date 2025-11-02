// counter with the help of setTimeout

let counter = 0;
function printCounter() {
  console.clear();
  console.log(counter);
  counter += 1;
  setTimeout(printCounter, 1000);
}

setTimeout(printCounter, 1000);
