// Only change code below this line
function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}
console.log(countdown(6));
// Only change code above this line