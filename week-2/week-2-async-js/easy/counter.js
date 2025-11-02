// counter with the help of setInterval 

let counter = 0;
function printCounter() {
  console.clear();
  console.log(counter);
  counter += 1; //ye globally defined h na isliye when function is called again and again it doesnot start from 0 as also counter is not a arguments we are giving to the function so it doesn't craete nuisance
}

setInterval(printCounter, 1000);
